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
├── stories
│   └── ....
└── .gitignore
```

# Comandos

| Ejecutar test unitarios `pnpm run test`

| Ejecutar servidor local `pnpm run json-server`

| Ejecutar app `pnpm run dev`

| Crear un componente atomic design `pnpm run create:component`
