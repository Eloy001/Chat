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
        $_POST["mensaje"],
        $_POST["fecha"],
        $_POST["hora"]
     ];
      function insertar($BD,$datos){
            if($_POST["mensaje"]==""){
                echo ("por favor escriba un mensaje");
            }else{
        $q = "INSERT INTO chat (Nombre ,Mensaje, diaymes, hora_minutos ) Values ('".$datos[0] ."' ,  '" .$datos[1] ."' , '" .$datos[2] ."' , '" .$datos[3] ."' ) ";
        $stmt = $BD->query($q);
        return true;
    }
}
    if(insertar($BD,$datos)){
        echo ("ta bien");
    }
?>