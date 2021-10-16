<template>
<div>

<div class="container2">
           
            <div class="row mt-10">
              <div class="col-8 col-sm-5 col-md-4 col-lg-3">
                <div class="our-team">
                  <div class="picture">
                    <img class="img-fluid" src="../../assets/perfil.png">
                  </div>
                  <div class="team-content">
                   <h3 class="name">Pedro Rodriguez</h3>
                    <h4 class="title">Administrador</h4>
                  </div>
                  
                
              </div>
            </div>
            </div>
        
           
            
        </div>
      
    

<div class="container-xl">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-5">
                         <h2>Lista Vehiculos</h2>
                        </div>
                        
                    </div>
                </div>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            
                            <th>Vehiculo</th>						
                            <th>Placa</th>
                            <th>Km</th>
                            
                            <th>Soat</th>
                            <th>Tecnomecanica</th>
                            <th>Tarjeta de Propiedad</th>
                            <th>Acciones</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="vehiculo in vehicles" :key="vehiculo._id">
                    <td>{{ vehiculo.vehiculo }}</td>
                    <td>{{ vehiculo.idPlaca }}</td>
                    <td>{{ vehiculo.kilometraje }}</td>
                    <td>{{ vehiculo.soat }}</td>
                    <td>{{ vehiculo.tecnoMecanica}}</td>
                    <td>{{ vehiculo.tarjetaPropiedad}}</td>
                     <td>  <v-btn
                @click="eliminarVehiculo(usuario._id)"
              
                x-small
                color="secondary"
                rounded
                
               
                dark
                >Eliminar</v-btn
              >
              <v-btn
                @click="btnActualizar(vehiculo._id,vehiculo.vehiculo,vehiculo.idPlaca,vehiculo.kilometraje,vehiculo.soat,vehiculo.tecnoMecanica,vehiculo.tarjetaPropiedad)"
              
                x-small
                color="secondary"
                rounded
               
                dark
                >Actualizar</v-btn
              >
            </td>
                        </tr>
                        
                    </tbody>
                </table>
            <div class="clearfix">
                <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                <ul class="pagination">
                    <li class="page-item disabled"><a href="#">Previous</a></li>
                    <li class="page-item active"><a href="#" class="page-link">1</a></li>
                    <li class="page-item"><a href="#" class="page-link">2</a></li>
                    <li class="page-item "><a href="#" class="page-link">3</a></li>
                    
                    <li class="page-item"><a href="#" class="page-link">Next</a></li>
                </ul>
            </div>
        </div>
    </div>
</div> 
<div class="container1">
<div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                             <h3 class="register-heading">Agregrar Vehiculo</h3>
                        <img src="../../assets/logo1.png" alt=""/>
                    
                        
                    </div>
                    <div class="col-md-9 register-right">
                        
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                               
                   
                              
    <v-form ref="form" v-model="valid" lazy-validation>
     <v-text-field
        v-model="vehiculo"
        
        :rules="vehiculoRules"
        label="Vehiculo"
        
        required
      ></v-text-field>
      <v-text-field
        v-model="idPlaca"
       
        :rules="idPlacaRules"
        label="Placa"
        required
      ></v-text-field>

      <v-text-field
        v-model="kilometraje"
        
        :rules="kilometrajeRules"
        label="Km"
        required
      ></v-text-field>

      <v-text-field
        v-model="soat"
       type="date"
        :rules="soatRules"
        label="Fecha Soat"
        required
      ></v-text-field>
      <v-text-field
        v-model="tecnoMecanica"
        type="date"
        :rules="tecnoMecanicaRules"
        label="Tecnomecanica"
        
        required
      ></v-text-field>
      <v-text-field
        v-model="tarjetaPropiedad"
        
        :rules="tarjproRules"
        label="Tarjeta de Propiedad"
        
        required
      ></v-text-field>
      

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

       <v-btn v-if="id==null" color="primary" class="btnRegister" @click="insertarVehiculo()">Agregar</v-btn>



      <v-btn v-if="id!=null" color="primary" class="btnRegister" @click="actualizarVehiculo(id)"> Actualizar </v-btn>

      <v-btn v-if="id!=null" color="error" class="btnRegister" v-on:click="btnCancelar"> Cancelar </v-btn>

      <v-btn :disabled="!valid" color="success" class="btnRegister" @click="validate">
        Validar
      </v-btn>

      <v-btn color="error" class="btnRegister" @click="reset"> Limpiar </v-btn>

      
    </v-form>
     
                              
                        
                    

      
     
      
                       
      
     
      


     

     

                        
                           
                          
                        
                           
                           
                   
                </div>
            </div>
        </div>

    </div>	
</div>	




</div>
<v-footer class="footer1" height="90px" width="100%" color="#444343">
  
    <v-card-text class="py-2 white--text text-center">
      <p style="color:white"> {{ new Date().getFullYear() }} — TEN TRANSPORTES. Todos los derechos reservados</p>
    </v-card-text>
    
</v-footer>		                            

  
    
       

</div>
 
</template>

<script>
import store from "../store/index.js";





export default {
 
  data: () => ({
    valid: true,
    vehiculo: '',
    vehiculoRules: [
      v => !!v || 'obligatorio',
      v => (v && v.length <= 12) || 'Name must be less than 12 characters',
    ],
    idPlaca: "",
    idPlacaRules: [
      v => !!v || 'obligatorio',
      v => (v && v.length <= 12) || 'Name must be less than 12 characters',
    ],
    soat: "",
    soatRules: [
      v => !!v || 'obligatorio',
      v => (v && v.length <= 20) || 'Name must be less than 20 characters',
    ],
    tarjetaPropiedad: "",
    tarjproRules: [
      v => !!v || 'obligatorio',
      v => (v && v.length <= 20) || 'Name must be less than 20 characters',
    ],
    tecnoMecanica: "",
    tecnoMecanicaRules: [
      v => !!v || 'obligatorio',
      v => (v && v.length <= 20) || 'Name must be less than 20 characters',
    ],
    checkbox: false,
    id:null,
   
  
  }),
  methods: {
  eliminarVehiculo(id) {
      let obj = { id }; 
      store.dispatch("deleteVehicles", obj).then(() => {
        store.dispatch("getVehicles");
      });
    },
    insertarVehiculo(){
      let obj = { vehiculo: this.vehiculo,
                  idPlaca: this.idPlaca, 
                  kilometraje: this.kilometraje, 
                  soat: this.soat,
                  tecnoMecanica: this.tecnoMecanica,
                  tarjetaPropiedad: this. tarjetaPropiedad
                  };
      store.dispatch("setVehicles", obj).then(() => {
        store.dispatch("getVehicles");
      });
      this.$refs.form.reset();
    },
    actualizarVehiculo(id){
      let obj = { id: id,
                  vehiculo: this.vehiculo,
                  idPlaca: this.idPlaca, 
                  kilometraje: this.kilometraje, 
                  soat: this.soat,
                  tecnoMecanica: this.tecnoMecanica,
                  tarjetaPropiedad: this. tarjetaPropiedad  };
      store.dispatch("updateVehicles", obj).then(() => {
        store.dispatch("getVehicles");
        this.id = null;
      });
      this.$refs.form.reset();
    },
   
     
      btnActualizar(id, vehiculo, idPlaca, kilometraje, soat, tecnoMecanica, tarjetaPropiedad){
      this.id = id;
      this.vehiculo = vehiculo;
      this.idPlaca = idPlaca; 
      this.kilometraje = kilometraje; 
      this.soat = soat; 
      this.tecnoMecanica=tecnoMecanica;
      this.tarjetaPropiedad = tarjetaPropiedad;
     
      
    },
    btnCancelar(){
      this.id = null;
      this.$refs.form.reset();
    },

    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  created: () => {
    //accede a las acciones del store
    
    store.dispatch("getVehicles");
  },
  computed: {
   
    vehicles: () => {
      return store.state.vehicles;
    },
  },
};





</script>

<style>

body {
   
  
    font-family: 'Varela Round', sans-serif;
    font-size: 13px;
}
.table-responsive {
    margin:0px 0;
}
.table-wrapper {
    margin: 5px;
    min-width: 1000px;
    background: rgb(226, 223, 223);
    padding: 20px 25px;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
   
    left: 280px;
  position: absolute;
    top: 100px;
}
.table-title {
    padding-bottom: 15px;
    background: #044970;
    color: #fff;
    padding: 16px 30px;
    margin: -20px -25px 10px;
    border-radius: 3px 3px 0 0;
}
.table-title h2 {
    margin: 5px 0 0;
    font-size: 24px;
}
.table-title .btn {
    color: #566787;
    float: right;
    font-size: 13px;
    background: #fff;
    border: none;
    min-width: 50px;
    border-radius: 2px;
    border: none;
    outline: none !important;
    margin-left: 10px;
}
.table-title .btn:hover, .table-title .btn:focus {
    color: #566787;
    background: #f2f2f2;
}
.table-title .btn i {
    float: left;
    font-size: 21px;
    margin-right: 5px;
}
.table-title .btn span {
    float: left;
    margin-top: 2px;
}
table.table tr th, table.table tr td {
    border-color: #e9e9e9;
    padding: 12px 15px;
    vertical-align: middle;
}
table.table tr th:first-child {
    width: 60px;
}
table.table tr th:last-child {
    width: 100px;
}
table.table-striped tbody tr:nth-of-type(odd) {
    background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
    background: #f5f5f5;
}
table.table th i {
    font-size: 13px;
    margin: 0 5px;
    cursor: pointer;
}	
table.table td:last-child i {
    opacity: 0.9;
    font-size: 22px;
    margin: 0 5px;
}
table.table td a {
    font-weight: bold;
    color: #566787;
    display: inline-block;
    text-decoration: none;
}
table.table td a:hover {
    color: #044970;
}
table.table td a.settings {
    color: #044970;
}
table.table td a.delete {
    color: #F44336;
}
table.table td i {
    font-size: 19px;
}
table.table .avatar {
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
}
.status {
    font-size: 30px;
    margin: 2px 2px 0 0;
    display: inline-block;
    vertical-align: middle;
    line-height: 10px;
}
.text-success {
    color: #10c469;
}
.text-info {
    color: #62c9e8;
}
.text-warning {
    color: #FFC107;
}
.text-danger {
    color: #ff5b5b;
}
.pagination {
    float: right;
    margin: 0 0 5px;
}
.pagination li a {
    border: none;
    font-size: 13px;
    min-width: 30px;
    min-height: 30px;
    color: #999;
    margin: 0 2px;
    line-height: 30px;
    border-radius: 2px !important;
    text-align: center;
    padding: 0 6px;
}
.pagination li a:hover {
    color: #666;
}	
.pagination li.active a, .pagination li.active a.page-link {
    background: #044970;
}
.pagination li.active a:hover {        
    background: #044970;
}
.pagination li.disabled i {
    color: #ccc;
}
.pagination li i {
    font-size: 16px;
    padding-top: 6px
}
.hint-text {
    float: left;
    margin-top: 10px;
    font-size: 13px;
}


    
    
   
  



.container2{
    left: 15px;
      position: relative;
      top: 110px;
      width: 1050px;
    
    
    }
    .our-team {
      padding: 30px 0 40px;
      
      background-color: #f7f5ec;
      text-align: center;
      overflow: hidden;
      position: relative;
    }
    
    .our-team .picture {
      display: inline-block;
      height: 130px;
      width: 130px;
      margin-bottom: 50px;
      z-index: 1;
      position: relative;
    }
    
    .our-team .picture::before {
      content: "";
      width: 100%;
      height: 0;
      border-radius: 50%;
      background-color: #044970;
      position: absolute;
      bottom: 135%;
      right: 0;
      left: 0;
      opacity: 0.9;
      transform: scale(3);
      transition: all 0.3s linear 0s;
    }
    
    .our-team:hover .picture::before {
      height: 100%;
    }
    
    .our-team .picture::after {
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #ED6911;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    
    .our-team .picture img {
      width: 100%;
      height: auto;
      border-radius: 50%;
      transform: scale(1);
      transition: all 0.9s ease 0s;
    }
    
    .our-team:hover .picture img {
      box-shadow: 0 0 0 14px #f7f5ec;
      transform: scale(0.7);
    }
    
    .our-team .title {
      display: block;
      font-size: 15px;
      color: #044970;
      text-transform: capitalize;
    }
    
    .name  {
    color: #044970;
    }
    
.container1 {
  left: 50px;
    top:600px;
    position: absolute;
}
.register{
    background: -webkit-linear-gradient(left, #d1d1d1, rgb(170, 171, 172));
    margin-top: 5%;
    padding: 3%;
     margin-bottom: 0%;
}
.register-left{
    text-align: center;
    color: #fff;
    margin-top: 4%;
}
.register-left input{
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    width: 60%;
    background: #f8f9fa;
    font-weight: bold;
    color: #383d41;
    margin-top: 30%;
    margin-bottom: 3%;
    cursor: pointer;
}
.register-right{
    background: #f8f9fa;
   
    border-bottom-left-radius: 10% 50%;
}
.register-left img{
    margin-top: 50%;
    margin-bottom: 5%;
    width: 60%;
    -webkit-animation: mover 2s infinite  alternate;
    animation: mover 1s infinite  alternate;
}
@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
.register-left p{
    font-weight: lighter;
    padding: 12%;
    margin-top: -9%;
}
.register .register-form{
    padding: 10%;
    margin-top: 10%;
}
.btnRegister{
  
    float: right;
    margin-top: 10%;
    border: none;
    border-radius: 1.5rem !important;
    padding: 2% !important;
    background: rgba(4,73,112) !important;
    color: #fff !important;
    font-weight: 600 !important;
    width: 20%;
    cursor: pointer !important;
}

.register .nav-tabs{
    margin-top: 3%;
    border: none;
   
    border-radius: 1.5rem;
    width: 28%;
    float: right;
}
.register .nav-tabs .nav-link{
    padding: 2%;
    height: 34px;
    font-weight: 600;
    color: #fff;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
}
.register .nav-tabs .nav-link:hover{
    border: none;
}
.register .nav-tabs .nav-link.active{
    width: 200px;
    color: rgba(237,105,17);
    border: 2px solid rgba(4,73,112);
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
}
.register-heading{
    text-align: center;
    margin-top: 8%;
    margin-bottom: -15%;
    color: rgba(4,73,112);
}

.footer1 {
  top: 1050px;
    bottom: 0px;
    background-color: #444343;
    width: 100% !important;
    position: relative !important;
  }
</style>