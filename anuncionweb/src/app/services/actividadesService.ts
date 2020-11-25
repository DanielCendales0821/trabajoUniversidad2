import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './baseService';

@Injectable({
    providedIn: 'root'
})
export class ActividadesService extends BaseService {
    public url: string;
    constructor(
        public readonly http: HttpClient,
    ) {
        super(http);
        this.url = 'url';
    }



    listarActividades(): any {
        return this.get('actividades/listar');
    }

    getActividadesById(id): any {
        return this.getById('actividades/consultar/', id);
    }
    updateActividades(user): any {
        return this.put('actividades/actualizar', user);
    }
    deleteActividades(id): any {
        return this.delete('actividades/eliminar/', id);
    }

    postActividades(user): any {
        return this.post('actividades/insertar', user);
    }


}
