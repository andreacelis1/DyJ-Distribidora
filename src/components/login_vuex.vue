<template>
  <div class="login">
    
    <h1 class="h1">Bienvenido</h1>

    <v-img class="img"
      src="../assets/logo_dyj.png"
    ></v-img><br>
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
      if (this.username === "admin" && this.password === "admin") {
        // Iniciar sesión
        this.$router.push("/");
        alert("Sesión Iniciada");
      } else {
        // Mostrar un mensaje de error
        alert("El usuario o la contraseña son incorrectos");
      }
    },
    computed: {
      isLoggedIn() {
        // Devuelve true si el usuario está autenticado
        return this.$store.state.auth.isLoggedIn;
      },
    },
  },
};
</script>

<style>

.h1{
  font-size: 230%;
  font-family:Georgia, 'Times New Roman', Times, serif
}

.login {
  margin-left:60%;
  margin: 150px ;
    width: 400px;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #fcfcfa;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.login h1 {
  text-align: center;
}

.login img {
  display: block;
  margin: 0 auto;
}

.login input {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 5px;
}

.login button {
  width: 100%;
  padding: 10px;
  background: #e646e4;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login button:hover {
  background: #0056b3;
}
</style>

<style>

.login {
  
    margin: 150px ;
    box-sizing: border-box;
    box-shadow: 0 30px 30px rgba(251, 104, 197, 0.6);
    margin-left:60%;
    color: #e646e4;
    font-size: 18px;
    border-radius: 2em;
}


</style>
