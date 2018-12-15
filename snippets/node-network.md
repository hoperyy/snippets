```javascript
const dns = require('dns');
const getPort = require('get-port');
const URL = require('url-parse');
const co = require('co');

module.exports = {
    _getPort(defaultPort) {
        return (done) => {
            getPort(defaultPort).then((port) => {
                done(null, port);
            });
        };
    },

    getFreePort(defaultPort) {
        const self = this;

        return co(function*() {
            let finalPort = yield self._getPort(defaultPort);

            if (finalPort !== defaultPort) {
                return yield self.getFreePort(defaultPort + 1);
            } else {
                return defaultPort;
            }
        });

    },

    _isReachable(url) {
        const hostname = new URL(url).hostname;

        const self = this;

        return (done) => {

            dns.lookup(hostname, (err, address) => {

                if (err) {
                    done(null, false);
                } else {
                    done(null, true);
                }
            });

            const reachableTimer = setTimeout(() => {
                clearTimeout(reachableTimer);
                done(null, false);
            }, 2000);
        }
    }

    isReachable(url) {
        const self = this;

        return co(function*() {
            return yield self._isReachable(url);
        });
    }

};
```