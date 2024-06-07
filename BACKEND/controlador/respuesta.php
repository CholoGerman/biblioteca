<?php

class Respuesta{

public $success;
public $mensaje;
public $data;

function __construct($success,$mensaje,$data){
    $this->success = $success;
    $this->mensaje = $mensaje;
    $this->data = $data;
    
}

}
/* 
Metodo utilizado para inicializar las propiedades de un objeto o realizar tareas necesarias antes de que el
objeto este listo para si uso.
Un metodo "__construct" se ejecuta automaticamente cada vez que creamos un nuevo objeto de esa clase utilizando el operador "new"
*/
