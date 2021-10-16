<template>
<div style="background-color:antiquewhite;  height: 1500px;">
 <Nav></Nav>

    <listaadministradores></listaadministradores>
    <registroadmin></registroadmin>

  <Footer></Footer>
  
</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Nav from '@/components/Nav.vue'
import Listaadministradores from '../../components/superadministrador/Listaadministradores.vue'


export default {
    components: {Listaadministradores, Footer, Nav},
   
        
}
</script>

<style scoped>

.footer1 {
  top: 1450px;
}

</style>
