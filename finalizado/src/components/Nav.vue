<template>
    <v-toolbar id="menu-fixed"
      
      
    >
      <v-img
  
  max-height="60"
  max-width="60"
  src="../assets/logo1.png"
></v-img>
  
      
  
    
  
      <v-spacer></v-spacer>
  
      <v-toolbar-items class="hidden-sm-and-down">
        
      <v-btn text color="rgba(4, 73, 112)">
        <a class="nav-link" href="/Home">Cerrar Sesion</a>
        </v-btn>
  
       
  
       
      </v-toolbar-items>
  
      
    </v-toolbar>
</template>

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
</style>