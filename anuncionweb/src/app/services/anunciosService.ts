import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';
import { BaseService } from './baseService';
import { EncryptService } from './encrypt.service';

@Injectable({
    providedIn: 'root'
})
export class AnunciosService extends BaseService {
    public  url: string;

    constructor(
        public readonly http: HttpClient,
    ) {
        super(http);
        this.url = 'url';
    }

    postAnuncio(anuncio): any {
        return this.post('anuncio/insertar', anuncio);
    }
    updateAnuncio(anuncio): any {
        return this.put('anuncio/actualizar', anuncio);
    }
    getAnuncio(): any {
        return this.get('anuncio/listar');
    }
    getAnuncioById(id): any {
        return this.getById('anuncio/consultar/', id);
    }

    deleteAnuncio(id): any {
        return this.delete('anuncio/eliminar/', id);
    }


}
