import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './baseService';

@Injectable({
    providedIn: 'root'
})
export class RolService extends BaseService {
    public url: string;
    constructor(
        public readonly http: HttpClient,
    ) {
        super(http);
        this.url = 'url';
    }



    listarRoles(): any {
        return this.get('rol/listar');
    }

    getRolById(id): any {
        return this.getById('rol/consultar/', id);
    }
    updateRol(user): any {
        return this.put('rol/actualizar', user);
    }
    deleteRol(id): any {
        return this.delete('rol/eliminar/', id);
    }

    postRol(user): any {
        return this.post('rol/insertar', user);
    }


}
