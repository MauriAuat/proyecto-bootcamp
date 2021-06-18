# Marvel Searcher

Proyecto final del buscador de personajes de la API de marvel para el bootcamp de Leniolabs

# Funcionalidades

 ## Componente Header: 
 
 Barra buscadora que realiza la búsqueda por coincidencia de nombre
 
 ## Componente Cards
 
 contenedor en donde se renderizan las 20 primeras cards que vienen de la API
 
 ## Componente Url
 
 Componente contenedor que permite buscar escribiendo el nombre por la url y mostrarlas al momento del renderizado
 
 ## Componente IndividualCard
 
 contenedor individual de la card de cada personaje del personaje
 
 ## Componente Modal
 
 Modal o popup que se renderiza cuando se clickea una card especifica
 
 ## Componente Comics 
 
 Componente que enlista dentro del Modal todos los comics del personaje clickeado
 
 
 # Estilos
 
 Realizados enteramente con archivos .css
 
 # Estructura
 
 `Todos los componentes a excepción del componente App estan guardados en la carpeta components, en donde se almacenan dos subcarpetas mas, una (llamada styles) con los archivos de estilo de cada uno de los componentes y otra (llamada images) con la imagen del logo de Marvel`
 
 # dependencies  usadas:

 react-router-dom
 
    BrowserRouter as Router, 
    Switch, 
    Route
    useParams
    
 # Hooks utilizados: 
 
 useState
 
 useEffect
  
 
 # Funcionalidades faltantes:
 
 Componente para guardar búsquedas y cards en favoritos.
 
 Falto realizar los test Unitarios
 
 # Fallas que se deben optimizar:
 
  ### La busqueda del personaje solo es posible desde pagina de inicio, si la Url cambia, la función de búsqueda deja de funcionar
  
  ### Cuando se realiza un busqueda sin resultados o se muestra un modal con información faltante, debería haber un texto alternativo en el del componente con la información inexistente
  
  ### La busqueda por Url debería usar query strings y realizar busquedas combinadas, el componente url solo funciona agregando el nombre del personaje al lado del url de inicio
  
  ### El diseño responsive puede mejorarse mucho aún

# Pull Request:
 
  ## PR layout buscador
  
  ### Commits:
     
  ####  layout buscador: 98527cd69ceb7a0a36acc8a67b02ab8d35c06f1a
     
       creacion del Componente buscador
       
  ####  prueba de fetch e impresion por consola: dcbb08fc54e7c83ccc45ee407e226e2f5f56a7a2
       
       conexión con la API de Marvel 
       
  ## PR dudas con el paso de props
     
   ### Commits
       
   ####  dudas con el paso de props: 98527cd69ceb7a0a36acc8a67b02ab8d35c06f1a
   
       creacion del componente Cards e inconvenientes a la hora de pasar la info de la API como props
       
   #### Initial Page with 20 characters: 74ff309dfec3a98a8845a08cd107f7cb09381e9d
    
       creacion del componente  IndividualCard y renderizado de los 20 personajes en el componente contenedor Card de cada componente IndividualCard
       
       Agregado de estilos a los componentes creados
       
   #### searching success: 0424a614631109acef4446f83dd14650c0f16632
   
        Prueba y funcionamiento correcto de la busqueda de personajes y renderizado de sus cards.
         
   #### url search and starting modals: 47d7473cfa8fe809ec5b2688869a5f623ef74557
   
       Creacion de componente Url para realizar busquedas desde la barra de navegacion
       
        Agregado de estilos a los componentes creados
       
   #### modal opening: 493516cf9f10cffb27664fc86abbbc8fc2c194bb
   
       Agregado de react router dom
      
       Configurando evento onClick para abrir el modal
          
   #### modal closing: 387d4c7d2ab7664760b251ed4245bd199bfd2d3d
      
       Configurando evento onClick para cerrar el modal
      
       Agregado de estilos al componente Modal
       
   #### comic and character info inside Modal: a6f675ec3fcaec0ad0114f90bae14f3a9935471e
   
       Optimizando el renderizado del componente comic y las props del caracter dentro del componente Modal
      
       Mejorando estilos de componentes
      
   #### Modal Completed: a6f675ec3fcaec0ad0114f90bae14f3a9935471e
   
       Renderizado del con la info dentro del Modal funcionando correctamente
      
        Último commit con los cambios actualizados al momento de deployar el proyecto
   
     
    
 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

Link del deploy a traves de Vercel: https://proyecto-bootcamp.vercel.app/

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
