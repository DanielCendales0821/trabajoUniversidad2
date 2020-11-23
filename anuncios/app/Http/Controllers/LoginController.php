<?php

namespace App\Http\Controllers;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class LoginController extends Controller
{

    public function __construct() { }


    /**
     *  Login
     */
    public function login(Request $request)
    {
        $email = $request['correo'];
        $clave = $request['clave'];
        try{
            $result = Usuario::with('rol')->where('correo', $email)->where('eliminado', 0)->first();
            if(!empty($result))
            {
                if (password_verify($clave, $result['clave'])) {
                    return response() -> json(
                        array('data' => $result, 'message' => config('constants.messages.3.message')),
                        config('constants.messages.3.code')
                    );
                } else {
                    return response() -> json(
                        array('data' => [], 'message' => config('constants.messages.11.message')),
                        config('constants.messages.11.code')
                    );
                }
            }else{
                return response() -> json(
                    array('data' => [], 'message' => config('constants.messages.11.message')),
                    config('constants.messages.11.code')
                );
            }
        }catch (Exception $ex){
            return response() -> json(
                array('data' => [], 'message' => config('constants.messages.4.message')),
                config('constants.messages.4.code')
            );
        }
    }


}
