import { Component, OnInit } from '@angular/core';
import { ActividadesService } from 'src/app/services/actividadesService';
import { EncryptService } from 'src/app/services/encrypt.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {


  public actividades: any = [];
  public user: any = [];
  public descripcion: string;
  public idUser: number;
  constructor(
    private readonly actividadeService: ActividadesService,
    private readonly generalService: GeneralService,
    private readonly encryptService: EncryptService) {
    this.idUser = 0;
    this.user = this.encryptService.getValue();
  }

  ngOnInit() {
    this.getRoles();
  }

  getRoles() {
    this.actividadeService.listarActividades().subscribe(
      res => {
        this.actividades = res.data;
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });
  }

  leftClick(id) {
    this.idUser = id;
  }

}