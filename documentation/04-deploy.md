# Deployment

## Pre-requisite

1. Cloned project files
2. Git CLI
3. NodeJS

## Steps

1. Go to project terminal, build the app by running the command: `npm run build`
2. To test the build files: `npm run preview`
3. Deploy to github (gh-pages) first time:

```
git add dist -f
git commit -m "deployment"
git subtree push --prefix dist origin gh-pages
```

4. Redeploy:

```
cd dist
git init
git add .
git commit -m "deployment"
git remote add origin git@github.com:vrmcreativestudio/hr-management-app.git
git push --force origin master:gh-pages
```
