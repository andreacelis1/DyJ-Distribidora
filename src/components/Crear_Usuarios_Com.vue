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
          <v-toolbar-title>Lista de Usuarios</v-toolbar-title>
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
                Añadir Usuario
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
                        v-model="editedItem.usuario"
                        label="Usuario"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.clave"
                        label="clave"
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
              <v-card-title class="text-h5">Deseas eliminar este usuario?</v-card-title>
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
  import {collection, getDocs, query, addDoc,updateDoc,doc,deleteDoc} from  'firebase/firestore'
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
          { title: 'Nombre', key: 'usuario' },
          { title: 'Contraseña', key: 'clave' },
          { title: 'Actions', key: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
          id: 0,
          usuario: 0,
          clave: 0,
        },
        defaultItem: {
          id: 0,
          usuario: 0,
          clave: 0,
        },
      }),
  
      computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'Nuevo Usuario' : 'Actualizar Usuario'
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

{ title: "Nombre", dataKey: "nombre" },

{ title: "Contraseña", dataKey: "contraseña" },

];

let registros = this.desserts;

let doc = new jsPDF("p", "pt");

doc.autoTable(columns, registros, {

  margin: { top: 60 },

  addPageContent: function () {

    doc.text("crear usurios", 40, 30);

  },

});

doc.save("crear usurios.pdf");

},

        async limpiarCrud(){
          this.desserts=[]
        },
  
        async createUser(){
          const colRef = collection(db, 'user')
          const dataObj = {
              id: this.editedItem.id,
              usuario: this.editedItem.usuario,
              clave: this.editedItem.clave
          }
          const docRef = await addDoc(colRef, dataObj);
          console.log("Creo el usuario ", docRef.id)
      },
  
      async listarUsuarios(){
          const q = query(collection(db, "user"));
          const resul = await getDocs(q);
          resul.forEach((doc)=>{
            console.log("datos",doc.data());
            this.desserts.push ({
            keyid:doc.id,
            id:doc.data().id,
            usuario:doc.data().usuario,
            clave:doc.data().clave,

            })
           
          })
        },

        async ActualizarUsuarios(){
        console.log(this.editedItem.keyid)
        const Ref = (doc(db, "user",this.editedItem.keyid));
        await updateDoc (Ref,{
              usuario: this.editedItem.usuario,
              clave: this.editedItem.clave,
        }).then(console.log("Termino update user"))
        .catch(function(error){
          console.log(error)
        });
      },

      async EliminarUsuarios(){
        await deleteDoc(doc(db, "user",this.editedItem.keyid))
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
          this.EliminarUsuarios()
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
            this.ActualizarUsuarios()
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