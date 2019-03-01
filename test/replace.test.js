(function() {
  var nx = require('next-js-core2');
  var DomClass = require('../src/next-dom-class-list');
  var html = require('fs')
    .readFileSync('./test/app.html')
    .toString();
  var el;
  // init document:
  beforeEach(function() {
    document.documentElement.innerHTML = html;
    el = document.getElementById('el');
    el.className = 'a abc e f abd g';
  });

  // 'add,remove,replace,toggle,contains'
  describe('DomClass.methods - Replace', function() {
    test('replace class -> `a->b`', function() {
      expect(el.className).toBe('a abc e f abd g');
      DomClass.replace(el, 'a','A');
      expect(el.className).toBe('A abc e f abd g');
    });
  });
})();
