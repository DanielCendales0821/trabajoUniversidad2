import { Component, OnInit } from '@angular/core';
import { AnunciosService } from 'src/app/services/anunciosService';
import { EncryptService } from 'src/app/services/encrypt.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.scss']
})
export class AnunciosComponent implements OnInit {

  public anuncios: any = [];
  public user: any = [];
  public descripcion: string;
  public idUser: number;
  constructor(
    private readonly anuncioService: AnunciosService,
    private readonly generalService: GeneralService,
    private readonly encryptService: EncryptService) {
    this.idUser = 0;
    this.user = this.encryptService.getValue();
  }


  ngOnInit() {
    this.getAnuncios();
  }

  getAnuncios() {
    this.anuncioService.getAnuncio().subscribe(
      res => {
        this.anuncios = res;
        console.log(this.anuncios);
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });
  }

  leftClick(id) {
    this.idUser = id;
  }

  captureDescripcion(msg) {
    this.descripcion = msg;
  }

}
