<template>
  <div>
    <v-navigation-drawer persistent :mini-variant="miniVariant"  v-model="drawer" enable-resize-watcher fixed app>
      
      <v-list>
        <v-list-tile v-for="item in home" :key="item.title" :to="item.router" @click="" append>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i" >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed app>
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  name: 'Top',
  data: function () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'BitLouc',
      drawer: null,
      errorMessage: '',
      successMessage: '',
      modalUser: false,
      admins: [
        {name:'OSs', icon:'people_outline'},
        ['Settings', 'settings']
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
      ],
      home: [
        { title: 'Home',  router: '/', icon: 'home' },
        { title: 'OSs',   router: '/oss', icon: 'build' },
        { title: 'Lojas', router: '/lojas', icon: 'store' },
      ],
      items: [
        { title: 'Proprietario',  router: '', icon: 'dashboard' },
        { title: 'Config',        router: '/config', icon: 'settings' }
      ],
    };
  },
  created: function() {
    
  },
  computed: {
    user() {
      return store.state.user;
    },
    isLoggedIn() {
      return store.state.isLoggedIn;
    },    
    //...Vuex.mapGetters(["isLoggedIn"])
  },
  watch: {
    // sempre que a pergunta mudar, essa função será executada
  },
  methods: {
    atualizar: function (){
      this.isLoggedIn
    }
  }
}
</script>