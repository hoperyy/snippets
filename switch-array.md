```js
switchArray(array, fromIndex, toIndex) {
    if (fromIndex == toIndex) {
        return;
    }

    // 从后往前
    if (fromIndex > toIndex) {
        const targetItem = array.splice(fromIndex, 1)[0];
        array.splice(toIndex, 0, targetItem);

        return;
    }

    // 从前往后
    if (fromIndex < toIndex) {
        const targetItem = array[fromIndex];
        array.splice(toIndex, 0, targetItem);
        array.splice(fromIndex, 1);
        return;
    }
}
```