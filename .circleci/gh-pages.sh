#!/bin/bash
cd ./dist
git init
git add .
git -c user.name=$GITHUB_USER_NAME -c user.email=$GITHUB_USER_EMAIL commit -m "Auto Deployment"
git push -f -q https://$GITHUB_USER_NAME:$GITHUB_ACCESS_TOKEN@github.com/$GITHUB_USER_NAME/$GITHUB_USER_NAME.github.io master
