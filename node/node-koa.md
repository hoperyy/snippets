+   compose

    ```js
    function (context, next) {
        let index = -1;

        const dispatch(i) {
            index = i;
            let fn = middleware[i];
            return Promise.resolve(fn(context, function next() {
                return dispatch(i + 1);
            }));
        }

        return dispatch(0);
    }

    compose(middleware)(context).then(response).catch(onerror);
    ```