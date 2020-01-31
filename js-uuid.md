```js
const uuidMap = {};

function _generateUUID() {
  return (new Date().getTime().toString(16) + Math.random().toString(16).substr(2)).substr(2, 16);
}

function generateUUID() {
  let newUuid = _generateUUID();

  while (uuidMap[newUuid]) {
    newUuid = _generateUUID();
  }

  uuidMap[newUuid] = true;

  return newUuid;
}
```