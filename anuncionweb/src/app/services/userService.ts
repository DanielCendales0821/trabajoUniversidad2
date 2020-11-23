import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';
import { BaseService } from './baseService';
import { EncryptService } from './encrypt.service';

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseService {
    public url: string;
    constructor(
        public readonly http: HttpClient,
    ) {
        super(http);
        this.url = 'url';
    }


    getUsers(): any {
        return this.get('usuario/listar');
    }
    listarRoles(): any {
        return this.get('rol/listar');
    }

    getUsersById(id): any {
        return this.getById('usuario/consultar/', id);
    }
    updateUser(user): any {
        return this.put('usuario/actualizar', user);
    }
    deleteUser(id): any {
        return this.delete('usuario/eliminar/', id);
    }

    postUser(user): any {
        return this.post('usuario/insertar', user);
    }

    login(user): any {
        return this.loginn('login/login', user);
    }

}
