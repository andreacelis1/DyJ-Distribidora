<template>
  <v-card
    class="mx-auto"
    width="1650"
    >
    <v-card-item class="bg-orange-darken-4" >
      <v-card-title>   
        Diccionario de Clientes
      </v-card-title>
      <template v-slot:append>
        <v-btn
          color="white"
          icon="mdi-plus"
          size="small"
        ></v-btn>
      </template>
    </v-card-item>
    <v-card-text class="pt-4">
      Listado de Clientes
    </v-card-text>
    <v-divider></v-divider>
    <v-virtual-scroll
      :items="items"
      height="800"
      item-height="10"
    >
      <template v-slot:default="{ item }">
        <v-list-item>
          <template v-slot:prepend>
            <v-avatar
              :color="item.color"
              class="text-white"
              size="40">
              {{ item.initials }}
            </v-avatar>
          </template>
          <v-list-item-title>{{ item.fullName }}</v-list-item-title>
          <template v-slot:append>
            <v-btn
              size="small"
              variant="tonal">
              Detalle
              <v-icon
                color="primary"
                end>
                mdi-open-in-new
              </v-icon>
            </v-btn>
          </template>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script>

  export default {

    data: () => ({

      colors: ['#2196F3', '#90CAF9', '#64B5F6', '#42A5F5', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1', '#82B1FF', '#448AFF', '#2979FF', '#2962FF'],
      names: ['Oliver', 'Jake', 'Noah', 'James', 'Jack', 'Connor', 'Liam', 'John', 'Harry', 'Callum', 'Mason', 'Robert', 'Jacob', 'Jacob', 'Jacob', 'Michael', 'Charlie', 'Kyle', 'William', 'William', 'Thomas', 'Joe', 'Ethan', 'David', 'George', 'Reece', 'Michael', 'Richard', 'Oscar', 'Rhys', 'Alexander', 'Joseph', 'James', 'Charlie', 'James', 'Charles', 'William', 'Damian', 'Daniel', 'Thomas', 'Amelia', 'Margaret', 'Emma', 'Mary', 'Olivia', 'Samantha', 'Olivia', 'Patricia', 'Isla', 'Bethany'],
      surnames: ['Smith', 'Anderson', 'Clark', 'Wright', 'Mitchell', 'Johnson', 'Thomas', 'Rodriguez', 'Lopez', 'Perez', 'Williams', 'Jackson', 'Lewis', 'Hill', 'Roberts', 'Jones', 'White', 'Lee', 'Scott', 'Turner', 'Brown', 'Harris', 'Walker', 'Green', 'Phillips', 'Davis', 'Martin', 'Hall', 'Adams', 'Campbell', 'Miller', 'Thompson', 'Allen', 'Baker', 'Parker', 'Wilson', 'Garcia', 'Young', 'Gonzalez', 'Evans', 'Moore', 'Martinez', 'Hernandez', 'Nelson', 'Edwards', 'Taylor', 'Robinson', 'King', 'Carter', 'Collins'],

    }),

 

    computed: {
      items () {
        const namesLength = this.names.length
        const surnamesLength = this.surnames.length
        const colorsLength = this.colors.length

        return Array.from({ length: 10000 }, () => {
          const name = this.names[this.genRandomIndex(namesLength)]
          const surname = this.surnames[this.genRandomIndex(surnamesLength)]
          return {
            color: this.colors[this.genRandomIndex(colorsLength)],
            fullName: `${name} ${surname}`,
            initials: `${name[0]} ${surname[0]}`,
          }
        })
      },
    },

    methods: {
      genRandomIndex (length) {
        return Math.ceil(Math.random() * (length - 1))
      },
    },
  }

</script>

<style scoped>
.bg-orange-darken-4 {
  background-color: #E1BEE7 !important;
  color: #FFFFFF !important;
}

</style>