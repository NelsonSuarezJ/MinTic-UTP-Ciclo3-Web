import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    users: [],
    vehicles:[],
    drivers:[],
    preope:[],
   
  },
  mutations: {
    
    setUsers(state, payload){
      state.users = payload;
    },
    setVehicles(state, payload){
      state.vehicles = payload;
    },
    setDrivers(state, payload){
      state.drivers = payload;
    },
    setPreope(state, payload){
      state.preope = payload;
    },
    
    
  },
  actions: {
    async getUsers({commit}){
      const peticion = await fetch('http://localhost:3000/users');
      const data = await peticion.json();
      // console.log(data);
      commit('setUsers', data);
    },
    
    async deleteUsers(commit, users){
      peticion
      const peticion = await fetch('http://localhost:3000/users', {
        method: 'DELETE',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(users)
      });
    },
      async setUsers(commit, users){
        peticion
        const peticion = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify(users)
        });
      },
      async updateUsers(commit, users){
        peticion
        const peticion = await fetch('http://localhost:3000/users', {
          method: 'PUT',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify(users)
        });
      },
        async getVehicles({commit}){
          const peticion = await fetch('http://localhost:3000/vehicles');
          const data = await peticion.json();
          console.log(data);
          commit('setVehicles', data);
        },
        
        async deleteVehicles(commit, vehicles){
          peticion
          const peticion = await fetch('http://localhost:3000/vehicles', {
            method: 'DELETE',
            headers: {
              'Content-Type':'application/json'
            },
            body: JSON.stringify(vehicles)
          });
        },
          async setVehicles(commit, vehicles){
            peticion
            const peticion = await fetch('http://localhost:3000/vehicles', {
              method: 'POST',
              headers: {
                'Content-Type':'application/json'
              },
              body: JSON.stringify(vehicles)
            });
          },
          async updateVehicles(commit, vehicles){
            peticion
            const peticion = await fetch('http://localhost:3000/vehicles', {
              method: 'PUT',
              headers: {
                'Content-Type':'application/json'
              },
              body: JSON.stringify(vehicles)
            });
          },
            async getDrivers({commit}){
              const peticion = await fetch('http://localhost:3000/drivers');
              const data = await peticion.json();
              console.log(data);
              commit('setDrivers', data);
            },
            
            async deleteDrivers(commit, drivers){
              peticion
              const peticion = await fetch('http://localhost:3000/drivers', {
                method: 'DELETE',
                headers: {
                  'Content-Type':'application/json'
                },
                body: JSON.stringify(drivers)
              });
            },
              async setDrivers(commit, drivers){
                peticion
                const peticion = await fetch('http://localhost:3000/drivers', {
                  method: 'POST',
                  headers: {
                    'Content-Type':'application/json'
                  },
                  body: JSON.stringify(drivers)
                });
              },
              async updateDrivers(commit, drivers){
                peticion
                const peticion = await fetch('http://localhost:3000/drivers', {
                  method: 'PUT',
                  headers: {
                    'Content-Type':'application/json'
                  },
                  body: JSON.stringify(drivers)
                });
        
    },
   
      
      
  },
  modules: {
  }
})
 