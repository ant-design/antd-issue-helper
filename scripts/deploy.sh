#!/bin/sh

git checkout gh-pages && \
git merge master --no-edit && \
npm run build && \
cp -r build/* . && \
git add . && \
git commit -m 'Deploy' && \
git push origin gh-pages && \
git checkout master
