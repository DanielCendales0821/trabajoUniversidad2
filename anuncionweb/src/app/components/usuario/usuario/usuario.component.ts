import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService';
import { GeneralService } from 'src/app/services/general.service';
import { EncryptService } from 'src/app/services/encrypt.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  public users: any = [];
  public user: any = [];
  public idUser: number;
  constructor(
    private readonly userService: UserService,
    private readonly generalService: GeneralService,
    private readonly encryptService: EncryptService) {
    this.idUser = 0;
    this.user = this.encryptService.getValue().user;
  }


  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      res => {
        this.users = res;
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });
  }

  leftClick(id) {
    this.idUser = id;
  }


}
