(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var BLANK = /\s+/g; // ? /\s+/

  // https://github.com/madrobby/zepto/blob/master/src/zepto.js

  var NxDomClassList = nx.declare('nx.DomClassList', {
    statics: {
      'add,remove,replace,toggle,contains': function(inName) {
        return function() {
          return this.__class__(inName, arguments);
        };
      },
      __class__: function(inAction, inArgs) {
        var context = inArgs[0].classList;
        var args = nx.slice(inArgs).slice(1);
        var cssClass = args.length === 1 ? args[0].split(BLANK) : args;
        return context[inAction].apply(context, cssClass);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDomClassList;
  }
})();
