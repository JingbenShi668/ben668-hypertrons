# Contributing to Hypertrons

It is warmly welcomed if you have interest to contribute to Hypertrons and help make it even better than it is today! The following is a set of guidelines for contributing to Hypertrons.

- [Code of Conduct](#coc)
- [Submitting an Issue](#issue)
- [Submitting a Pull Request](#pr)
- [Coding Rules](#rules)

## <a name="coc"></a> Code of Conduct

We have adopted a [Code of Conduct][coc] to help us keep Hypertrons open and inclusive. Please read the full text so that you can understand what actions will and will not be tolerated.

## <a name="issue"></a> Submitting an issue

If you have any questions or feature requests, please feel free to [submit an issue][new-issue].

Before you submit an issue, consider the following guidelines:

- Please search for related issues. Make sure you are not going to open a duplicate issue.
- Please specify what kind of issue it is and explain it in the title or content, e.g. `feature`, `bug`, `documentation`, `discussion`, `help wanted`... The issue will be tagged automatically by the robot of the project(Menbotics). See [supported issue labels][issue-label].

To make the issue details as standard as possible, we setup an [Issue Template][issue-template] for issue reporters. Please be sure to follow the instructions to fill fields in template.

There are a lot of cases when you could open an issue:

- bug report
- feature request
- performance issues
- feature design
- help wanted
- doc incomplete
- test improvement
- any questions on project
- and so on

Also we must remind that when filling a new issue, please remember to remove the sensitive data from your post. Sensitive data could be password, secret key, network locations, private business data and so on.

## <a name="pr"></a> Submitting a Pull Request

To help you get your feet wet and get you familiar with our contribution process, we have collected some [good first issues][good-first-issues] that contain bugs or small features that have a relatively limited scope. This is a great place to get started.

Before you submit your Pull Request (PR), consider the following guidelines.

### 1. Claim an issue

Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment with `/self-assign` stating that you intend to work on it so other people don't accidentally duplicate your effort. The robot of the project(Menbotics) will set assignees of the issue to yourself automatically.

```shell
/self-assign
```

If somebody claims an issue but doesn't follow up for more than two weeks, it's fine to take over it but you should still leave a comment.

### 2. Fork and clone the repository

Visit [hypertrons/hypertrons][repo] repo and make your own copy of the repository by **forking** it.

And **clone** your own copy of the repository to local, like :

```shell
# replace the XXX with your own user name
git clone git@github.com:XXX/hypertrons.git
cd hypertrons
```

### 4. Create a new branch

Create a new branch for development.

```shell
git checkout -b branch-name
```

The name of branch should be semantic, avoiding words like 'update' or 'tmp'. We suggest to use `feature/xxx`, if the modification is about to implement a new feature.

### 5. Make your changes

Now you can create your patch, including appropriate test cases in the new branch. Please read and follow our [Code Rules](#rules).

After you finish your modification, run the test and ensure that all tests pass.

```shell
npm test
```

### 6. Commit your changes

Commit your changes If your changes pass the tests. You are encouraged to use [angular commit-message-format][angular-commit-message-format] to write commit message. In this way, we could have a more trackable history and an automatically generated changelog.

```shell
git add .
git commit -m "fix: add license headers (#264)"
```

### 7. Sync your local repository with the upstream

Keep your local repository updated with upstream repository by:

```shell
git remote add upstream git@github.com:hypertrons/hypertrons.git
git fetch upstream master
git rebase upstream/master
```

If conflicts arise, you need to resolve the conflicts manually, then:

```shell
git add my-fix-file
git rebase --continue
```

### 8. Push your branch to GitHub

```shell
git push -f origin branch-name
```

### 9. Create a Pull Request

In GitHub, send a pull request to `hypertrons:hypertrons`.

Please sign our [Contributor License Agreement (CLA)](#cla) before sending PRs.

To make sure we can easily recap what happened previously, we have prepared a [pull request template][pr-template] and you need to fill out the PR template.

The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.

If we suggest changes then:

-   Make the required updates.

-   Re-run the test to ensure tests are still passing.

-   Commit your changes with `--amend` and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git add .
    git commit --amend
    git push -f origin branch-name
    ```

That's it! Thank you for your contribution!

### 10. After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes from the upstream repository:

-   Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete branch-name
    ```

-   Check out the master branch:

    ```shell
    git checkout master -f
    ```

-   Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

-   Update your master with the latest upstream version:

    ```shell
    git pull --ff upstream master
    ```

## <a name="rules"></a> Code Rules

To ensure consistency throughout the source code, you need to pass TSLint checking and add apache license header.

- [TSLint Checking](#tslint-checking)
- [Apache License Header](#apache-license-header)

### TSLint Checking

Before committing your code, you should first run `npm run lint` to check your code style. In hypertrons, we use TSLint, which is an extensible static analysis tool that checks TypeScript code for readability, maintainability, and functionality errors. It is widely supported across modern editors & build systems and can be customized with your own lint rules, configurations, and formatters.

If you use VSCode as your IDE, you may do the following steps to lint your code automatically.

- install plugin `TSLint`
- set the following content in .vscode/settings.json

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.tslint": true
  }
}
```

- restart VSCode

### Apache License Header

If you add a new `ts` file in your modification, please make sure you add Apache License Header to all new files.

```text
// Copyright 2019 - present Xlab
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
```

If you use VSCode as your IDE, you may do the following steps to add Apache License Header automatically.

-   install plugin `licenser`

-   set the following content in .vscode/settings.json

    ```json
    {
      "licenser.author": "Xlab",
      "licenser.projectName": "hypertrons",
      "licenser.useSingleLineStyle": true,
      "licenser.disableAutoHeaderInsertion": false,
      "licenser.license": "AL2"
    }
    ```

-   restart VSCode

## <a name="cla"></a> Signing the CLA

Please sign our [Contributor License Agreement (CLA)][cla] before sending pull requests. For any code
changes to be accepted, the CLA must be signed.

[coc]: ./CODE_OF_CONDUCT.md

[new-issue]: https://github.com/hypertrons/hypertrons/issues/new

[issue-label]: https://github.com/hypertrons/hypertrons/labels

[good-first-issues]: https://github.com/hypertrons/hypertrons/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+

[repo]: https://github.com/hypertrons/hypertrons

[angular-commit-message-format]: https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines

[pr-template]: ./.github/pull_request_template.md

[issue-template]: ./.github/issue_template.md

[cla]: https://cla-assistant.io/hypertrons/hypertrons
