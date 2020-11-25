<?php

namespace App\DAO;

use App\Models\Tarea;
use Illuminate\Database\QueryException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
class TareaDAO
{  

    function listar()
    {
        return Tarea::where('eliminado', 0)
        ->with('rol')
        ->with('actividad')
        ->get();
    }

    function consultar($id)
    {
        return Tarea::where('eliminado', 0)
        ->with('rol')
        ->with('actividad')
        ->where('id', $id)
        ->first();
    }


    function insertar($data)
    {
        try {
            Tarea::insert($data);
            return true;
        } catch (QueryException $e) {
            return $e;
        }
        
    }

    function actualizar($id, $data)
    {
        try {
            Tarea::findOrFail($id) -> update($data);
            return true;
        } catch (ModelNotFoundException $e) {
            return $e;
        }
    }

    function eliminar($id, $data)
    {
        try {
            Tarea::findOrFail($id) -> update($data);
            return true;
        } catch (ModelNotFoundException $e) {
            return $e;
        }
    }

}
