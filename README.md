## How to deploy this on different environments

* Make sure your `node` version is 18.x.x.
* Clone the project and update the submodules
```shell
git clone --recurse-submodules -j8 https://github.com/HannaHZZ-123/HannaHZZ-123.github.io.git
```
* Use **yarn instead of npm** to install the dependencies(as `npm install` will generate a new `yarn.lock`, making the lockfile useless): 
```shell
yarn install --frozen-lockfile
```
* Start testing and deploying
```
hexo server
hexo generate
```