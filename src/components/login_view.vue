<template>
  <div class="login">
    <h1>Login</h1>
 
  <v-img
  src="../assets/Imagen1.png"
  >
 
  </v-img>
    <input type="text" v-model="username" placeholder="Usuario">
    <input type="password" v-model="password" placeholder="Contraseña"><br>
    <button @click="login">Iniciar sesión</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Comprobar si el usuario y la contraseña son correctos
      if (this.username === "franco" && this.password === "12345") {
        // Iniciar sesión
        this.$router.push("/");
      } else {
        // Mostrar un mensaje de error
        alert("El usuario o la contraseña son incorrectos");
      }
    },
  },
};
</script>
<style>

.login {
    margin: 150px ;
    width: 400px;
    background: #58d1f2;
    box-sizing: border-box;
    box-shadow: 0 30px 30px rgba(9, 58, 252, 0.6);
  
    color: #3923c9;
    padding: 7em 8em;
    font-size: 18px;
    border-radius: 4em;
    background: #2fd7e0;
}
</style>