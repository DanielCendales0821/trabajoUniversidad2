<?php

namespace App\Http\Controllers;
use App\Models\Eps;
use App\DAO\EpsDAO;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class EpsController extends Controller
{

    public function __construct() { }

    
    /**
     *  Listar las EPS
     */

    public function listar()
    {   
        $dao = new EpsDAO();
        $res = $dao -> listar();
        if (!empty($res)) {
            return response() -> json($res, 200);
        }else{
            return response() -> json([], 204);
        }
    }

    /**
     *  Consultar las EPS
     */

    public function consultar($id)
    {
        $dao = new EpsDAO();
        $res = $dao -> consultar($id);
        if (!empty($res)) {
            return response() -> json($res, 200);
        }else{
            return response() -> json([],204);
        }
    } 
    
    /**
     *  Insertar las EPS
     */

    public function insertar(Request $request)
    {
        $request = $request -> json() -> all();
        $data = array(
            'descripcion' => $request['descripcion'],
            'eliminado' =>  0,
        );
        $dao = new EpsDAO();
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
            'descripcion' => $request['descripcion'],
        );
        $dao = new EpsDAO();
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
        $dao = new EpsDAO();
        $res = $dao -> eliminar($id, $data);
        if ($res === true) {
            return response() -> json($res, 201);
        }else{
            return response() -> json($res, 400);
        }
    }
}
