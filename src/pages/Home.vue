<template>
  <div>
    <top/>
    <v-content>
        <v-container fluid>
          <router-view></router-view>
          <li v-for="employee in employees" v-bind:key="employee.id" class="collection-item">
            <div class="chip">{{employee.dept}}</div>
            {{employee.employee_id}}: {{employee.name}} 
            <router-link class="secondary-content" v-bind:to="{ name: 'view-employee', params: { employee_id: employee.employee_id }}"><i class="fa fa-eye"></i></router-link>
          </li>
        </v-container>
    </v-content>
    <rodape/>
  </div>
</template>

<script>
import db from '../firebaseInit'
//import Dashboard from './pages/Dashboard'
import Top from '../components/includes/Top'
import Rodape from '../components/includes/Rodape'
export default {
  name: 'Home',
  components: {
    Top,
    Rodape
  },
  data () {
      return {
        employees: [],
        loading: true
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
        console.log("Buscando dados para inicial!")
      });
      this.$store.dispatch("fetchLoja").then(() => {
        console.log("Buscando dados para inicial!")
      });
      db.collection('employees').orderBy('dept').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          const data = {
            'id': doc.id,
            'employee_id': doc.data().employee_id,
            'name': doc.data().name,
            'dept': doc.data().dept,
            'position': doc.data().position
          }
          this.employees.push(data)
        })
      })
    }
  
}
</script>

