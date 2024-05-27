<?php
function connection()
{
    $host = "localhost";
    $bd = "biblioteca";
    $usuario = "root";
    $password = "";
    $puerto = "3306";
    $mysqli = new mysqli($host, $usuario, $password, $bd, $puerto);
    return $mysqli;
}



/*
 if ($mysql->connect_error) {
    die("Connection failed: " . $mysql->connect_error);
}
echo "Connected successfully";
*/
