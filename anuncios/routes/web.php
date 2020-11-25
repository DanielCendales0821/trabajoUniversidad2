<?php
$router->get('/', function () use ($router) {
    return $router->app->version();
});

Route::group(['middleware' => ['auth']], function ($router) {
});

//usuario
$router->get('/ws/usuario/listar',['uses' => 'UsuarioController@listar']);
$router->get('/ws/usuario/consultar/{id}',['uses' => 'UsuarioController@consultar']);
$router->post('/ws/usuario/insertar',['uses' => 'UsuarioController@insertar']);
$router->put('/ws/usuario/actualizar',['uses' => 'UsuarioController@actualizar']);
$router->delete('/ws/usuario/eliminar/{id}',['uses' => 'UsuarioController@eliminar']);


// Login
$router->post('/ws/login/login', ['uses' => 'LoginController@login']);

// roles
$router->get('/ws/rol/listar',['uses' => 'RolCuentaController@listar']);
$router->get('/ws/rol/consultar/{id}',['uses' => 'RolCuentaController@consultar']);
$router->post('/ws/rol/insertar',['uses' => 'RolCuentaController@insertar']);
$router->put('/ws/rol/actualizar',['uses' => 'RolCuentaController@actualizar']);
$router->delete('/ws/rol/eliminar/{id}',['uses' => 'RolCuentaController@eliminar']);

// Actividades
$router->get('/ws/actividades/listar',['uses' => 'ActividadesController@listar']);
$router->get('/ws/actividades/consultar/{id}',['uses' => 'ActividadesController@consultar']);
$router->post('/ws/actividades/insertar',['uses' => 'ActividadesController@insertar']);
$router->put('/ws/actividades/actualizar',['uses' => 'ActividadesController@actualizar']);
$router->delete('/ws/actividades/eliminar/{id}',['uses' => 'ActividadesController@eliminar']);

// Actividades_role
$router->get('/ws/tarea/listar',['uses' => 'TareaController@listar']);
$router->get('/ws/tarea/consultar/{id}',['uses' => 'TareaController@consultar']);
$router->post('/ws/tarea/insertar',['uses' => 'TareaController@insertar']);
$router->put('/ws/tarea/actualizar',['uses' => 'TareaController@actualizar']);
$router->delete('/ws/tarea/eliminar/{id}',['uses' => 'TareaController@eliminar']);


//Cliente
$router->get('/ws/anuncio/listar',['uses' => 'AnuncioController@listar']);
$router->get('/ws/anuncio/consultar/{id}',['uses' => 'AnuncioController@consultar']);
$router->post('/ws/anuncio/insertar',['uses' => 'AnuncioController@insertar']);
$router->put('/ws/anuncio/actualizar',['uses' => 'AnuncioController@actualizar']);
$router->delete('/ws/anuncio/eliminar/{id}',['uses' => 'AnuncioController@eliminar']);
