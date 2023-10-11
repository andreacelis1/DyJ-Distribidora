<template>
      <h1>Bienvenidos a DyJ Distribuidora</h1>


      <v-carousel
    cycle: interval="3000" height="800" width="1000" show-arrows="hover">
    <v-carousel-item
      src="../assets/banner1.png"
      cover="1">
    </v-carousel-item>

    <v-carousel-item
      src="../assets/banner1.png"
      cover>
    </v-carousel-item>

    <v-carousel-item
      src="../assets/banner1.png"
      cover>
    </v-carousel-item>

    <v-carousel-item
      src="../assets/banner1.png"
      cover>
    </v-carousel-item>
  </v-carousel>

      
  
  
  </template>
      
  <script>
export default {
    data () {
      return {
        
      }
    }
  }
  
  </script>
  
   <style scoped>
  h1 {
    margin: 40px 0 0;
    text-align:right;
    color: darkorchid; 
  }
		
/* 		h3 {
      text-align:right;
      border:1px dotted #000;
      padding:8px;
    } */

		div{
      width:95%;
      padding:10px;
      margin:auto;
    }
		center{
      margin:20px 0;
    }
	</style> 
