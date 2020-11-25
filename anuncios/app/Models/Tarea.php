<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tarea extends Model
{
    //tabla selecionada
    protected $table='actividades_rol';

    //campos de la tabla
    protected $fillable = [
        'id',
        'idrol',
        'idactividad',
        'eliminado'
    ];
      //Llave primaria
      protected $primaryKey = 'id';

      public $timestamps = false;
  
      //Elementos ocultos
      protected $hidden = [
      ];

      public function rol()
      {
          return $this -> belongsTo(RolCuenta::class, 'idrol');
      }
      public function actividad()
      {
          return $this -> belongsTo(Actividad::class, 'idactividad');
      }
  
}