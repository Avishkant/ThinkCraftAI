@echo off
echo Building the project...
call npm run build

echo Copying CNAME to dist...
copy CNAME dist\

echo Deploying to gh-pages branch...
cd dist
git init
git add -A
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/Avishkant/ThinkCraftAI.git
git push -f origin gh-pages

echo Deployment complete!
pause
