<?php

namespace App\Http\Controllers;
use App\DAO\UsuarioDAO;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class UsuarioController extends Controller
{

    public function __construct() { }

    

    public function listar()
    {   
        $dao = new UsuarioDAO();
        $res = $dao -> listar();
        if (!empty($res)) {
            return response() -> json($res, 200);
        }else{
            return response() -> json([], 204);
        }
    }


    public function consultar($id)
    {
        $dao = new UsuarioDAO();
        $res = $dao -> consultar($id);
        if (!empty($res)) {
            return response() -> json($res, 200);
        }else{
            return response() -> json([],204);
        }
    } 
    

    public function insertar(Request $request)
    {
        $clave = $request['clave'];
        $claveEncriptada = ENCRIPTAR($clave);
        $request = $request -> json() -> all();
        $data = array(
            'nombre' => $request['nombre'],   
            'correo' => $request['correo'],
            'clave' => $claveEncriptada,
            'rol' => $request['rol'],
            'eliminado' =>  0,
        );
        $dao = new UsuarioDAO();
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
        $clave = $request['clave'];
        $claveEncriptada = ENCRIPTAR($clave);
        $data = array(
            'nombre' => $request['nombre'],   
            'correo' => $request['correo'],
            'clave' => $claveEncriptada,
            'rol' => $request['rol'],
            'eliminado' =>  0,
        );
        $dao = new UsuarioDAO();
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
        $dao = new UsuarioDAO();
        $res = $dao -> eliminar($id, $data);
        if ($res === true) {
            return response() -> json($res, 201);
        }else{
            return response() -> json($res, 400);
        }
    }
}
