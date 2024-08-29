# Full Stack open CI/CD

This repository is used for the CI/CD module of the Full stack open course

Fork the repository to complete course exercises

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build

## Deploy

Pushing or merging Pull Request into `main` branch will build and deploy the app using Github Actions and Render.
Each push to `main` branch will bump and tag the code. If commit message contains the string '#skip' this step will be skipped.
