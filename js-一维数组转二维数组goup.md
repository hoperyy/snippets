```js
// input: [ 1, 2, 3, 4 ], 2
// output: [ [1, 2], [3, 4] ]
function getGroupList(list, groupLength = 2) {
    let groupIndex = 0;

    const groupList = [];

    for (let groupIndex = 0, len = list.length; groupIndex * groupLength < len; groupIndex++) {
        if (!groupList[groupIndex]) {
            groupList[groupIndex] = [];
        }

        const startIndex = groupIndex * groupLength;

        for (let i = 0; i < groupLength; i++) {
            if (list[ startIndex + i ]) {
                groupList[groupIndex].push(list[ startIndex + i ]);
            }
        }
    }

    return groupList;
}
```