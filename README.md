# Mix Master

## About
Mix Master eases the stress of entertaining by providing a myriad of cocktail and mocktail recipes! Users can filter recipes based on alcohol content and 'favorite' recipes for viewing later. 

## Contributors
- [Laura Long](https://github.com/lalonggone)
- [David Kwon](https://github.com/dkwon1223)
- [Megan Crotteau](https://github.com/crotteau)

## Preview
### Deployed Link - [Mix Master](https://mix-master-fe.vercel.app/)

![Homepage](https://github.com/lalonggone/mix-master-fe/assets/149750476/867ca92e-964c-4fab-af5b-272b9025842e)
![Cocktial Recipe Grid](https://github.com/lalonggone/mix-master-fe/assets/149750476/db3d20fa-bd19-4401-8cbe-b3c67eab0c1a)
![Cocktail Details](https://github.com/lalonggone/mix-master-fe/assets/149750476/f1f09636-b8b4-4c82-ad2e-30f6898bc9dc")

## Technologies Used
<div>
  <img src='https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black' alt='javascript'/>
  <img src='https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white' alt='html'/>
  <img src='https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black' alt='react'/>
  <img src='https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=React-Router&logoColor=white' alt='react-router'/>
  <img src='https://img.shields.io/badge/Cypress-69D3A7.svg?style=for-the-badge&logo=Cypress&logoColor=white' alt='cypress'/>
  <img src='https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white' alt='express'/>
  <img src='https://img.shields.io/badge/Knex.js-D26B38.svg?style=for-the-badge&logo=knexdotjs&logoColor=white' alt='knex'/>
  <img src='https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white' alt='aws'/>
  <img src='https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white' alt='vercel'/>
  <img src='https://img.shields.io/badge/Amazon%20AWS-232F3E.svg?style=for-the-badge&logo=Amazon-AWS&logoColor=white' alt='aws'/>
</div>

## Cypress Testing
We used Cypress to implement E2E testing for our app. To run our tests:
- `git clone` this [repo](https://github.com/lalonggone/mix-master-fe)
- `cd` into the directory
- `npm i` to install dependencies
- `npm start` and open http://localhost:3000 in your browser
- `npm run cypress:open` will start Cypress and open up test window
- when finished, run `ctrl + c` to stop running local server
  
## Background
The goal of this project was to explore a new technology while building off of our existing knowledge in React. As front-end students at Turing, we haven't had as much exposure to back-end technologies, so the main objective for this project was to explore and implement our very own back-end. Over the course of a week, we learned how to build a server in Express, use Knex to connect the server to a PostgreSQL database, and deploy the database on AWS and the server on Render. 

## Challenges and Wins
- It proved to be quite a challenge deploying a frontend React app and having it communicate to a deployed Express/Knex server which then communicated to an AWS RDS Postgres database - despite the challenge, we managed to succeed and overcome a new technological hurdle!

## Future Directions
- Implementing a search feature for recipes by name
- Allowing users to add their own drink recipes
- Monetized version, MixMasterPro, that gives access to premium features

