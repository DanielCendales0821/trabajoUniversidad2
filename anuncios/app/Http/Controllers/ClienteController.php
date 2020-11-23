<?php

namespace App\Http\Controllers;
use App\Models\Cliente;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ClienteController extends Controller
{

    public function __construct() { }

    /**
     *  Listar los roles
     */
    public function listar()
    {   
        $result = Cliente::where('eliminado', 0)
        ->with('eps')
        ->with('genero')
        ->with('historias')
        ->with('diagnosticos')
        ->with('medidas')
        ->get();
        if (count($result) > 0) {
            return response() -> json(
                array('data' => $result, 'message' => config('constants.messages.3.message')),
                config('constants.messages.3.code')
            );
        }else{
            return response() -> json(
                array('data' => $result, 'message' => config('constants.messages.4.message')),
                config('constants.messages.4.code')
            );
        }
    }

    /**
     *  Consultar los roles
     */
    public function consultar($id)
    {
        try{
            $result = Cliente::where('eliminado', 0)
            ->with('eps')
            ->with('genero')
            ->with('diagnosticos')
            ->with('medidas')
            ->with('historias')
            ->where('id', $id)
            ->first();
            return response()-> json(
                array('data' => $result, 'message' => config('constants.messages.3.message')),
                config('constants.messages.3.code'));
        }catch (Exception $ex){
            return response() -> json(
                array('data' => $result, 'message' => config('constants.messages.4.message')),
                config('constants.messages.4.code')
            );
        }
    }

    /**
     *  Agregar un nuevo rol
     */
    public function insertar(Request $request)
    {
        $data = array(
            'nombres' => $request['nombres'],
            'apellidos'=> $request['apellidos'],
            'fecha_nacimiento'=> $request['fecha_nacimiento'],
            'fecha_entrada'=> $request['fecha_entrada'],
            'fecha_final'=> $request['fecha_final'],
            'numero' => $request['numero'],
            'celular' => $request['celular'],
            'correo'=> $request['correo'],
            'nombre_familiar'=> $request['nombre_familiar'],
            'celular_familiar'=> $request['celular_familiar'],
            'alergias' => $request['alergias'],
            'descripcion_alergias'=> $request['descripcion_alergias'],
            'limitaciones' => $request['limitaciones'],
            'descripcion_limitaciones'=> $request['descripcion_limitaciones'],
            'tipo_documento'=> $request['tipo_documento'], 
            'pago' => $request['pago'],
            'genero'=> $request['genero'], 
            'eps' => $request['eps'],
            'eliminado'=> 0
        );
        try {
            Cliente::insert($data);
            return response() -> json(
                array('data' => [], 'message' => config('constants.messages.5.message')),
                config('constants.messages.5.code')
            );
        } catch (QueryException $e) {
            return response() -> json(
                array('data' => $e, 'message' => config('constants.messages.2.message')),
                config('constants.messages.2.code')
            );
        }
    }

    /**
     *  Actualizar o renovar un rol 
     */
    public function actualizar(Request $request)
    {
        $id = $request['id'];
        $data = array(
            'nombres' => $request['nombres'],
            'apellidos'=> $request['apellidos'],
            'fecha_nacimiento'=> $request['fecha_nacimiento'],
            'fecha_entrada'=> $request['fecha_entrada'],
            'fecha_final'=> $request['fecha_final'],
            'numero' => $request['numero'],
            'celular' => $request['celular'],
            'correo'=> $request['correo'],
            'nombre_familiar'=> $request['nombre_familiar'],
            'celular_familiar'=> $request['celular_familiar'],
            'alergias' => $request['alergias'],
            'descripcion_alergias'=> $request['descripcion_alergias'],
            'limitaciones' => $request['limitaciones'],
            'descripcion_limitaciones'=> $request['descripcion_limitaciones'],
            'pago' => $request['pago'],
            'genero'=> $request['genero'], 
            'eps' => $request['eps'],
        );
        try {
            Cliente::findOrFail($id) -> update($data);
            return response() -> json(
                array('data' => [], 'message' => config('constants.messages.6.message')),
                config('constants.messages.6.code')
            );
        } catch (ModelNotFoundException $e) {
            return response() -> json(
                array('data' => [], 'message' => config('constants.messages.2.message')),
                config('constants.messages.2.code')
            );
        }
    }

    /**
     *  Remover el rolde la base de datos
     */
    public function eliminar($id)
    {
        $data = array(
            'eliminado' => 1,
        );
        try {
            Cliente::findOrFail($id) -> update($data);
            return response() -> json(
                array('data' => [], 'message' => config('constants.messages.7.message')),
                config('constants.messages.7.code')
            );
        } catch (ModelNotFoundException $e) {
            return response() -> json(
                array('data' => [], 'message' => config('constants.messages.2.message')),
                config('constants.messages.2.code')
            );
        }
    }
}
