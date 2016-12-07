const CURRENT_ID_PROPERTY = '__currentId__';

let _global = (typeof window !== 'undefined' && window);
if(_global[CURRENT_ID_PROPERTY] === undefined) {
  _global[CURRENT_ID_PROPERTY] = 0;
}

export function assign(target, ...args) {
  target = target || {};

  for (let sourceObject of args) {
    if (sourceObject) {
      for (let propName in sourceObject) {
        if (sourceObject.hasOwnProperty(propName)) {
          target[propName] = sourceObject[propName];
        }
      }
    }
  }
  return target;
}

/** Generates a unique id in the global scope */
export function getComponentId (prefix) {
  let index = _global[CURRENT_ID_PROPERTY]++;

  return (prefix || '') + index;
}

