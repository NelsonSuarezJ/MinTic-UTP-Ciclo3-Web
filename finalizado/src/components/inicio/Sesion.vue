<template>
  <v-app id="inspire">
    
    <v-container class="cont" >
      <v-row class="row-login" align="center" justify="end">
        <v-col cols="12" sm="6" md="6" lg="6" class="col-login">
          <v-card class="elevation-40">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-row>
                  <v-col class="login-marg" cols="8" md="7" lg="7">
                    <v-card-text class="mt-7">
                      
                      <div class="d-flex flex-column justify-space-between align-center">
    

    <v-img max-height="200" max-width="200" src="../../assets/logo1.png"></v-img>
    </div>
                        
      <v-form>
        <v-text-field required id="email" label="Email" name="Email" type="text" color="orange" />

        <v-text-field required id="password" label="Password" name="password" type="password" color="orange" />
      </v-form>
      <div id="formulario"></div>
      </v-card-text>
      <div class="text-center mt-3">
        <v-btn rounded color="#044970" dark @click="ingresar()">Iniciar Sesion</v-btn>
      </div>
                  </v-col>
  <v-col class="login-marg" cols="4" md="5" lg="5">
    
    <div class="text-center">
    
      <v-img height="509" min-width="265" src="../../assets/ff.png"></v-img>
    </div>      
                   
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  
  </v-app>
</template>

<script>
// import store from "../store/index.js";

export default {
  data: () => ({
    step: 1,
    form: {
      email: '',
      password: '',
    },
    show: true,
  
  }),
  props: {
    source: String
  },
  methods: {
    ingresar(){

      
      //seleccionar el usuario y contraseña
      let usuario = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      
      if(usuario.length == 0 || password.length == 0){
        //alertas

          let formulario = document.getElementById("formulario")
          formulario.innerHTML = '<p class="px-2 py-2">Por favor agregue un Email y Contraseña</p>'

          setTimeout(() => {
            formulario.innerHTML = ''
          }, 2000);


        // formulario.innerHTML = "Por favor agregue un email";
        
      }else{
        this.$router.push("/Paginaayuda");
      }
      
    }
  }
};
</script>

<style scoped>
@media (max-width: 1024px) {
  html .row-login{
    flex: 0 0 auto;
    justify-content: center;
    width: 100%;
  }

  html .row-login .col-login{
    flex-basis: 100%;
    width: 100%;
  }

  html .login-marg{
    min-width: 100%;
  }
}
.cont{
  display: flex;
  padding-top: 90px;
}

#inspire{
  
  background-image: linear-gradient(
      rgba(7, 7, 7, 0.5), 
      rgba(4, 73, 112, 0.60)
    ),
 url("../../assets/fondo.png"); 

 
background-size: cover;
   
}

a {
  color:white;
}

#formulario{
  background-color: rgb(150, 32, 32);
  color: white;
}
</style>