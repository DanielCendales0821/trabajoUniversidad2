import { Component, OnInit } from '@angular/core';
import { EncryptService } from 'src/app/services/encrypt.service';
import { GeneralService } from 'src/app/services/general.service';
import { TareaService } from 'src/app/services/tareaService';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.scss']
})
export class AccionesComponent implements OnInit {

 
  public tareas: any = [];
  public user: any = [];
  public descripcion: string;
  public idUser: number;
  constructor(
    private readonly tareaService: TareaService,
    private readonly generalService: GeneralService,
    private readonly encryptService: EncryptService) {
    this.idUser = 0;
    this.user = this.encryptService.getValue();
  }

  ngOnInit() {
    this.getRoles();
  }

  getRoles() {
    this.tareaService.listarTarea().subscribe(
      res => {
        console.log(res);
        this.tareas = res;
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });
  }

  leftClick(id) {
    this.idUser = id;
  }

}
