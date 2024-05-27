<?php

require_once '../modelo/libroDAO.php';

$funcion = $_GET['funcion'];

switch ($funcion) {

    case "agregar";
        agregar();
        break;

    case "eliminar";
        eliminar();
        break;

    case "obtener";
        obtener();
        break;
    case "editar";
        editar();
        break;
}
function obtener()
{
    $resultado = (new usuario())->obtener();
    echo json_encode($resultado);
}
function agregar()
{
    $ci = $_POST['ci'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $resultado = (new usuario())->agregar($ci, $nombre, $apellido);
    echo json_encode($resultado);
}
function eliminar()
{
    $ci = $_POST['ci'];
    $resultado = (new usuario())->eliminar($ci);
    echo json_encode($resultado);
}


function editar()
{
    $id = $_POST['id'];
    $ci = $_POST['ci'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];

    $resultado = (new usuario())->editar($id, $ci, $nombre, $apellido);
    echo json_encode($resultado);
}
