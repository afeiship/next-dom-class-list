# next-dom-class-list
> Standalone dom class implement by dom classList

## install:
```bash
npm install -S afeiship/next-dom-class-list --registry=https://registry.npm.taobao.org
```

## apis:
| api      | params                  | description                                    |
|----------|-------------------------|------------------------------------------------|
| add      | (inElement, cls1, cls2) | Add className for element('cls1', 'cls1 cls2') |
| remove   | (inElement, cls1)       | Remove className from element                  |
| replace  | (inElement, cls1, cls2) | Replace className from element                 |
| toggle   | (inElement, cls1)       | Toggle className from element                  |
| contains | (inElement, cls1)       | Check if has className                         |

## usage:
```js
import NxDomClassList from 'next-dom-class-list';

// code goes here:
// add:
NxDomClassList.add(inElement,'cls1');
NxDomClassList.add(inElement,'cls1 cls2');

// remove:
NxDomClassList.remove(inElement,'cls1');

// replace:
NxDomClassList.replace(inElement,'cls1','cls2');

// toggle:
NxDomClassList.toggle(inElement,'cls1','cls2');

// contains:
NxDomClassList.contains(inElement,'cls1');
```

## resources:
- https://github.com/necolas/dom-classlist
- https://alligator.io/js/classlist/
