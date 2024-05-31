<?php
require_once '../conexion/conexion.php';

class libro
{

    function obtener()
    {
        $connection = connection();
        $sql = "SELECT * FROM Usuario;";
        $respuesta = $connection->query($sql);
        $usuarios = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $usuarios;
    }
    public function agregar($ci, $nombre, $apellido){
        $sql = "INSERT INTO usuario VALUES($ci, '$nombre', '$apellido');";
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;
    }
    public function eliminar($ci){
        $sql = "DELETE FROM usuario WHERE ci= $ci;";
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;
    }

    public function editar($id, $ci, $nombre, $apellido){
        $sql = "UPDATE usuario SET ci='$ci', nombre='$nombre', apellido='$apellido'  WHERE ci='$id';";
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;
    }


}

?>
