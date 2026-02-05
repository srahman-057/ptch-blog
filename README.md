# ptch-blog

ptch-blog aims to be a personal blog that serves as a passion project. Project deployed at: <u><a href="https://www.pothochari.com/">www.pothochari.com</a></u></p>

## Under the hood

This project utilizes the following:

* Backend: PostgreSQL, ExpressJS
* Frontend: React, NodeJS
* Build: Vite

## Building NPM modules

Execute the command: ```npm i``` in the 'backend/' directory to build the backend modules. Repeat the process in the frontend directory for the frontend modules.

## Running the project

Two .env files are needed for the project to work - one for the frontend and one for the backend. The values to be included in these files are:
* '/backend/': 
    * <i><b>DATABASE_URL</b></i>: The URL of your database 
    * <i><b>ARCJET_KEY</b></i>: Arcjet provided API key
    * <i><b>ORIGIN_URL</b></i>: URL of the frontend. CORS policy will block requests from any other origin.
* '/frontend/':
    * <i><b>VITE_API_URL</b></i>: URL of the Node backend in this project.
    * <i><b>VITE_FRONTEND_URL</b></i>: URL of the Vite frontend in this project. 

Execute ```npm run dev``` in the 'backend/' and 'frontend/' directories respectively. This will start up the ExpressJS backend and ReactJS frontend. 

## Documentation

The blog is built with a mobile-first approach, with a default dark theme. A planned lightweight but feature-rich control panel is meant to make blog management a breeze.

## Future improvements

* Theme: Button to toggle between Dark Mode and Light Mode.  
* Management: An admin page that will simplify management by adding a layer of abstraction.
* Search: Build index and deploy search engine. 
* Calendar: Interactive calendar that allows users to filter posts by date.

## Acknowledgement

* Icons: <a href="https://www.flaticon.com/free-icons/fire" title="fire icons"><u>Freepik - Flaticon</u></a>
* Fonts: 
    * Megrim: <u>https://fonts.google.com/specimen/Megrim</u>
    * Jockey One: <u>https://fonts.google.com/specimen/Jockey+One<u>
