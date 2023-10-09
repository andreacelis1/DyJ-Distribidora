
<template> 

  <v-container>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :sort-by="[{ key: 'calories', order: 'asc' }]"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Clientes</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                color="primary"
                dark
                v-bind="props"
              >
                Añadir Clientes
              </v-btn>
              <v-btn
                color="primary"
                dark
                @click="imprimir()"
                >
                Imprimir
                </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.id"
                        label="Id"
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.rut"
                        label="rut"
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="nombre"
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.telefono"
                        label="telefono"
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.direccion"
                        label="direccion"
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.correo"
                        label="correo"
                      ></v-text-field>
                    </v-col>

                  
  
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="close"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="save"
                >
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Deseas eliminar este cliente?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancelar</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">Confirmar</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          size="small"
          class="me-2"
          @click="editItem(item.raw)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          size="small" color="primary"
          @click="deleteItem(item.raw)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
  
    </template>
  
  
  <script>
  
  import db from '../firebase/init.js'
  import {collection, getDocs, query, addDoc,updateDoc,doc,deleteDoc } from  'firebase/firestore'
  import jsPDF from 'jspdf'
    require('jspdf-autotable')
    export default{
     /*  created(){ */
       /* this.createUsuario();  */
  /*     }, */
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
          {
        /*     title: 'Dessert (100g serving)', */
            align: 'start',
            sortable: false,
            key: 'name',
          },
          { title: 'Id', key: 'id' },
          { title: 'Rut', key: 'rut' },
          { title: 'Nombre', key: 'nombre' },
          { title: 'Telefono', key: 'telefono' },
          { title: 'Direccion', key: 'direccion' },
          { title: 'Correo', key: 'correo' },
          { title: 'Opciones', key: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
          keyid:'',
          id: '',
          rut: '',
          nombre: '',
          telefono: '',
          direccion: '',
          correo: '',


        },
        defaultItem: {
          id: '',
          rut: '',
          nombre: '',
          telefono: '',
          direccion: '',
          correo: '',
        },
      }),
  
      computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'Nuevo proveedor' : 'Actualizar proveedor'
        },
      },
  
      watch: {
        dialog (val) {
          val || this.close()
        },
        dialogDelete (val) {
          val || this.closeDelete()
        },
      },
  
      created () {
     /*    this.initialize() */
        this.listarUsuarios()
      },
  
  
      methods: {

        async imprimir() {

let columns = [

{ title: "Id", dataKey: "id" },

{ title: "Rut", dataKey: "rut" },

{ title: "Nombre", dataKey: "nombre" },

{ title: "Telefono", dataKey: "telefono" },

{ title: "Direccion", dataKey: "direccion" },

{ title: "Correo", dataKey: "correo" },

];

let registros = this.desserts;

let doc = new jsPDF("p", "pt");

doc.autoTable(columns, registros, {

  margin: { top: 60 },

  addPageContent: function () {

    doc.text("Productos", 40, 30);

  },

});

doc.save("Productos.pdf");

},
        
      async limpiarCrud(){
      this.desserts=[]
      },
  
        async createUser(){
          const colRef = collection(db, 'proveedores')
          const dataObj = {
              id: this.editedItem.id,
              rut: this.editedItem.rut,
              nombre: this.editedItem.nombre,
              telefono: this.editedItem.telefono,
              correo: this.editedItem.correo,
              direccion: this.editedItem.direccion,

          }
          const docRef = await addDoc(colRef, dataObj);
          console.log("Creo el proveedor ", docRef.id)
      },
  
        async listarUsuarios(){
          const q = query(collection(db, "proveedores"));
          const resul = await getDocs(q);
          resul.forEach((doc)=>{
            console.log("datos",doc.data());
            this.desserts.push ({
            keyid:doc.id,
            id:doc.data().id,
            rut:doc.data().rut,
            nombre:doc.data().nombre,
            telefono:doc.data().telefono,
            correo:doc.data().correo,
            direccion:doc.data().direccion,
            })
           
          })
        },

        async ActualizarProveedores(){
        console.log(this.editedItem.keyid)
        const Ref = (doc(db, "proveedores",this.editedItem.keyid));
        await updateDoc (Ref,{
              rut: this.editedItem.rut,
              nombre: this.editedItem.nombre,
              telefono: this.editedItem.telefono,
              correo: this.editedItem.correo,
              direccion: this.editedItem.direccion,
        }).then(console.log("Termino update proveedores"))
        .catch(function(error){
          console.log(error)
        });
      },

      async EliminarProveedores(){
        await deleteDoc(doc(db, "proveedores",this.editedItem.keyid))
        },

     
        initialize () {
          this.desserts = [
          ]
        },
  
        editItem (item) {
          this.editedIndex = this.desserts.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialog = true
        },
  
        deleteItem (item) {
          this.editedIndex = this.desserts.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialogDelete = true
        },
  
        deleteItemConfirm () {
          this.desserts.splice(this.editedIndex, 1)
          this.closeDelete()
          this.EliminarProveedores()
        },
  
        close () {
          this.dialog = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
        closeDelete () {
          this.dialogDelete = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
        save () {
          if (this.editedIndex > -1) {
            Object.assign(this.desserts[this.editedIndex], this.editedItem)
            this.ActualizarClientes()
            this.limpiarCrud()
            this.listarUsuarios()
          } else {
            this.desserts.push(this.editedItem)
            this.createUser()
            this.limpiarCrud();
            this.listarUsuarios();
          }
          this.close()
        },
  
      },
  
  }   
  </script>