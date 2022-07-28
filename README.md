<p align='left'>
    <img src='https://raw.githubusercontent.com/kenpulicorre/countries_proyect/main/client/src/images/bandera.gif' </img>
</p>

# [ TEXT REVERSE Project ](https://kenpucoapp1.herokuapp.com/)

## Objetivos del Proyecto

- Build an App with React, Redux, Node , Express, y Sequelize Postgresql, Bootstrap.
- Using the best skills to build a website
- Prueba enfocada a practica fullstack

## Enunciado:

➢BACK

- Un API REST, a la cual se le envía un texto y responde con el mismo texto invertido.

```
* libs & frameworks:
* NodeJs https://nodejs.org/en/
* ExpressJs https://expressjs.com/
* Mocha https://mochajs.org/
* Chai https://www.chaijs.com/
* SuperTest https://github.com/visionmedia/supertest#readme

```

- Usando NodeJs +ExpressJs se debe crear API de un solo endpoint al cual se le envía el texto de la siguiente forma:
  `Da una respuesta 200 en caso de exito, o una respuesta 400 en caso de parámetros inválidos: `
- También se deben crear los tests que validan el API usando Mocha + Chai + Supertest. Los tests deben poder correrse usando "npm test".

➢FRONT

- Un App cliente en React que permita enviar textos a la API del punto anterior y muestre las respuestas del API desde la ultima a la primera.

```
- libs & frameworks:
- NodeJs https://nodejs.org/en/
- Webpack https://webpack.js.org/
- Bootstrap https://getbootstrap.com/
- React https://reactjs.org/`
```

specs
Usando React + Bootstrap/Material UI se debe crear una pantalla similar a la que se muestra en el siguiente wireframe:

<p align='left'>
    <img src='base.png' </img>
</p>

**Opcional**

- En la respuesta, indicar por medio del flag "palindrome": true si el texto enviado es un palindromo
  https://es.wikipedia.org/wiki/Pal%C3%ADndromo

- Usar StandarJs https://standardjs.com/

- Usar Redux https://redux.js.org/
  Test unitarios usando Jest https://jestjs.io/

## Comenzando

1.  Forkear el repositorio para tener una copia del mismo en sus cuentas
2.  Clonar el repositorio en sus computadoras para comenzar a trabajar

Tendrán un `boilerplate` con la estructura general tanto del servidor como de cliente.

**IMPORTANTE:** Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

- **Node**: 12.18.3 o mayor
- **NPM**: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

**Importante-2:** debes crear un archivo **.env** en la carpeta api,
y puede llenar como este ejemplo :

     DB_USER=postgres
     DB_PASSWORD=12345
     DB_HOST=localhost
     DB_NAME=copywrite
     DATABASE_URL=postgres://lrkardxptcjtvb:cf36987d6d6d60a672a33950be3d2eaae309c6135a93d262278b7a33ee164b10@ec2-3-213-228-206.compute-1.amazonaws.com:5432/d8l99f1jn2v4ns

donde `postgres` es el nombre de su base de datos `12345` es la contraseña y `localhost` es el el lugar o dominio de su base de datos se encunentra en el archivo `env.ejemplo` y `DATABASE_URL`es la base de datos de la aplicacion en la nube, debe debuscar su propia base o en caso contrario crear una base de datos local . `DB_NAME` es la base de datos local que se creo en el transcurso del proyecto. y se realizo en `postgres`

## BoilerPlate

El boilerplate cuenta con dos carpetas: `apiback` y `clientfront`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
DB_NAME=created_data_base
```

Reemplazar `created_data_base`,`usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `copywrite` y el modelo al cual se le realiza el llenado de datos se le denomina en este proyecto `Principal`

El contenido de `client` fue creado usando: Create React App.

#### Tecnologías usadas:

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres
- [ ] Node.js
- Mocha https://mochajs.org/
- Chai https://www.chaijs.com/
- SuperTest https://github.com/visionmedia/supertest#readme
- Jest https://github.com/visionmedia/supertest#readme
- Bootstrap https://getbootstrap.com/

## Back notas:

#### Pruebas desde postman

- todas las pruebas se realizan desde postaman por lo tanto revice este documento para guiarse: - [**docu postman para proyecto**](https://documenter.getpostman.com/view/19592464/UzXPxGox)

## Archivo ejecucion :

para ejecutar el archivo back y front solo debe de instalar las dependencias, despues debe de dirijirse a la carpeta desde la terminal y ejecutar : (el archivo front puede modificar el puerto con el archivo `.env` colocando el puerto deseado POR EJEMPLO :`PORT=4001`)

```
npm install
```

y una vez se tengan instaladas las dependencias ejecutar la aplicacion, tanto front como back

```
npm start
```

se recomienda que si esta trabajando en local ejecute el back con

```
npm run dev
```

para hacer test, puede dirijirse a la carpete àpi y ejecutar el comando

```
npm test
```

<hr/>

[ Proyecto en ejecucion](https://kenpucoapp1.herokuapp.com/)

## Referencia:

- [ mocha](https://mochajs.org/)
- [ chai](https://www.npmjs.com/package/chai)
- [supertest](https://www.npmjs.com/package/supertest)
- [ jest](https://jestjs.io/docs/expect)
- [libro \mocha_chai pagina43, solucion errores mocha](https://books.google.com.co/books?id=xRQjEAAAQBAJ&printsec=frontcover&hl=es)

---

## **AUTOR**

**kenneth E. Puliche Correa**

### <h3> 🤝🏻 &nbsp;Connect with Me </h3>

Email: **ingkeneidel@gmail.com**
Wpp: **<a href="https://wa.link/0l2haf"> +573114035605 </a>**

## 🌐 Socials:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kenneth-puliche-correa-813311225/)
</br>

---

```

```
