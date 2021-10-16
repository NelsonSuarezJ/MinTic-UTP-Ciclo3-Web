<template>

 <div class="altura-responsive" style="background-color:antiquewhite;  height: 970px;">
    <v-toolbar id="menu-fixed" height= "80px" max-width="100%">
      <v-img max-height="100%" max-width="100" src="../assets/logo1.png" contain></v-img>
  
      

    
  
      <v-spacer></v-spacer>
  
      <v-toolbar-items
        v-model= "value"
        color="transparent"
      >
        
        <v-btn text value="recent">
          
         <a class="nav-link" href="/">Iniciar Sesion</a>
        </v-btn>
  
        
  
        <v-btn text value="favorites">
        <a class="nav-link active" href="/About">Equipo</a>
        </v-btn>
  
       
  
       
      </v-toolbar-items>
  
      
    </v-toolbar>
    <equipo></equipo>

    <Footer></Footer>
     </div>
    </template>

<script>
import Equipo from '../components/inicio/Equipo.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: { Equipo, Footer},
    
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

  html a[data-v-25ec7be9] {
    color: rgb(4, 73, 112) !important;
  }
  @media (max-width: 1024px) {
    .altura-responsive{
      height: 100vh !important;
    }
  }
  
  @media (max-width: 768px) {
    .altura-responsive{
      height: 140vh !important;
    }
  }

  @media (max-width: 720px) {
    .altura-responsive{
      height: 340vh !important;
    }
  }
  html .altura-responsive .active-equipo{
    color: rgb(4, 73, 112) !important;
  }

  .about {
    display: flex;

    justify-content: center
  }


  .footer1 {
    position: relative !important;
    bottom: 0;
    background-color: #444343;
    top:180px;
  }


</style>