<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
//import Oss from './pages/oss'
//import Loja from './pages/loja'
//import Local from './pages/local'
//import Proprietario from './pages/proprietario'

import Config from './components/includes/Config'
import Loader from './components/includes/Loader'
import Message from './components/includes/Message'

export default {
  name: 'App',
  components: {
    Config,
    Loader,
    Message
  },
  data () {
    return {
      title: 'BitLouc'
    }
  }
}
</script>
