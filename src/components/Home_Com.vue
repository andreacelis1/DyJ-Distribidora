<template>
      <h1 class="h1">Bienvenidos a DyJ Distribuidora</h1>
      <!-- <v-container class="pres">

      <h2>
        Tu belleza, nuestro compromiso
    
      </h2>

      <h3>
        La belleza es una expresión de la personalidad y la autoestima. Por eso, en [nombre de la página] nos comprometemos a ofrecerte los mejores productos cosméticos para que puedas resaltar tu belleza natural y sentirte segura de ti misma.

        En nuestra página encontrarás una amplia variedad de productos para el cuidado facial, el maquillaje, el cuidado del cabello y las uñas. Todos nuestros productos son de alta calidad y están elaborados con ingredientes naturales y seguros.
        
        Además, ofrecemos un servicio de atención al cliente personalizado para ayudarte a encontrar los productos que mejor se adapten a tus necesidades.
      </h3>
    </v-container> -->

      <v-carousel class="home"
      cycle: interval="3000" height="800" width="2000" show-arrows="hover">
      <v-carousel-item
        src="../assets/banner1.png"
        cover="1">
      </v-carousel-item>
  
      <v-carousel-item
        src="../assets/banner2.png"
        cover>
      </v-carousel-item>
  
      <v-carousel-item
        src="../assets/banner3.png" 
        cover>
      </v-carousel-item>
  
      <v-carousel-item
        src="../assets/banner4.png"
        cover>
      </v-carousel-item>

      <v-carousel-item
        src="../assets/banner5.png"
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
    margin: 4px 0 0;
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
      padding:0px;
      margin:auto;
    }
		center{
      margin:20px 0;
    }

    .home{
      margin-left: 25%;

    }

    .pres{
      width: 1500px;
  border: 5px solid;
  padding: 2px 5px;
  margin-left:10%;

      
    }
	</style> 
