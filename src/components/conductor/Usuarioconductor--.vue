<template>
<div>
        <div class="carrousel1">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active width:500px">
                    <img src="../../assets/banner.jpg" class="d-block w-100" alt="200x200">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/banner2.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/banner3.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

    <div class="preope">
     <div class="container tab-content py-5" id="pills-tabContent">
            
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <br>
                <h2 class="text-center">PROCESO SERVICIO Y MANTENIMIENTO DE FLOTA</h2>
                <p class="text-center fs-3">LISTA DE VERIFICACIÓN DEL ESTADO DEL VEHICULO</p>
                <br>
                <hr />

                <div>
                <p class="fw-bold">Informacion del Vehiculo</p>

                <div class="row row-cols-md-2 row-cols-1">
                    <div class="col mb-3">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="placa" placeholder="placa">
                            <label for="placa">No. de la placa del vehiculo</label>
                        </div>
                    </div>
                    <div class="col mb-3">
                        <div class="form-floating">
                            <input type="number" class="form-control" id="Kilometraje" placeholder="Kilometraje">
                            <label for="Kilometraje">Kilometraje</label>
                        </div>
                    </div>
                </div>
            </div> 
                
        </div> 
        <div class="row row-cols-md-2 row-cols-1">
                    <div class="col mb-3">
                        <div class="form-floating">
                            <input type="date" class="form-control" id="tecno" placeholder="tecno">
                            <label for="tecno">Vencimineto Revisión Tecnico-Mecanica</label>
                        </div>
                    </div>
                    <div class="col mb-3">
                        <div class="form-floating">
                            <input type="date" class="form-control" id="soat" placeholder="soat">
                            <label for="soat">Vencimineto del SOAT</label>
                        </div>
                        </div>
                    </div>
  
                 <div class="row row-cols-md-2 row-cols-1">
             
                        <div class="form-floating">
                            <input type="text" class="form-control" id="tarjeta" placeholder="tarjeta">
                            <label for="tarjeta">No. de tarjeta de propiedad</label>
                        </div>
                        
                   </div>
                   <br> 
                   <hr>
                   <p class="fw-bold">Partes del Vehiculo</p>
                    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
                   
                  
                    <div>
                        <p>Luces delanteras:</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="ld" id="ldpe" autocomplete="off" checked>
                            <label class="btn btn-outline-success" for="ldpe">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="ld" id="ldrm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="ldrm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="ld" id="ldrr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="ldrr">Requiere reparacion</label>
                     
                         </div> 
                 
                    </div>
                 
                        <div>
                            <p>Luces traseras:</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="lt" id="ltpe" autocomplete="off" checked>
                            <label class="btn btn-outline-success" for="ltpe">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="lt" id="ltrm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="ltrm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="lt" id="ltrr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="ltrr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div>
                        <p>Brazos limpia brisas:</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="blb" id="blbpe" autocomplete="off" checked>
                            <label class="btn btn-outline-success" for="blbpe">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="blb" id="blbrm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="blbrm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="blb" id="blbrr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="blbrr">Requiere reparacion</label>
                        </div>
                    </div>
                  
                    <div>
                          <br>
                        <p>Placa del vehiculo:</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="pdv" id="pdvpe" autocomplete="off" checked>
                            <label class="btn btn-outline-success" for="pdvpe">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="pdv" id="pdvrm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="pdvrm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="pdv" id="pdvrr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="pdvrr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div>
                          <br>
                        <p>Tapa de gasolina:</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="tdg" id="tdgpe" autocomplete="off" checked>
                            <label class="btn btn-outline-success" for="tdgpe">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="tdg" id="tdgrm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="tdgrm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="tdg" id="tdgrr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="tdgrr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div>
                          <br>
                        <p>Apoya cabezas:</p>

                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="apca" id="apcape" autocomplete="off" checked>
                            <label class="btn btn-outline-success" for="apcape">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="apca" id="apcarm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="apcarm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="apca" id="apcarr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="apcarr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div>
                          <br>
                        <p>Pito o Bocina:</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="bocina" id="bocinape" autocomplete="off"
                                checked>
                            <label class="btn btn-outline-success" for="bocinape">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="bocina" id="bocinarm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="bocinarm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="bocina" id="bocinarr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="bocinarr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div> <br>
                        <p>Frenos:</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="frenos" id="frenospe" autocomplete="off"
                                checked>
                            <label class="btn btn-outline-success" for="frenospe">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="frenos" id="frenosrm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="frenosrm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="frenos" id="frenosrr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="frenosrr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div> <br>
                        <p>Freno de emergencia:</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="fde" id="fdepe" autocomplete="off" checked>
                            <label class="btn btn-outline-success" for="fdepe">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="fde" id="fderm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="fderm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="fde" id="fderr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="fderr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div>
                          <br>
                        <p>Espejos retrovisores:</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="retro" id="retrope" autocomplete="off" checked>
                            <label class="btn btn-outline-success" for="retrope">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="retro" id="retrorm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="retrorm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="retro" id="retrorr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="retrorr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div> <br>
                        <p>Extintor presurizado y vigente:</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="ext" id="extpe" autocomplete="off" checked>
                            <label class="btn btn-outline-success" for="extpe">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="ext" id="extrm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="extrm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="ext" id="extrr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="extrr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div> <br>
                        <p>Linterna / Lampara para bateria:</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="linterna" id="linternape" autocomplete="off"
                                checked>
                            <label class="btn btn-outline-success" for="linternape">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="linterna" id="linternarm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="linternarm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="linterna" id="linternarr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="linternarr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div>
                          <br>
                        <p>Banderolas o triangulos:</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="trian" id="trianpe" autocomplete="off" checked>
                            <label class="btn btn-outline-success" for="trianpe">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="trian" id="trianrm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="trianrm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="trian" id="trianrr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="trianrr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div> <br>
                        <p>Gato hidraulico o mecanico:</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="gato" id="gatope" autocomplete="off" checked>
                            <label class="btn btn-outline-success" for="gatope">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="gato" id="gatorm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="gatorm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="gato" id="gatorr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="gatorr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div> <br>
                        <p>Palanca del gato:</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="pdg" id="pdgpe" autocomplete="off" checked>
                            <label class="btn btn-outline-success" for="pdgpe">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="pdg" id="pdgrm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="pdgrm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="pdg" id="pdgrr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="pdgrr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div>
                          <br>
                        <p>Herramientas, alicate, destornillador, llaves, hombresolo:</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="herra" id="herrape" autocomplete="off" checked>
                            <label class="btn btn-outline-success" for="herrape">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="herra" id="herrarm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="herrarm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="herra" id="herrarr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="herrarr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div > <br>
                        <p>Llantas de repuesto:</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="llant" id="llantpe" autocomplete="off" checked>
                            <label class="btn btn-outline-success" for="llantpe">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="llant" id="llantrm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="llantrm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="llant" id="llantrr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="llantrr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div> <br>
                        <p>Presion de los 5 neumaticos:</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="presion" id="presionpe" autocomplete="off"
                                checked>
                            <label class="btn btn-outline-success" for="presionpe">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="presion" id="presionrm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="presionrm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="presion" id="presionrr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="presionrr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div>
                          <br>
                        <p>Botiquin:</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="boti" id="botipe" autocomplete="off" checked>
                            <label class="btn btn-outline-success" for="botipe">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="boti" id="botirm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="botirm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="boti" id="botirr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="botirr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div> <br>
                        <p>Sillas</p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="sillas" id="sillaspe" autocomplete="off"
                                checked>
                            <label class="btn btn-outline-success" for="sillaspe">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="sillas" id="sillasrm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="sillasrm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="sillas" id="sillasrr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="sillasrr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div > <br>
                        <p>Cinturones de seguridad: </p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="cintu" id="cintupe" autocomplete="off" checked>
                            <label class="btn btn-outline-success" for="cintupe">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="cintu" id="cinturm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="cinturm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="cintu" id="cinturr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="cinturr">Requiere reparacion</label>
                        </div>
                    </div>
                </div>
                <br>
                <hr>
                <p class="fw-bold">Partes del Vehiculo</p>
                    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
                   
                  
                    <div>
                       <p>Nivel de agua del radiador: </p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="radiad" id="radiadpe" autocomplete="off"
                                checked>
                            <label class="btn btn-outline-success" for="radiadpe">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="radiad" id="radiadrm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="radiadrm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="radiad" id="radiadrr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="radiadrr">Requiere reparacion</label>
                     
                         </div> 
                 
                    </div>
                 
                        <div>
                           <p>Nivel de aceite del motor: </p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="motor" id="motorpe" autocomplete="off" checked>
                            <label class="btn btn-outline-success" for="motorpe">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="motor" id="motorrm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="motorrm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="motor" id="motorrr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="motorrr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div>
                         <p>Nivel de liquido de frenos: </p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="liqfre" id="liqfrepe" autocomplete="off"
                                checked>
                            <label class="btn btn-outline-success" for="liqfrepe">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="liqfre" id="liqfrerm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="liqfrerm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="liqfre" id="liqfrerr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="liqfrerr">Requiere reparacion</label>
                        </div>
                    </div>
                    <div> <br>
                       <p>Nivel del liquido de direccion hidraulica: </p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="liqhidra" id="liqhidrape" autocomplete="off"
                                checked>
                            <label class="btn btn-outline-success" for="liqhidrape">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="liqhidra" id="liqhidrarm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="liqhidrarm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="liqhidra" id="liqhidrarr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="liqhidrarr">Requiere reparacion</label>
                        </div>
                 
                    </div>
                 
                        <div> <br>
                            <p>Nivel del liquido de embrage: </p>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="embrage" id="embragepe" autocomplete="off"
                                checked>
                            <label class="btn btn-outline-success" for="embragepe">Perfecto estado</label>

                            <input type="radio" class="btn-check" name="embrage" id="embragerm" autocomplete="off">
                            <label class="btn btn-outline-warning" for="embragerm">Requiere mantenimiento</label>

                            <input type="radio" class="btn-check" name="embrage" id="embragerr" autocomplete="off">
                            <label class="btn btn-outline-danger" for="embragerr">Requiere reparacion</label>
                        </div>
                    </div>
                    
            <div> 

                
            </div>
            
            </div> <br>
             <hr>  
            <div class="row">
                    <p>¿Va a transportar en el vehiculo productos quimicos peligrosos? </p>
                    <div class="col-12 mb-3">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">
                                Si
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                checked>
                            <label class="form-check-label" for="flexRadioDefault2">
                                No
                            </label>
                        </div>
                    </div>
                    <div class="col mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Observaciones:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col mb-3">
                        <button type="submit" class="btn1 btn1-primary btn-lg">Enviar</button>
                    </div>
                </div>
            
        </div>
        
   </div>

               
</div>





</template>

<style scoped>
.carrousel1 {
    position: relative;
    top: 65px;
}

.preope {
    position: relative;
    top: 50px;
}

.btn {
  width: 125px !important;;
}

.btn1 {
 background-color: rgb(61, 98, 119) !important;
 color: aliceblue;
}

.btn1:hover {
 background-color: #F25116 !important;
 color: aliceblue;
 
}
</style>