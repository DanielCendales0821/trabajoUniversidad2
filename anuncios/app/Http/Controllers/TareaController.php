<?php

namespace App\Http\Controllers;
use App\DAO\TareaDAO;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class TareaController extends Controller
{

    public function __construct() { }

    

    public function listar()
    {   
        $dao = new TareaDAO();
        $res = $dao -> listar();
        if (!empty($res)) {
            return response() -> json($res, 200);
        }else{
            return response() -> json([], 204);
        }
    }


    public function consultar($id)
    {
        $dao = new TareaDAO();
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
            'idrol' => $request['idrol'],     
            'idactividad' => $request['idactividad'], 
            'eliminado' =>  0,
        );
        $dao = new TareaDAO();
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
            'idrol' => $request['idrol'],     
            'idactividad' => $request['idactividad'], 
        );
        $dao = new TareaDAO();
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
        $dao = new TareaDAO();
        $res = $dao -> eliminar($id, $data);
        if ($res === true) {
            return response() -> json($res, 201);
        }else{
            return response() -> json($res, 400);
        }
    }
}
