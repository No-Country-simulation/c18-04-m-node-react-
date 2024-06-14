# C1804MNodeReact

## Application names
- Backend: `express-back`
- Fronted: `react-front`
- Libs: `api-modules`
- Componets: `front-components`

## Enviroments
```
# API
API_PORT = 3000
# Database
DB_HOST = localhost
DB_PORT = 27017
DB_USER = root
DB_PASSWORD = example
DB_NAME = c18-04-m-node-react
# JWT Secret
SERVER_SECRET_WORD = example
```

## Start the application

Run start the development server. Happy coding!
- backend app: `npm run back-dev`
- frontend app: `npm run front-dev`
- all server: `npm run all-dev`

## Build for production

Run `npx nx build <application name>` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.


members:
Aliesky Perez - Backend
Walter Sánchez - Frontend
Juan José Oviedo Díaz  - Frontend
Daniel Sanabria - Frontend  [![LinkedIn](https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png)]([https://www.linkedin.com/in/your-profile](https://www.linkedin.com/in/danielsanabriarivera/))
Emanuel Pesci - Frontend
Cristian Sombra - Backend
Matías Quirico - Backend


frontend technologies

* React
* Framer Motion
* jest
* axios
* tailwind

Backend technologies

* Node
* Express
* Mongoose
* Mongodb

