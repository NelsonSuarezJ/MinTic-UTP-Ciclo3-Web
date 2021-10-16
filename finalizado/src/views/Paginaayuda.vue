<template>

  <div>
    <Nav></Nav>
     
     <div id="inspire">
    
      <v-container class="cont" >
        <div class="capa altura-prueba">
            <div class="row">
                
                <div class="col-12 col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-4">Tipos de Usuario</h5>
                            <p>Esta página es solo para permitirle ver toda la interfaz de la página.</p>        

                            <button class="w-100 btn btn-lg btn-primary mb-3" type="submit" onclick="location.href='/Superusuario'">Super administrador</button>
                            <button class="w-100 btn btn-lg btn-primary mb-3" type="submit" onclick="location.href='/Administrador'">Administrador</button>

                            <button class="w-100 btn btn-lg btn-primary" type="submit" onclick="location.href='/Usuarioconductor'">Conductor</button>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    
</v-container>

     </div>


    <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Nav from '@/components/Nav.vue'

export default {
    components: { Footer, Nav},
   
        
}      

</script>

<style scoped>




.footer1 {
   top:0px;

}
.altura-prueba{
    padding-top: 85px  !important;
    padding-bottom: 85px;
}

.cont{
  padding-top: 90px;
  position: relative;
  left: 440px;
  width: 950px;
}

#inspire{
  
  background-image: linear-gradient(
      rgba(7, 7, 7, 0.5), 
      rgba(4, 73, 112, 0.60)
    ),
 url("../assets/fondo.png"); 

 
background-size: cover;
   
}



.btn-primary:hover{
    color: #075473 !important;
    background-color: #ffffff;
    border-color: #075473;
}

.tabla-rev tbody tr:hover{
    cursor: pointer;
}

.page-link{
    color: #075473;
    border-color: #075473;
}
.page-item.active .page-link{
    background-color: #075473;
    border-color: #075473;
}

.color-hint{
    color: #075473;
}

.btn-primary{
    background-color: #075473;
    border-color: #075473;
    color: #ffffff !important;
}
</style>