<template>
    <v-card
    class="mx-auto"
    max-width="500"
    
    >
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
        <span>{{ currentTitle }}</span>
        <v-avatar
        color="secondary"
        size="24"
        v-text="step"
        ></v-avatar>
    </v-card-title>
    <v-window v-model="step">
        <v-window-item :value="1">
        <v-card-text>
            <v-text-field
            label="Email"
            placeholder="DyJ@gmail.com"
            ></v-text-field>
            <span class="text-caption text-grey-darken-1">
            Este es el correo electrónico que utilizará para iniciar sesión en su cuenta de DyJ.
            </span>
        </v-card-text>
        </v-window-item>
        <v-window-item :value= " 2">
        <v-card-text>
            <v-text-field
            label="Contraseña"
            type="password"
            ></v-text-field>
            <v-text-field
            label="Confirme Contraseña"
            type="password"
            ></v-text-field>
            <span class="text-caption text-grey-darken-1">
            Por favor ingrese una contraseña para su cuenta
            </span>
        </v-card-text>
        </v-window-item>
        <v-window-item :value="3">
        <div class="pa-4 text-center">
            <v-img
            class="mb-4"
            contain
            height="128"
            src="../assets/logo_dyj.png"
            ></v-img>
            <h3 class="text-h6 font-weight-light mb-2">
            Bienvenida/o a DyJ Distribuidora
            </h3>
            <span class="text-caption text-grey">Gracias por registrarte!</span>
        </div>
        </v-window-item>
    </v-window>
        <v-divider></v-divider>
        <v-card-actions>
        <v-btn
        v-if="step > 1"
        variant="text"
        @click="step--"
        >
        Atras
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
        v-if="step < 3"
        color="primary"
        variant="flat"
        @click="step++"
        >
        Siguiente
        </v-btn>
    </v-card-actions>
    </v-card>
</template>
<script>
    export default {
    data: () => ({
        step: 1,
    }),
    computed: {
        currentTitle () {
        switch (this.step) {
            case 1: return 'Inicia'
            case 2: return 'Crea una Contraseña'
            default: return 'Cuenta Creada'
            }
        },
    },
}
</script>

<style scoped>
.mx-auto{
    margin: 5%;

}
</style>