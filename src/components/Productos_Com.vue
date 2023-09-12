<template>
    <div>
        <div>
            <div class="texttle">
                <input type="text" v-model="nombrenew" v-on:keypress.enter="nuevoitem()" /><br>
                <input type="text" v-model="apellidonew" v-on:keypress.enter="nuevoitem()"/><br>
                <input type="text" v-model="cedulanew" v-on:keypress.enter="nuevoitem()"/><br>
                <input type="text" v-model="telefononew" v-on:keypress.enter="nuevoitem()"/><br>
                <input type="text" v-model="correonew" v-on:keypress.enter="nuevoitem()"/><br>
                <input type="text" v-model="direccionnew" v-on:keypress.enter="nuevoitem()"/><br>
            </div>
            <table border= 1 class="datospersona">
                <thead>
                <tr>
                    <th>Numero</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Cedula</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th>Direccion</th>
                </tr>
                </thead>
                    <tbody>
                        <tr v-for="({nombre,apellido,cedula,telefono,correo,direccion,},index) in personas" :key="index">
                            <td>{{ index+1 }}</td>
                            <td>{{ nombre }}</td>
                            <td>{{ apellido }}</td>
                            <td>{{ cedula }}</td>
                            <td>{{ telefono }}</td>
                            <td>{{ correo }}</td>
                            <td>{{ direccion }}</td>
                        </tr>
                    </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    const personas = [
        {nombre:"Andrea",apellido:"Celis",cedula:"68415561",correo:"celis651@gmail.com"},
        {nombre:"ricardo",apellido:"Diaz",cedula:"68415561",correo:"rrdiaz@gmail.com"},
        {nombre:"Alcira",apellido:"Leyva",cedula:"68415561",correo:"acl1598@gmail.com"},
        {nombre:"Nicolle",apellido:"Quintero",cedula:"68415561",correo:"nq8974@gmail.com"},
    ]
    console.log(personas);
    export default {
        data(){
        return{
            personas,
                nombreold:"Andrea Celis",
                dato:"Digite texto",
                nombrenew:"Digite Nombre",
                apellidonew:"Digite Apellido",
                cedulanew:"Digite Cedula",
                telefononew:"Digite Telefono",
                correonew:"Digite E-mail",
                direccionnew:"Digite Direccion",
    }
},
methods:{
    nuevoitem(){
        this.personas.unshift({
        nombre:this.nombrenew,
        apellido:this.apellidonew,
        cedula:this.cedulanew,
        telefono:this.telefononew,
        correo:this.correonew,
        direccion:this.direccionnew,
            })
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div{
    color: #F06292;
}
.datospersona{
    text-align:center;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
}    
.texttle{
    text-align:center;
    margin-top: 6%;
    width: 90%;
    color: #F06292;
}
</style>
