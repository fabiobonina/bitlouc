import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebaseInit'

Vue.use(Vuex)
//const INDEXLIST   ='./config/api/apiProprietario.php?action=read';
//const CONFIG      ='./config/api/apiConfig.php?action=config';
//const LOCALLIST   ='./config/api/apiLocal.php?action=read';
//const OSLIST      ='./config/api/apiOs.php?action=read';
//const CONFIGPROD  ='./config/api/apiConfig.php?action=prod';

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

const state = {
  isLoggedIn: !!localStorage.getItem("token"),
  token: atob(localStorage.getItem("token")),
  deslocTrajetos: [],
  deslocStatus: [],
  proprietario:{},
  lojas: [],
  loja: [],
  locais: [],
  local: {},
  bens: [],
  users:[],
  user:[],
  tipos:[],
  produtos:[],
  fabricantes:[],
  categorias:[],
  servicos:[],
  tecnicos:[],
  osProprietario:{},
  osLojas:[],
  oss:[],
  mods:[],
  grupos:[],
  seguimentos:[],
  search:'',
  status:'0',
}

const mutations = {
  [LOGIN](state) {
    state.pending = true;
  },
  [LOGIN_SUCCESS](state) {
    state.isLoggedIn = !!localStorage.getItem("token");
    state.pending = false;
  },
  [LOGOUT](state) {
    state.isLoggedIn = false;
    state.token = '';
  },
  SET_SEARCH(state, search) {
    state.search = search
  },
  SET_STATUS(state, status) {
    state.status = status
  },
  SET_PROPRIETARIO(state, proprietario) {
    state.proprietario = proprietario
  },
  SET_USERS(state, users) {
    state.users = users
  },
  SET_USER(state, user) {
    state.user = user
  },
  SET_LOGAR(state, creds) {
    state.user = creds.user
    state.isLoggedIn = creds.isLoggedIn;
    state.token = creds.token ;
  },
  SET_LOJAS(state, lojas) {
    //const data = conversation.data()
    //state.lojas = [],
    //console.log(lojas.data)
    /*state.lojas = {
      ...state.lojas, 
      [conversation.id]: { users: data.users, created: data.created, messages: [] }
    }*/
    state.lojas.push(lojas.data)
    //state.lojas = lojas

  },
  SET_LOJA(state, loja) {
    state.loja = loja
  },
  SET_LOCAL(state, local) {
    state.local = local
  },
  SET_LOCAIS(state, locais) {
    state.locais = locais
  },
  SET_BENS(state, bens) {
    state.bens = bens
  },
  SET_TIPOS(state, tipos) {
    state.tipos = tipos
  },
  SET_PRODUTOS(state, produtos) {
    state.produtos = produtos
  },
  SET_FABRICANTES(state, fabricantes) {
    state.fabricantes = fabricantes
  },
  SET_CATEGORIAS(state, categorias) {
    state.categorias = categorias
  },
  SET_SERVICOS(state, servicos) {
    state.servicos = servicos
  },
  SET_TECNICOS(state, tecnicos) {
    state.tecnicos = tecnicos
  },
  SET_OSPROPRIETARIO(state, osProprietario) {
    state.osProprietario = osProprietario
  },
  SET_OSLOJAS(state, osLojas) {
    state.osLojas = osLojas
  },
  SET_OSS(state, oss) {
    state.oss = oss
  },
  SET_MODS(state, mods) {
    state.mods = mods
  },
  SET_SEGUIMENTOS(state, seguimentos) {
    state.seguimentos = seguimentos
  },
  SET_GRUPOS(state, grupos) {
    state.grupos = grupos
  },
  SET_DESLOC_TRAJETOS(state, deslocTrajetos) {
    state.deslocTrajetos = deslocTrajetos
  },
  SET_DESLOC_STATUS(state, deslocStatus) {
    state.deslocStatus = deslocStatus
  },
}

const actions = {
  fetchLoja({ commit }) {
    return new Promise((resolve) => {
      db.collection('employees').orderBy('dept').get().then((querySnapshot) => {
        state.lojas = [],
        querySnapshot.forEach((doc) => {
            const data = {
                'id': doc.id,
                'employee_id': doc.data().employee_id,
                'name': doc.data().name,
                'dept': doc.data().dept,
                'position': doc.data().position
            }
            commit('SET_LOJAS', { data })
        })
      })
      resolve();
    });
  },
  setSearch({ commit }, search) {
    commit("SET_SEARCH", search)
  },
  setStatus({ commit }, status) {
    commit("SET_STATUS", status)
  },
  setProprietario({ commit }, proprietario) {
    commit("SET_PROPRIETARIO", proprietario)
  },
  setUser({ commit }, user) {
    commit("SET_USER", user)
  },
  setUsers({ commit }, users) {
    commit("SET_USERS", users)
  },
  setLojas({ commit }, lojas) {
    commit("SET_LOJAS", lojas)
  },
  setLoja({ commit }, loja) {
    commit("SET_LOJA", loja)
  },
  setLocais({ commit }, locais) {
    commit("SET_LOCAIS", locais)
  },
  setLocal({ commit }, local) {
    commit("SET_LOCAL", local)
  },
  setBens({ commit }, bens) {
    commit("SET_BENS", bens)
  },
  setTipos({ commit }, tipos) {
    commit("SET_TIPOS", tipos)
  },
  setProdutos({ commit }, produtos) {
    commit("SET_PRODUTOS", produtos)
  },
  setFabricantes({ commit }, fabricantes) {
    commit("SET_FABRICANTES", fabricantes)
  },
  setCategorias({ commit }, categorias) {
    commit("SET_CATEGORIAS", categorias)
  },
  /*fetchIndex({ commit }) {
    return new Promise((resolve, reject) => {
      var postData = { token: state.token };
      Vue.http.post(INDEXLIST, postData )
      .then(function(response) {
        //console.log( response); 
        if(response.data.error){
          //console.log(response.data.message);
          if(!response.data.isLoggedIn){
            localStorage.removeItem("token");
            localStorage.removeItem("isLoggedIn");
            commit(LOGOUT);
          }
        } else{
          commit("SET_USER", response.data.user);
          commit("SET_PROPRIETARIO", response.data.proprietarios);
          commit("SET_LOJAS", response.data.lojas);
          commit("SET_LOCAIS", response.data.locais);
          resolve();
        }
      })
      .catch((error => {
          Console.log(error.statusText);
      }));
    });
  },
  fetchConfig({ commit }) {
    return new Promise((resolve) => {
      Vue.http.get(CONFIG)
      .then((response) => {
        if(response.data.error){
          console.log(response.data.message);
        } else{
          //console.log(response.data);
          commit("SET_TIPOS", response.data.tipos);
          commit("SET_CATEGORIAS", response.data.categorias);
          commit("SET_FABRICANTES", response.data.fabricantes);
          commit("SET_SERVICOS", response.data.servicos);
          commit("SET_TECNICOS", response.data.tecnicos);
          commit("SET_SEGUIMENTOS", response.data.seguimentos);
          commit("SET_GRUPOS", response.data.grupos);
          commit("SET_DESLOC_STATUS", response.data.deslocStatus);
          commit("SET_DESLOC_TRAJETOS", response.data.deslocTrajetos);
          resolve();
        }
      })
      .catch((error => {
          console.log(error.statusText);
          console.error("Log an error level message.");
      }));
    });
  },
  fetchOs({ commit }) {
    return new Promise((resolve, reject) => {
        Vue.http.get(OSLIST)
      .then((response) => {
        if(response.data.error){
          console.log(response.data.message);
        } else{
          //console.log(response.data);
          commit("SET_OSPROPRIETARIO", response.data.osProprietario);
          commit("SET_OSLOJAS", response.data.osLojas);
          commit("SET_OSS", response.data.oss);
          commit("SET_MODS", response.data.mod);
          resolve();
        }
      })
      .catch((error => {
          console.log(error.statusText);
      }));
    });
  },
  fetchLocais({ commit }, loja) {
    return new Promise((resolve, reject) => {
      var postData = {
      loja: loja,
      }
      //console.log(postData);
      Vue.http.post(LOCALLIST,postData)
        .then((response) => {
          if(response.data.error){
            console.log(response.data.message);
          } else{
            //console.log(response.data);
            commit("SET_LOCAIS", response.data.locais);
            commit("SET_BENS", response.data.bens);
            resolve();
          }
        })
        .catch((error => {
            console.log(error);
        }));
    });
  },
  fetchProdutos({ commit }) {
    return new Promise((resolve, reject) => {
        Vue.http.get(CONFIGPROD)
        .then((response) => {
          if(response.data.error){
            console.log(response.data.message);
          } else{
            commit("SET_PRODUTOS", response.data.produtos);
            resolve();
          }
        })
        .catch((error => {
            console.log(error);
        }));
    });
  },*/
}

const getters = {
  isLoggedIn: state => {
    return state.isLoggedIn;
  },
  //getSearch: state => state.tipoDeslocamentos,
  getSearch: state => state.search,
  getStatus: state => state.status,
  getUser: state => state.user,
  getUsers: state => state.users,
  getProprietario: state => state.proprietario,
  getLojas: state => state.lojas,
  getLocais: state => state.locais,
  getLocal: state => state.local,
  getBens: state => state.bens,
  getTipos: state => state.tipos,
  getProdutos: state => state.produtos,
  getFabricantes: state => state.fabricantes,
  getCategorias: state => state.categorias,
  getServicos: state => state.servicos,
  getTecnicos: state => state.tecnicos,
  getOss: state => state.oss,
  getTodoById: state => (id) => {
    return state.lojas.filter(loja => loja.id === id)
  },
  getLojaId: (state) => (id) => {
    return state.lojas.find(todo => todo.id === id)
    //return state.lojas.filter(loja => loja.id === id)
  },
  getLojaAtivo: (state) => () => {
    return state.lojas.filter(todo => todo.ativo === '0')
    //return state.lojas.filter(loja => loja.id === id)
  },
  getTodoBy: (state) => (id) => {
    return state.lojas.find(todo => todo.id === id)
  },
  getLocalId: (state) => (id) => {
    return state.locais.find(todo => todo.id === id)
    //return state.lojas.filter(loja => loja.id === id)
  },
  getLocalLoja: (state) => (loja) => {
    state.locais.filter(todo => todo.ativo === '0')
    return state.locais.filter(todo => todo.loja === loja)
    //return state.lojas.filter(loja => loja.id === id)
  },
  getBensLocal: (state) => (local) => {
    return state.bens.filter(todo => todo.local === local)
  },
  getOssLoja: (state) => (loja) => {
    return state.oss.filter(todo => todo.loja === loja)
  },
  getOssLocal: (state) => (local) => {
    return state.oss.filter(todo => todo.local.id === local)
  },
  getOssStatus: (state) => (status) => {
    return state.oss.filter(todo => todo.status === status)
  },
  getOsId: (state) => (id) => {
    return state.oss.find(todo => todo.id === id)
  },
  getModOsTec: (state) => (os, tecnico) => {
    return state.oss.filter(todo => todo.os === os && todo.tecnico === tecnico)
  },
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})