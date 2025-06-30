# Sistema de Inicio de sesión, registro y roles

Sistema de registro e inicio de sesión para usuarios conectados a una
base de datos local o una remota dependiendo de la configuración. Además
este sistema tiene la finalidad servir como roles para visualizar distintas vistas según el usuario ingresado.

# Librerías.

### Librerías de desarrollo

- Zustand
- Tanstack query
- Tailwind
- React v19

### Librerías de testing

- StoryBook
- Vitest
- React testing library

### Librerías de utilidad

- Json-server (para ejecutar un servidor local sin backend)
- Prettier
- Plop (automatizar la creación de componentes)

# Estructura del proyecto.

Este proyecto fue realizado bajo la arquitectura de atomic design para la reutilización de componentes y además poder generar pruebas unitarias de manera más clara.

```bash
├── src
│   ├── assets
│   ├── components
│       └──atoms
│       └──molecules
│       └──organism
│       └──templates
│       └──pages
├── stories ( próximamente deprecado )
│   └── ....
└── .gitignore
```

# Comandos

| Ejecutar test unitarios `pnpm test`

| Ejecutar servidor local `pnpm json-server`

| Ejecutar app `pnpm dev`

| Ejecutar storybook `pnpm storybook`

| Crear un componente atomic design `pnpm create:component`
