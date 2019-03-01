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
    el.className = 'a bcd e f abd g';
  });

  // 'add,remove,replace,toggle,contains'
  describe('DomClass.methods - Remove', function() {
    test('remove single class -> `a`', function() {
      expect(el.className).toBe('a bcd e f abd g');
      DomClass.remove(el, 'a');
      expect(el.className).toBe('bcd e f abd g');
    });

    test('remove multi class -> `a bcd f`', function() {
      expect(el.className).toBe('a bcd e f abd g');
      DomClass.remove(el, 'a bcd f');
      expect(el.className).toBe('e abd g');
    });

    test('remove multi class with args -> `a,bcd,f`', function() {
      expect(el.className).toBe('a bcd e f abd g');
      DomClass.remove(el, 'a', 'bcd', 'f');
      expect(el.className).toBe('e abd g');
    });
  });
})();
