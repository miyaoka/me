#!/bin/bash
cd ./dist
git init
git add .
git -c user.name=$CIRCLE_PROJECT_USERNAME -c user.email=$GITHUB_USER_EMAIL commit -m "Auto Deployment"
git push -f -q https://$GITHUB_ACCESS_TOKEN@github.com/$CIRCLE_PROJECT_USERNAME/$CIRCLE_PROJECT_USERNAME.github.io master
