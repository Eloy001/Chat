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

    $p = "SELECT * From chat Order by ID asc";

    $usuarios = array();

    foreach($BD->query($p)as $fila){

        $id=$fila['id'];
        $Nombre=$fila['Nombre'];
        $Mensaje=$fila['Mensaje'];
        $fecha=$fila['diaymes'];
        $hora=$fila['hora_minutos'];

        $usuarios[] = array('id'=>$id, 'Nombre'=>$Nombre, 'Mensaje'=>$Mensaje, 'diaymes'=>$fecha , 'hora_minutos'=>$hora);
    }

        echo json_encode($usuarios);

?>