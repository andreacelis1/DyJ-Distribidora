<template>
  <v-app>
    
    <v-main>
  <v-card max-width="2200" class="mx-auto" color="tercero">
    <v-layout>
      <v-app-bar
        color="#F48FB1">
        <template v-slot:prepend>
          <v-list-item
          prepend-icon="mdi-account-heart"
          title="DyJ Distribuidora"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
           
          
          </template>
        </v-list-item>
          
        </template>


        <v-spacer></v-spacer>

        <v-btn>
          <v-list-item prepend-icon="mdi-account tie outline" title="login" value="users" router-link to="/login_vuex"></v-list-item>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-cart heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >

        <v-divider></v-divider>

        <v-list density="compact" nav>
        <!--   <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item> -->
        <v-list-item prepend-icon="mdi-seat-outline" title="Home" value="account" router-link to="/"></v-list-item>
        <v-list-item prepend-icon="mdi-brain" title="Marcas" value="users" router-link to="/Marcas"></v-list-item>
          <v-list-item prepend-icon="mdi-view-dashboard-outline" title="Categorias" value="users" router-link to="/categorias"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group" title="Proveedores" value="account" router-link to="/Proveedores"></v-list-item>
          <v-list-item prepend-icon="mdi-face-woman-shimmer-outline" title="Productos" value="users" router-link to="/productos"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Clientes" value="users" router-link to="/clientes"></v-list-item>
          <v-list-item prepend-icon="mdi-account-key-outline" title="Crear Usuarios" value="users" router-link to="/CrearUsuarios"></v-list-item>
          
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 1000px"><RouterView></RouterView></v-main>
        <router-viwe></router-viwe>
      <v-main></v-main>
    </v-layout>
  </v-card>
<!--       <HelloWorld/>
 -->    </v-main>
    
  </v-app>

  
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: true,
    rail: true,
    //
  }),
}
</script>
