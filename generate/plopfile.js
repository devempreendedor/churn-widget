module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'application component ui',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.ts',
        templateFile: './templates/index.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './templates/Component.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.module.ts',
        templateFile: './templates/Styled.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: './templates/Test.hbs',
      },
    ], // array of actions
  })
}
