#!/bin/bash
# Build and deploy script for GitHub Pages

echo "Building the project..."
npm run build

echo "Copying CNAME to dist..."
cp CNAME dist/

echo "Deploying to gh-pages branch..."
cd dist
git init
git add -A
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/Avishkant/ThinkCraftAI.git
git push -f origin gh-pages

echo "Deployment complete!"
