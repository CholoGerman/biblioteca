<?php
require_once '../conexion/conexion.php';

class libro
{

    function obtener()
    {
        $connection = connection();
        $sql = "SELECT * FROM libro;";
        $respuesta = $connection->query($sql);
        $libros = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $libros;
    }
    public function agregar($nombre, $fecha, $precio){
        $sql = "INSERT INTO libro VALUES(null,'$nombre', $fecha, $precio);";
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;
        if($respuesta){
            return new Respuesta(true, "Procedimiento realizado", $respuesta);
        } else{
            return new Respuesta(false, "Error al realizar el procedimiento",$respuesta);
         }

    }
    public function eliminar($id)
    {
        $sql = "DELETE FROM libro WHERE id= $id;";
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;
    }

    public function editar($id, $nombre, $fecha, $precio)
    {
        $sql = "UPDATE libro SET nombre='$nombre', fecha=$fecha, precio=$precio  WHERE id='$id';";
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;
    }

    function filtrar($modo)
    {
        $connection = connection();
        if ($modo == 'fecha_asc') {
            $sql = "SELECT * FROM libro ORDER BY fecha ASC;";
        } else if ($modo == 'fecha_desc') {
            $sql = "SELECT * FROM libro ORDER BY fecha DESC;";

        }else if ($modo == 'precio_asc') {
            $sql = "SELECT * FROM libro ORDER BY precio ASC;";
        } else if ($modo == 'precio_desc') {
            $sql = "SELECT * FROM libro ORDER BY precio DESC;";

        }



        $respuesta = $connection->query($sql);
        $libros = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $libros;


    }
}

?>