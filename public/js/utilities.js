import { isMainThread } from "worker_threads";

var ajax = function (url, methodTYpe, cb) {
var xhr = new XMLHttpRequest();
    xhr.onloadend = function () {
        if (xhr.status === 200) {
        cb && cb(xhr.responseText);
        }
    };
    xhr.open(methodTYpe, url);
    xhr.send();
};

function parseHtml(tmpl) {
    var template, dom;
    template = document.createElement("div");
    template.innerHTML = tmpl;
    dom = template.children;
    if (dom.length > 1) {
      throw Error("Template should contain one root element");
    }
  
    foreach(dom[0].querySelectorAll("[if-value]"), function (node) {
      foreach(node.querySelectorAll("[item][loop]"), function (el) {
        el.setAttribute("hasparentif", true);
      });
    });
  
    return dom[0];
  }



ajax('test1.html', function(feedbackDOM) {
    ft('#container').appendChild(parseHtml(feedbackDOM));
})

function ft(node) {
    if(typeof node === 'string') {
        return document.querySelectorAll(node)
    }
    else {
        return node;
    }
}

ft('#container').classList.add('test')
ft('#container').appendChild(dom);

var valOf = (function() {
    var rreturn = /\r/g;
    var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
    var support = {};
  
    var isFunction = function isFunction(obj) {
      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === 'function' && typeof obj.nodeType !== 'number';
    };
  
    var isWindow = function(obj) {
      return obj != null && obj === obj.window;
    };
  
    var merge = function(first, second) {
      var len = +second.length,
        j = 0,
        i = first.length;
  
      for (; j < len; j++) {
        first[i++] = second[j];
      }
  
      first.length = i;
  
      return first;
    };
  
    var makeArray = function(arr, results) {
      var ret = results || [];
  
      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          merge(ret, typeof arr === 'string' ? [arr] : arr);
        } else {
          [].push.call(ret, arr);
        }
      }
      return ret;
    };
  
    var inArray = function(elem, arr, i) {
      return arr == null ? -1 : [].indexOf.call(arr, elem, i);
    };
  
    var nodeName = function(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    };
  
    var stripAndCollapse = function(value) {
      var tokens = value.match(rnothtmlwhite) || [];
      return tokens.join(' ');
    };
  
    var isArrayLike = function(obj) {
      // Support: real iOS 8.2 only (not reproducible in simulator)
      // `in` check used to prevent JIT error (gh-2145)
      // hasOwn isn't used here due to false negatives
      // regarding Nodelist length in IE
      var length = !!obj && 'length' in obj && obj.length,
        type = typeof obj;
  
      if (isFunction(obj) || isWindow(obj)) {
        return false;
      }
  
      return (
        type === 'array' ||
        length === 0 ||
        (typeof length === 'number' && length > 0 && length - 1 in obj)
      );
    };
  
    var valHooks = {
      option: {
        get: function(elem) {
          var val = elem.getAttribute('value') || null;
          return val != null
            ? val // Support: IE <=10 - 11 only
            : // option.text throws exceptions (#14686, #14858)
              // Strip and collapse whitespace
              // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
              stripAndCollapse(elem.textContent);
        }
      },
      select: {
        get: function(elem) {
          var value,
            option,
            i,
            options = elem.options,
            index = elem.selectedIndex,
            one = elem.type === 'select-one',
            values = one ? null : [],
            max = one ? index + 1 : options.length;
  
          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          }
  
          // Loop through all the selected options
          for (; i < max; i++) {
            option = options[i];
  
            // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551)
            if (
              (option.selected || i === index) &&
              // Don't return options that are disabled or in a disabled optgroup
              !option.disabled &&
              (!option.parentNode.disabled ||
                !nodeName(option.parentNode, 'optgroup'))
            ) {
              // Get the specific value for the option
              value = val(option);
  
              // We don't need an array for one selects
              if (one) {
                return value;
              }
  
              // Multi-Selects return an array
              values.push(value);
            }
          }
  
          return values;
        },
  
        set: function(elem, value) {
          var optionSet,
            option,
            options = elem.options,
            values = makeArray(value),
            i = options.length;
  
          while (i--) {
            option = options[i];
  
            /* eslint-disable no-cond-assign */
  
            if (
              (option.selected =
                inArray(valHooks.option.get(option), values) > -1)
            ) {
              optionSet = true;
            }
  
            /* eslint-enable no-cond-assign */
          }
  
          // Force browsers to behave consistently when non-matching value is set
          if (!optionSet) {
            elem.selectedIndex = -1;
          }
          return values;
        }
      }
    };
  
    // Radios and checkboxes getter/setter
    ['radio', 'checkbox'].forEach(function(i) {
      valHooks[i] = {
        set: function(elem, value) {
          if (Array.isArray(value)) {
            return (elem.checked = inArray(val(elem), value) > -1);
          }
        }
      };
      if (!support.checkOn) {
        valHooks[i].get = function(elem) {
          return elem.getAttribute('value') === null ? 'on' : elem.value;
        };
      }
    });
  
    function _val(el, value) {
      var hooks,
        ret,
        valueIsFunction,
        elem = el[0] || el;
      if (arguments.length === 1) {
        if (elem) {
          hooks = valHooks[elem.type] || valHooks[elem.nodeName.toLowerCase()];
  
          if (
            hooks &&
            'get' in hooks &&
            (ret = hooks.get(elem, 'value')) !== undefined
          ) {
            return ret;
          }
  
          ret = elem.value;
  
          // Handle most common string cases
          if (typeof ret === 'string') {
            return ret.replace(rreturn, '');
          }
  
          // Handle cases where value is null/undef or number
          return ret == null ? '' : ret;
        }
  
        return;
      }
  
      valueIsFunction = isFunction(value);
  
      return [].forEach.call(el, function(elem, i) {
        var val;
  
        if (elem.nodeType !== 1) {
          return;
        }
  
        if (valueIsFunction) {
          val = value.call(elem, i, _val(elem));
        } else {
          val = value;
        }
  
        // Treat null/undefined as ""; convert numbers to string
        if (val == null) {
          val = '';
        } else if (typeof val === 'number') {
          val += '';
        } else if (Array.isArray(val)) {
          val = [].map.call(val, function(value) {
            return value == null ? '' : value + '';
          });
        }
  
        hooks = valHooks[elem.type] || valHooks[elem.nodeName.toLowerCase()];
  
        // If set returns undefined, fall back to normal setting
        if (
          !hooks ||
          !('set' in hooks) ||
          hooks.set(elem, val, 'value') === undefined
        ) {
          elem.value = val;
        }
      });
    }
    return _val;
  })();
  