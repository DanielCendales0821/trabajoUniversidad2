<?php

//Funciones globales

function GUID()
{
    if (function_exists('com_create_guid') === true)
        return trim(com_create_guid(), '{}');
    $data = openssl_random_pseudo_bytes(16);
    $data[6] = chr(ord($data[6]) & 0x0f | 0x40); // set version to 0100
    $data[8] = chr(ord($data[8]) & 0x3f | 0x80); // set bits 6-7 to 10
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
}

function TOKEN()
{
    $token = md5(uniqid(rand(1,6)) .  date('YmdHis')); 
    return $token;
}

function ENCRIPTAR($clave)
{
    $opciones = [
        'memory_cost' => 1<<11,
        'time_cost'   => 4,
        'threads'     => 2
    ];
    $claveEncriptada = password_hash($clave  , PASSWORD_ARGON2I, $opciones);
    return $claveEncriptada;
}

function DESENCRIPTAR($clave)
{
    $opciones = [
        'memory_cost' => 1<<11,
        'time_cost'   => 4,
        'threads'     => 2
    ];
    $clave = password_hash($clave  , PASSWORD_ARGON2I, $opciones);
    return $clave;
}
