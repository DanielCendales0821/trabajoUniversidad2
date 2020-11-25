CREATE TABLE rol (
    id INT NOT NULL AUTO_INCREMENT,
    descripcion VARCHAR (200) NOT NULL,
    eliminado INT,
    PRIMARY KEY (id)
);

CREATE TABLE usuario (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (200) NOT NULL,
    correo VARCHAR (200) NOT NULL,
    clave VARCHAR (200) NOT NULL,
    eliminado INT,
    rol INT,
    PRIMARY KEY (id),
    FOREIGN KEY (rol) REFERENCES rol(id)
);

CREATE TABLE anuncio (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (200) NOT NULL,
    descripcion VARCHAR (200) NOT NULL,
    precio  INT (200) NOT NULL,
    fecha DATE,
    eliminado INT,
    idUsuario INT,
    PRIMARY KEY (id),
    FOREIGN KEY (idUsuario) REFERENCES usuario(id)
);

CREATE TABLE actividades (
    id INT NOT NULL AUTO_INCREMENT,
    descripcion VARCHAR (200) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE actividades_rol (
    id INT NOT NULL AUTO_INCREMENT,
    idrol INT,
    idactividad INT,
    PRIMARY KEY (id),
    FOREIGN KEY (idrol) REFERENCES rol(id),
    FOREIGN KEY (idactividad) REFERENCES actividades(id)
);