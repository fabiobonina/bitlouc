<template>
  <div>
    <top/>
    <v-content>
      <v-container fluid>
        <loader :dialog="isLoading"/>
        <list-lojas :data="lojas"/>
      </v-container>
    </v-content>
    <rodape/>
  </div>
</template>

<script>
import Top from '../components/includes/Top'
import Rodape from '../components/includes/Rodape'
import ListLoja from '../components/loja/ListLojas'
//import NewLoja from '../components/loja/_newLoja'
//import EdtLoja from '../components/loja/_edtLoja'
//import DelLoja from '../components/loja/_delLoja'
//import CatLoja from '../components/loja/_catLoja'
export default {
  name: 'Lojas',
  components: {
    Top,
    Rodape
  },
  data () {
      return {
        employees: [],
        isLoading: true
      }
    },
    created () {
      //const timestamp = snapshot.get('created_at');
      //const date = timestamp.toDate();
      //db.collection('employees').get()
      //db.collection("employees").doc("SF").onSnapshot(function(doc) {
        //  console.log("Current data: ", doc.data());
      //});
      this.$store.dispatch("fetchLoja").then(() => {
        this.isLoading = false
        console.log("Buscando dados lojas")
      });
    }
  
}
</script>

