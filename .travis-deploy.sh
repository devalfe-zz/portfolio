#!/usr/bin/env bash

echo Deploy to GitHub Pages

# only deploy tags
if [ -z "$TRAVIS_TAG" ]; then

  echo Deploy to GitHub Pages - Skip deployment

else

  echo Deploy to GitHub Pages - Start

  cd dist/portfolio
  git init

  git config user.name "Travis CI"
  git config user.email "xilef_v7@outlook.com"


  git add .
  git commit -m "Deploy to GitHub Pages"

  git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1

  echo Deploy to GitHub Pages - Success

fi

echo Deploy to GitHub Pages - Finish
