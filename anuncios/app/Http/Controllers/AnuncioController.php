<?php

namespace App\Http\Controllers;
use App\DAO\AnuncioDAO;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class AnuncioController extends Controller
{

    public function __construct() { }

    

    public function listar()
    {   
        $dao = new AnuncioDAO();
        $res = $dao -> listar();
        if (!empty($res)) {
            return response() -> json($res, 200);
        }else{
            return response() -> json([], 204);
        }
    }


    public function consultar($id)
    {
        $dao = new AnuncioDAO();
        $res = $dao -> consultar($id);
        if (!empty($res)) {
            return response() -> json($res, 200);
        }else{
            return response() -> json([],204);
        }
    } 
    

    public function insertar(Request $request)
    {
        $request = $request -> json() -> all();
        $data = array(
            'nombre' => $request['nombre'],     
            'descripcion' => $request['descripcion'], 
            'precio' => $request['precio'], 
            'fecha' => $request['fecha'], 
            'idUsuario' => $request['idUsuario'],  
            'eliminado' =>  0,
        );
        $dao = new AnuncioDAO();
        $res = $dao -> insertar($data);
        if ($res === true) {
            return  response()-> json(
                array('data' => $res, 'message' => config('constants.messages.3.message')),
                config('constants.messages.3.code'));
        }else{
            return response() -> json($res, 400);
        }   
    }

    /**
     *  Actualizar o renovar una eps
     */

    public function actualizar(Request $request)
    {
        $request = $request -> json() -> all();
        $id = $request['id'];
        $data = array(
            'nombre' => $request['nombre'],     
            'descripcion' => $request['descripcion'], 
            'precio' => $request['precio'], 
            'fecha' => $request['fecha'], 
            'idUsuario' => $request['idUsuario'],  
            'eliminado' =>  0,
        );
        $dao = new AnuncioDAO();
        $res = $dao -> actualizar($id, $data);
        if ($res === true) {
            return response()-> json(
                array('data' => $res, 'message' => config('constants.messages.3.message')),
                config('constants.messages.3.code'));
        }else{
            return response() -> json($res, 400);
        }
    }

    /**
     *  InHabilitar una eps
     */
    public function eliminar($id)
    {
        $data = array(
            'eliminado' => 1
        );
        $dao = new AnuncioDAO();
        $res = $dao -> eliminar($id, $data);
        if ($res === true) {
            return response() -> json($res, 201);
        }else{
            return response() -> json($res, 400);
        }
    }
}
