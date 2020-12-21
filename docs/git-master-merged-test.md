```js

const { execSync } = require('child_process')

const errorMessages = [
    'Not a git repository (or any of the parent directories)',
    'Could not read from remote repository'
]

function formatError(error) {
    // simplify error messages
    for (const msg of errorMessages) {
        if (error.indexOf(msg) > -1) {
            return msg
        }
    }
    return error
}

// { stdio: 'pipe' } to prevent output to the parent process' stderr
function execCommand(command) {
    return execSync(command, { stdio: 'pipe' }).toString().trim()
}

/**
 * Check whether the latest commit of master has been merged into current branch.
 *
 * @typedef {object} result
 * @property {bool} isMerged
 * @property {string} errorMessage
 * @returns {result}
 */
function check() {
    try {
        execCommand('git fetch origin master')
    } catch (e) {
        return {
            isMerged: false,
            errorMessage: formatError(e.message || e)
        }
    }

    const currentBranch = execCommand('git rev-parse --abbrev-ref HEAD')
    const ancestor = execCommand(`git merge-base origin/master ${currentBranch}`)
    const masterLatest = execCommand('git log --oneline -n 1 --pretty=format:"%H" origin/master')

    if (ancestor !== masterLatest) {
        const latestCommitLog = execCommand('git log --oneline -n 1 --pretty=format:"%s by %cn at %cd (%h)" origin/master')
        const errorMessage = '当前分支没有合并到 master\n' + `master 分支最近一次 commit log: ${latestCommitLog}`
        return {
            isMerged: false,
            errorMessage
        }
    }

    return {
        isMerged: true,
        errorMessage: ''
    }
}

const result = check();

console.log(result.errorMessage);

module.exports = check
```