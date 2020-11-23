<?php

namespace App\DAO;

use App\Models\Anuncio;
use Illuminate\Database\QueryException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
class AnuncioDAO
{  

    function listar()
    {
        return Anuncio::where('eliminado',0)->get();
    }

    function consultar($id)
    {
        return Anuncio::find($id);
    }


    function insertar($data)
    {
        try {
            Anuncio::insert($data);
            return true;
        } catch (QueryException $e) {
            return $e;
        }
        
    }

    function actualizar($id, $data)
    {
        try {
            Anuncio::findOrFail($id) -> update($data);
            return true;
        } catch (ModelNotFoundException $e) {
            return $e;
        }
    }

    function eliminar($id, $data)
    {
        try {
            Anuncio::findOrFail($id) -> update($data);
            return true;
        } catch (ModelNotFoundException $e) {
            return $e;
        }
    }

}
