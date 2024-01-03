# mensa-app-frontend

## Project setup

0. Set up .env file

```
VUE_APP_BACKEND_BASEURL=https://mensa.gregorflachs.de/api/v1
VUE_APP_BACKEND_API_KEY=<<YOURAPIKEY>>
```

1. Dependencies

```
npm install
```
2. Start app
```
npm run serve
```

## Please before push

```
npm install --save-dev --save-exact prettier
```
```
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
```
Next, create a .prettierignore file to let the Prettier CLI and editors know which files to not format. Here’s an example:
```
# Ignore artifacts:
build
coverage
```
Then pritticise code
```
npx prettier . --write
```