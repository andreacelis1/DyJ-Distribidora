<template>
    <div class="hello">
      <h1>Bienvenidos a DyJ Distribuidora</h1>
      <h3>Somos una empresa apasionada por la belleza y el bienestar personal. En nuestro compromiso por resaltar la belleza natural de cada persona,
      creamos una amplia gama de productos cosméticos de alta calidad. Desde maquillaje innovador hasta cuidado de la piel rejuvenecedor, ofrecemos
      soluciones que te hacen sentir radiante en cualquier ocasión. Nuestra misión es ayudarte a realzar tu confianza y expresar tu auténtica belleza.
      Descubre la magia de nuestros productos y únete a nuestra comunidad de amantes de la belleza</h3>

      <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>

      
  
  
    </div>
  </template>
      
  <script>
export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
  
  </script>
  
  <style scoped>
  h1 {
    margin: 40px 0 0;
    text-align:center;
    color: darkorchid; 
  }
		
		h3 {
      text-align:center;
      border:1px dotted #000;
      padding:8px;
    }

		div{
      width:80%;
      padding:8px;
      margin:auto;
    }
		center{
      margin:16px 0;
    }
	</style>
