XMind - https://xmind.works/share/0tPmG8Mf

This automation framework was created as Practical Assessment.
Cypress
Cucumber
TypeScript
Eslint

Pre instal:

1. Node JS
2. Optional: Java 8 for Allure Reporter
3. Optional: Json-formatter for Native Reporter option(depends on your OS: https://github.com/cucumber/json-formatter)

## 🚀 Install the project

Install project dependencies with: npm i

## Run the demo:

1. Standard Execution: npm run cypress:execution
2. Native report(with JSON FORMATTER): Check how to do it in this video: [Cucumber BDD Report - YouTube](https://www.youtube.com/watch?v=5AGXK9cL2fs&t=2s&ab_channel=JoanMedia)
3. Allure Report:
   1. npm run cypress:execution-allure
   2. npm run allure:report
   3. allure open
   4. You'll get a report like this one: GitHub Page - Allure Report Sample: https://joanesquivel.github.io/cypress-cucumber-boilerplate/

## Sample repo to generate an allure report as an artifact using GH Actions

- https://github.com/SeyiOG/newCyLearn2/blob/main/.github/workflows/cypress-allure-report.yml
