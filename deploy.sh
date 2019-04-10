#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo "pwd: ${pwd}"

cd webpack4-mobx-simple-page
 
echo "pwd: ${pwd}"
# 生成静态文件
npm run dll
npm run build

git init
git add -A
git commit -m 'build'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

git push -f https://${GH_TOKEN}@github.com/cyseria/boilerplate.git master:gh-pages
