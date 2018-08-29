<template>
  <div>
    <loader :dialog="isLoading"/>    
  </div>
</template>

<script>
import Loader from './Loader'
export default {
  name: 'Config',
  components: {
    Loader
  },
  data: function () {
    return {
      errorMessage: '',
      successMessage: '',
      isLoading: true
    };
  },
  created: function() {
    this.$store.dispatch("fetchIndex").then(() => {
      this.isLoading = false
    });
    /*this.$store.dispatch("fetchConfig").then(() => {
      console.log("Buscando dados das Configurações!")
    });
    
    this.$store.dispatch("fetchOs").then(() => {
      console.log("Buscando dados OS!")
    });*/
  }
}
</script>

