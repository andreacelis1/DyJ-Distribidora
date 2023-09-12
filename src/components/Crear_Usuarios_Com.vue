<template>
  <v-container>
    <h1>Crear Usuarios</h1>
    
<!--     <v-btn color="primary" v-on:click="createUsuario()" >Crear Usuario</v-btn>
 -->  </v-container>
</template>

<script>
import db from '../firebase/init'
import {collection, addDoc} from 'firebase/firestore'

export default{
  created(){
    this.createUsuario()

  },
  methods:{
    async createUsuario(){
      const colRef = collection(db,'Marcas')
      const doc={
        id:'25',
        nombre:'Kevin',
        proveedor:'juan',
        ciudad:'lalalaal',

      }
      const docRef = await addDoc(colRef,doc)
      console.log('creo el usuario con nombre',docRef.id)
    }
  }
  
}
</script>


