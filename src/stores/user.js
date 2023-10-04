import {defineStore} from "pinia";
import { auth } from "../firebase/init.js";

import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
 } from "firebase/auth";

export const useUserStore = defineStore ("user",{
    state:()=> {
        return{
            user: null, 
        };
    },
    actions: {
        async register(email, password){
            try{
                await createUserWithEmailAndPassword (auth, email, password);
            } catch(error) {
                switch (error.code){
                    case"auth/email-already-in-use":
                    alert("Email already in use");
                    break;
                    case "auth/invalid-emai":
                        alert("invalid email");
                        break;
                }
                return;
            }
            this.user = auth.currentUser;
            console.log("usuario registrado correctamente");
        },

        async login(email, password){
            try{
                await signInWithEmailAndPassword (auth, email, password);
            } catch(error) {
                switch (error.code){
                 case "auth/user-not-found":
                    alert("user not found");
                    break;
                    case "auth/wrong-password":
                        alert("wrong password");
                        break;
                }
                return;
            }
            this.user = auth.currentUser;
            console.log("inicio de seccion confirmada");
        },
    }
});