import { createWebHistory, createRouter } from "vue-router";
import Categorias from '../components/Categorias_Com.vue';
import Proveedores from '../components/Proveedores_Com.vue';
import Carrito from '../components/Carrito_Com.vue';
import Productos from '../components/Productos_Com.vue';
import Clientes from '../components/Clientes_Com.vue';
import Home from '../components/Home_Com.vue';
import CrearUsuarios from '../components/Crear_Usuarios_Com.vue';
import login from '../components/login_view.vue';
import Marcas from '../components/Marcas_Com.vue';



  






const routes = [
    { path: "/login_view", name: "login_view", component: login, },
    { path: "/", name: "Home", component: Home, },
    { path: "/Categorias", name: "Categorias", component: Categorias, },
    { path: "/Marcas", name: "Marcas", component: Marcas, },
    { path: "/Proveedores", name: "Proveedores", component: Proveedores, },
    { path: "/Carrito", name: "Carrito", component: Carrito, },
    { path: "/Productos", name: "Productos", component: Productos, },
    { path: "/Clientes", name: "Clientes", component: Clientes, },
    { path: "/CrearUsuarios", name: "Crear Usuarios", component: CrearUsuarios, },

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             


]

  
  
const router = createRouter({
    history: createWebHistory(), routes
});
export default router;