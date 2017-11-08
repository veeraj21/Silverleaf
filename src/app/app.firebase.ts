import {AngularFireModule} from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyCamH7PqHtRBBxtwoyfRd2_QfGIKykYYgU",
    authDomain: "silverleaf-52b9e.firebaseapp.com",
    databaseURL: "https://silverleaf-52b9e.firebaseio.com",
    projectId: "silverleaf-52b9e",
    storageBucket: "silverleaf-52b9e.appspot.com",
    messagingSenderId: "206628129927"
  };

  export const CONST_FIREBASE_CONFIG = AngularFireModule.initializeApp(firebaseConfig)