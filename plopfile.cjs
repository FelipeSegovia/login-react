const plop_library = (plop) => {
  plop.setGenerator('component', {
    description: 'Crear un nuevo componente',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Que tipo de componente quieres crear?',
        choices: ['Atom', 'Molecule', 'Organism', 'Template', 'Page'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Cual es el nombre del componente?',
        validate: (value) => {
          if (/.+/.test(value)) {
            return true
          }
          return 'El nombre del componente no puede estar vacio'
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{camelCase type}}s/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: 'plop/templates/components/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{camelCase type}}s/{{properCase name}}/index.tsx',
        templateFile: 'plop/templates/components/index.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{camelCase type}}s/{{properCase name}}/{{properCase name}}.test.tsx',
        templateFile: 'plop/templates/components/test.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{camelCase type}}s/{{properCase name}}/{{properCase name}}.stories.tsx',
        templateFile: 'plop/templates/components/stories.hbs',
      },
    ],
  })
}

module.exports = plop_library
