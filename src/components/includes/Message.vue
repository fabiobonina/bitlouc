<template>
  <div>
    <v-snackbar v-model="temErros" color="error" top multi-line :timeout="timeout">
        <p v-for="message in error" :key="message">{{ message }} </p>
        <v-btn dark flat @click="temErros = false">Close</v-btn>
    </v-snackbar>
    <v-snackbar v-model="temMessage" color="success" top multi-line :timeout="timeout">
        <p v-for="message in success" :key="message">{{ message }} </p>
        <v-btn dark flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    error: Array,
    success: Array,
    alerta: Boolean
  }
}
</script>