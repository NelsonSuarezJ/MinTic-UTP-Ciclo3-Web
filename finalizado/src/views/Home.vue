<template>

  <div>

    <v-toolbar id="menu-fixed" height= "80px" max-width="100%">
      <v-img max-height="100%" max-width="100" src="../assets/logo1.png" contain></v-img>
  
      

    
  
      <v-spacer></v-spacer>
  
      <v-toolbar-items
        v-model= "value"
        color="transparent"
      >
        
        <v-btn text value="recent">
          
         <a class="nav-link active" href="/">Iniciar Sesion</a>
        </v-btn>
  
        
  
        <v-btn text value="favorites">
        <a class="nav-link" href="/About">Equipo</a>
        </v-btn>
  
       
  
       
      </v-toolbar-items>
  
      
    </v-toolbar>
     
    
    <sesion></sesion>

    <!-- <v-footer class="footer"
    height="60px"
    width="1000px"
      color="#444343"
    >
     
        
                 
     
  
        <v-card-text class="py-2 white--text text-center">
          <p style="color:white"> {{ new Date().getFullYear() }} — TEN TRANSPORTES. All rights reserved</p>
        </v-card-text>
      
    </v-footer> -->
    <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Sesion from '../components/inicio/Sesion.vue'

export default {
    components: { Sesion, Footer},
   
        
}
</script>

<style scoped>
  html header div{
    height: auto !important;
  }

  #menu-fixed {
    position:fixed;
    z-index:1000;
    top:0;
    left:0;
    width:100%;
    
    box-shadow:0px 4px 4px rgb(4, 73, 112);
  }

  .nav-link{
    color: #F25116  ;
    padding-left: 0px;
    padding-right: 0px;
  }

  .nav-link:hover{
    color: rgb(4, 73, 112);
  }

  a {
    font: Arial;
    font-style:inherit;
    color:rgb(4, 73, 112)
  }

  .active{
    color: rgb(4, 73, 112);
  }
</style>