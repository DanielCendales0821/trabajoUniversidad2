<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    //tabla selecionada
    protected $table='usuario';

    //campos de la tabla
    protected $fillable = [
    'id',
    'nombre',    
    'correo',
    'clave',
    'rol',
    'eliminado' 
    ];
      //Llave primaria
      protected $primaryKey = 'id';

      public $timestamps = false;
  
      //Elementos ocultos
      protected $hidden = [ 
      ];
      //Llaves foraneas
      public function rol()
      {
          return $this -> belongsTo(RolCuenta::class, 'rol');
      }


    
    
    

    
}