(function () {
  var nx = require('next-js-core2');
  var DomClass = require('../src/next-dom-class-list');
  var html = require('fs')
    .readFileSync('./test/app.html')
    .toString();
  var el;
  // init document:
  beforeEach(function () {
    document.documentElement.innerHTML = html;
    el = document.getElementById('el');
    el.className = 'a abc e f abd g';
  });

  // 'add,remove,replace,toggle,contains'
  describe('DomClass.methods - Replace', function () {
    test('contains class -> `a`', function () {
      expect(el.className).toBe('a abc e f abd g');
      expect(DomClass.contains(el, 'a')).toBe(true);
      expect(DomClass.contains(el, 'abc')).toBe(true);
      expect(DomClass.contains(el, 'e')).toBe(true);
      expect(DomClass.contains(el, 'f')).toBe(true);
      expect(DomClass.contains(el, 'abd')).toBe(true);
      expect(DomClass.contains(el, 'g')).toBe(true);
      expect(DomClass.contains(el, 'a abc')).toBe(true);
      expect(DomClass.contains(el, 'gg')).toBe(false);
    });
  });
})();
