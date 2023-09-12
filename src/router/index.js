import { createWebHistory, createRouter } from "vue-router";
import Categorias from '../components/Categorias_Com.vue';
import Proveedores from '../components/Proveedores_Com.vue';
import Carrito from '../components/Carrito_Com.vue';
import Productos from '../components/Productos_Com.vue';
import Clientes from '../components/Clientes_Com.vue';
import Home from '../components/Home_Com.vue';
import Login from '../components/login_Com.vue';
import CrearUsuarios from '../components/Crear_Usuarios_Com.vue';
import Usuarios from '../components/Usuarios_Com.vue';




const routes = [
    { path: "/", name: "Home", component: Home, },
    { path: "/Proveedores", name: "Proveedores", component: Proveedores, },
    { path: "/Categorias", name: "Categorias", component: Categorias, },
    { path: "/Carrito", name: "Carrito", component: Carrito, },
    { path: "/Productos", name: "Productos", component: Productos, },
    { path: "/Clientes", name: "Clientes", component: Clientes, },
    { path: "/Login", name: "Login", component: Login, },
    { path: "/CrearUsuarios", name: "Crear Usuarios", component: CrearUsuarios, },
    { path: "/Usuarios", name: "Usuarios", component:Usuarios, },




]

const router = createRouter({
    history: createWebHistory(), routes
});
export default router;