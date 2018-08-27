<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" persistent width="300">
      <v-card color="primary" dark>
        <v-card-text> 
          Por favor espere
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>  
</template>

<script>
export default {
  name: 'Loader',
  props: {
    dialog: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
