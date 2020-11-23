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


//Cliente
$router->get('/ws/anuncio/listar',['uses' => 'AnuncioController@listar']);
$router->get('/ws/anuncio/consultar/{id}',['uses' => 'AnuncioController@consultar']);
$router->post('/ws/anuncio/insertar',['uses' => 'AnuncioController@insertar']);
$router->put('/ws/anuncio/actualizar',['uses' => 'AnuncioController@actualizar']);
$router->delete('/ws/anuncio/eliminar/{id}',['uses' => 'AnuncioController@eliminar']);
