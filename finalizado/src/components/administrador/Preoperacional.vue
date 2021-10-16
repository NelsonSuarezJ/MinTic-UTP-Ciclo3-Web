<template>
    

<div class="py-5" >
<div class="container-xl">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-5">
                        <h2>Reportes <b>Lista Preoperacional</b></h2>
                    </div>
                    
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        
                        <th>Nombre</th>						
                        <th>Vehiculo</th>
                        <th>Placa</th>
                        <th>Estado</th>
                        <th>Reporte</th>
                    </tr>
                </thead>
                <tbody>
                   
                   
                    <tr>
                       
                        <td> </td>
                        <td></td>                        
                        <td></td>
                        <td><span class="status text-success">&bull;</span> Active</td>
                        <td>
                           <span href="" class="material-icons">insert_drive_file</span>
                           
                        </td>
                    </tr>
                    <tr>
                        
                        <td> </td>
                        <td></td>                        
                        <td></td>
                        <td><span class="status text-success">&bull;</span> Active</td>
                        <td>
                           <span href="" class="material-icons">insert_drive_file</span>
                           
                        </td>
                    </tr>
                    <tr>
                        
                        <td> </td>
                        <td></td>                        
                        <td></td>
                        <td><span class="status text-success">&bull;</span> Active</td>
                        <td>
                           <span href="" class="material-icons">insert_drive_file</span>
                           
                        </td>
                    </tr>
                    <tr>
                        
                        <td> </td>
                        <td></td>                        
                        <td></td>
                        <td><span class="status text-success">&bull;</span> Active</td>
                        <td>
                           <span href="" class="material-icons">insert_drive_file</span>
                           
                        </td>
                    </tr>
                    <tr>
                        
                        <td> </td>
                        <td></td>                        
                        <td></td>
                        <td><span class="status text-success">&bull;</span> Active</td>
                        <td>
                           <span href="" class="material-icons">insert_drive_file</span>
                           
                        </td>
                    </tr>
                    <tr>
                        
                        <td> </td>
                        <td></td>                        
                        <td></td>
                        <td><span class="status text-success">&bull;</span> Active</td>
                        <td>
                           <span href="" class="material-icons">insert_drive_file</span>
                           
                        </td>
                    </tr>
                    <tr>
                      
                        <td> </td>
                        <td></td>                        
                        <td></td>
                        <td><span class="status text-success">&bull;</span> Active</td>
                        <td>
                           <span href="" class="material-icons">insert_drive_file</span>
                           
                        </td>
                    </tr>

                    <tr>
                        
                        <td> </td>
                        <td></td>                        
                        <td></td>
                        <td><span class="status text-success">&bull;</span> Active</td>
                        <td>
                           <span href="" class="material-icons">insert_drive_file</span>
                           
                        </td>
                    </tr>
                
                   <tr>
                        
                        <td> </td>
                        <td></td>                        
                        <td></td>
                        <td><span class="status text-success">&bull;</span> Active</td>
                        <td>
                           <span href="" class="material-icons">insert_drive_file</span>
                           
                        </td>
                    </tr>
                    
                </tbody>
            </table>
            <div class="clearfix">
                <div class="hint-text color-hint">Mostrando <b>10</b> de <b>25</b> entradas</div>
                <ul class="pagination">
                    <li class="page-item disabled"><a href="#">Previous</a></li>
                    <li class="page-item active"><a href="#" class="page-link">1</a></li>
                    <li class="page-item"><a href="#" class="page-link">2</a></li>
                    <li class="page-item "><a href="#" class="page-link">3</a></li>
                    <li class="page-item"><a href="#" class="page-link">4</a></li>
                    <li class="page-item"><a href="#" class="page-link">5</a></li>
                    <li class="page-item"><a href="#" class="page-link">Next</a></li>
                </ul>
            </div>
        </div>
    </div>
</div> 
</div>

</template>

<script>
import store from "../store/index.js";





export default {
created: () => {
    //accede a las acciones del store
    
    
    store.dispatch("getDrivers");
    store.dispatch("getVehicles");

  },
  computed: {
   
    
    
    drivers: () => {
      return store.state.drivers;
    },
    vehicles: () => {
      return store.state.vehicles;
    },
  },
};





</script>

<style>

body {
    color: #566787;
  
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
    top: 85px;
    position: absolute;
    left: 170px;
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
    color: #044970;
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

</style>