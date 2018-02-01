// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebaseconfig:  {
    apiKey: "AIzaSyCQwK4mxod3HlHvfgnCqf4lEMf7kHXRuLs",
    authDomain: "angular4-firebase-crud.firebaseapp.com",
    databaseURL: "https://angular4-firebase-crud.firebaseio.com",
    projectId: "angular4-firebase-crud",
    storageBucket: "angular4-firebase-crud.appspot.com",
    messagingSenderId: "248244525849"
  }
};
