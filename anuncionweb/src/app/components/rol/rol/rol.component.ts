import { Component, OnInit } from '@angular/core';
import { EncryptService } from 'src/app/services/encrypt.service';
import { GeneralService } from 'src/app/services/general.service';
import { RolService } from 'src/app/services/rolService';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss']
})
export class RolComponent implements OnInit {


  public roles: any = [];
  public user: any = [];
  public descripcion: string;
  public idUser: number;
  constructor(
    private readonly rolService: RolService,
    private readonly generalService: GeneralService,
    private readonly encryptService: EncryptService) {
    this.idUser = 0;
    this.user = this.encryptService.getValue();
  }

  ngOnInit() {
    this.getRoles();
  }

  getRoles() {
    this.rolService.listarRoles().subscribe(
      res => {
        this.roles = res.data;
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });
  }

  leftClick(id) {
    this.idUser = id;
  }

}

