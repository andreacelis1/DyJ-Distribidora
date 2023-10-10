<template>
  <div>
    <v-card
      class="mx-auto pa-12 pb-8 form_login" 
      elevation="8"
      max-width="448"
      rounded="lg"
    >
    
      <v-img
        class="mx-auto my-6"
        max-width="228"
      ></v-img>

      <v-alert
            v-if="showAlert"
            type="info"
            text="Usuario o contraseña incorrecto, intente nuevamente!"
            variant="tonal"
          ></v-alert>
    <!--   <p v-if="errorMessage" class="menError">{{ errorMessage }}</p> -->
      <br>

      <div class="text-subtitle-1 text-medium-emphasis">Usuario</div>

      <v-text-field
        v-model="usuario"
        class="usuario"
        ref="usuarioField"
        density="compact"
        placeholder="Usuario"
        prepend-inner-icon="mdi-account-circle-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Contraseña
      </div>

      <v-text-field
        v-model="clave"
        class="clave"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'clave'"
        density="compact"
        placeholder="Ingrese contraseña"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn
        @click="validarUser"
        block
        class="mb-8"
        size="large"
        variant="tonal"
      >
        Log In
      </v-btn>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)


</script>

<script>
import db from '../firebase/init.js';
import { collection, getDocs, query, where } from 'firebase/firestore';
const showAlert = ref(false);
/* import { useUserStore } from '../stores/user';
const userStore = useUserStore(); */


export default {
  data() {
    return {
      usuario: '',
      clave: '',
      errorMessage: '',
      showAlert: showAlert.value,

    };
  },

  methods: {
    

    async validarUser() {
      
      //vuelvo vacia la bariable mensaje error
      this.errorMessage = '';

      const usuariosCollection = collection(db, 'user');
      const q = query(usuariosCollection, where('usuario', '==', this.usuario), where('clave', '==', this.clave));

    

      try {
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          console.log('Usuario autenticado');


          const fechaActual = new Date().toLocaleDateString(); //Fecha actual
          this.bienvenidoMessage = `Bienvenido: ${fechaActual}`;
          console.log(fechaActual);
          //declaro la variable  
          const usuarioDoc = querySnapshot.docs[0];    
          // Extraigo el campo "nombre" del documento
          const nombreUsuario = usuarioDoc.data().nombre;
          const rolUsuario = usuarioDoc.data().rol;
          console.log('Nombre del usuario logueado:', nombreUsuario, ' su rol es ', rolUsuario);   
          //vuex
          this.$store.state.usuario = nombreUsuario ; 
          this.$store.state.rol = rolUsuario; 
          this.$store.state.fechaActual = fechaActual ; 
    

          //Si es correcto lo lleva a Home
          this.$router.push({ name: 'ViewHome' }); 
  
        } else {
          // No se encontró un usuario con los datos ingresados, mostrar un mensaje de error.
          console.log('Usuario no encontrado');
          this.errorMessage = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
          showAlert.value = true;
          // Puedes mostrar un mensaje de error al usuario aquí.
          this.usuario = '';
          this.clave = '';
          this.$refs.usuarioField.focus();
        }
      } catch (error) {
        console.error('Error al consultar la base de datos:', error);
        // Maneja el error de consulta de la base de datos aquí.
      }
    },


  },
  

};

</script>


<style scoped>

.mb-8{
  background: pink;
  color:deeppink;
}

.mb-8:hover{
  background: pink;
  color:deeppink;
}

.form_login{
  margin-top:8%;
}

</style>
