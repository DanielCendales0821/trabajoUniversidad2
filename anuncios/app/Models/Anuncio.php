<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Anuncio extends Model
{
    //tabla selecionada
    protected $table='anuncio';

    //campos de la tabla
    protected $fillable = [
    'id',
    'nombre',    
    'descripcion',
    'precio',
    'fecha',
    'idUsuario',
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
          return $this -> belongsTo(Usuario::class, 'idUsuario');
      }


    
    
    

    
}