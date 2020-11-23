<?php

namespace App\DAO;

use App\Models\Usuario;
use Illuminate\Database\QueryException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
class UsuarioDAO
{  

    function listar()
    {
        return Usuario::where('eliminado', 0)
        ->with('rol')
        ->get();
    }

    function consultar($id)
    {
        return Usuario::where('eliminado', 0)
            ->with('rol')
            ->where('id', $id)
            ->first();
    }


    function insertar($data)
    {
        try {
            Usuario::insert($data);
            return true;
        } catch (QueryException $e) {
            return $e;
        }
        
    }

    function actualizar($id, $data)
    {
        try {
            Usuario::findOrFail($id) -> update($data);
            return true;
        } catch (ModelNotFoundException $e) {
            return $e;
        }
    }

    function eliminar($id, $data)
    {
        try {
            Usuario::findOrFail($id) -> update($data);
            return true;
        } catch (ModelNotFoundException $e) {
            return $e;
        }
    }

}
