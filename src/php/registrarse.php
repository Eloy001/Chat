<?php

$dominioPermitido="http://localhost:3000";
header("Access-Control-Allow-Origin: $dominioPermitido");
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");

$user="root";
$password="";
$base_datos="chat";
             
    try{ 
        $BD= new PDO( 'mysql:host=localhost;dbname='.$base_datos, $user, $password);
        
    }catch(PDOException $e){
        print "Error." .$e->getMessage() . "<br>";
    }
      $conect=$BD->query("USE ".$base_datos);
      if(!$conect){
          exit("No se ha podido.");
      }
$datos=[
   $_POST["usuario"],
   $_POST["password"]
];

 if(getRowsNumber($BD,$datos)!= 0){
        echo("Usuario ya registrado");
        
    }else{
        insertar($BD,$datos);
    }
    
function getRowsNumber($BD,$datos){

    $q = "SELECT count(*) from usuarios where nombre ='".$datos[0] ."' AND contraseña= '".$datos[1]."'";
    $stmt = $BD->query($q);
    $count = $stmt-> fetchColumn();
    return $count;
}

function insertar($BD,$datos){
    $q = "INSERT INTO usuarios (Nombre ,Contraseña) Values ('".$datos[0] ."' ,  '" .$datos[1] ."' ) ";
    $stmt = $BD->query($q);
}
?>