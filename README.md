# art-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Vue.js 3 Installation

Before starting, ensure you have [Node.js](https://nodejs.org/) installed. To create a Vue.js 3 project using Vite, run:

```sh
npm init vue@lates
```

## Installing Dependencies

After initializing your Vue.js project, install the required dependencies:

### Install Firebase

Firebase is used for authentication and storing user data. Install Firebase using the following command:

```sh
npm install firebase
```

### Install Axios

Axios is used to handle HTTP requests to the Art Institute of Chicago's API. Install Axios with the command:

```sh
npm install axios
```

### Install vue-router

vue-router is used for handling routing in your Vue.js application. Install vue-router with:

```sh
npm install vue-router
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Project Progress


### What has been completed:

- **Page d'inscription et de connexion**: 
  - **User Authentication Integration**: Firebase authentication has been integrated for user registration and login. Upon registration, users are saved in Firebase, and they can log in to be redirected to the search page.

- **Page de recherche**:
  - **Artwork Search Implementation**: The application allows users to search for artworks from the Art Institute of Chicago's API. The results are displayed with artwork images, titles, and artist names.
  - **Image Fallback**: If an artwork image is not available, a default placeholder image is displayed.
  - **Dynamic Search**: Users can perform searches by typing in the search bar, and results update dynamically.

- **Navigation Setup**: The header includes navigation links for 'Accueil', 'Galerie', and 'A propos', allowing users to navigate through different sections of the application.

- **Logout Functionality**: Firebase authentication has been integrated to allow users to log out. Upon clicking the "Déconnexion" button, the user is successfully logged out and redirected to the login page.

- **Footer Section**: The footer includes social media icons and a logo for the Art Institute Chicago.

### What remains to be done:

- **Image Management**: The images for artworks have not been fully integrated on the pages, and placeholders are displayed in cases where images are unavailable.

- **Error Handling**: Additional error handling for failed API requests (e.g., when fetching artworks) needs to be implemented.

- **Styling and Responsiveness**: While basic styles are in place, further work on improving the application's responsiveness and UI design is necessary.

- **Page "A propos"**: The content for the "A propos" page has not yet been implemented.

- **Testing**: Functional and unit tests are required to ensure that all components work as expected.

- **User Profile**: There is a need to integrate user profile management, where authenticated users can save their favorite artworks or view their browsing history.

