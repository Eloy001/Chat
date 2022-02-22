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

function Limpiar_chat($BD){
$q = "DELETE  FROM chat";
$borrar = $BD -> prepare($q);
$borrar -> execute();
return true;
}

Limpiar_chat($BD);

?>