import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './baseService';

@Injectable({
    providedIn: 'root'
})
export class TareaService extends BaseService {
    public url: string;
    constructor(
        public readonly http: HttpClient,
    ) {
        super(http);
        this.url = 'url';
    }



    listarTarea(): any {
        return this.get('tarea/listar');
    }

    getTareaById(id): any {
        return this.getById('tarea/consultar/', id);
    }
    updateTarea(user): any {
        return this.put('tarea/actualizar', user);
    }
    deleteTarea(id): any {
        return this.delete('tarea/eliminar/', id);
    }

    postTarea(user): any {
        return this.post('tarea/insertar', user);
    }


}
