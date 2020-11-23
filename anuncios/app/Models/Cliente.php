<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    //tabla selecionada
    protected $table='clientes';

    //campos de la tabla
    protected $fillable = [
    'id',
    'nombres',
    'apellidos',
    'fecha_nacimiento',
    'fecha_entrada',
    'fecha_final',
    'numero' ,
    'celular' ,
    'correo',
    'nombre_familiar',
    'celular_familiar',
    'alergias' ,
    'descripcion_alergias',
    'limitaciones' ,
    'descripcion_limitaciones',
    'tipo_documento', 
    'pago' ,
    'genero', 
    'eps' ,
    'eliminado' 
    ];
      //Llave primaria
      protected $primaryKey = 'id';

      public $timestamps = false;
  
      //Elementos ocultos
      protected $hidden = [ 
      ];
      //Llaves foraneas
    public function eps()
    {
        return $this -> belongsTo(Eps::class, 'eps')->where('eliminado',0);
    }

    public function genero()
    {
        return $this -> belongsTo(Genero::class, 'genero')->where('eliminado',0);
    }

    public function diagnosticos()
    {
        return $this -> hasMany(Diagnostico::class, 'cliente','id')->where('eliminado',0);
    }
    
    public function medidas()
    {
        return $this -> hasMany(Medida::class, 'cliente','id')->where('eliminado',0);
    }
    public function historias()
    {
        return $this -> hasMany(Historia::class, 'cliente','id')->where('eliminado',0);
    }

    
}