import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { EncryptService } from './services/encrypt.service';
import { GeneralService } from './services/general.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public loginstatus = localStorage.getItem('loginstatus');
  public user: any;
  public validation: any;


  constructor(
    private permissionsService: NgxPermissionsService,
    private readonly encryptService: EncryptService,
    private readonly generalService: GeneralService
  ) {
    this.validation = false;
    this.user = null;
    this.dataUser();
  }

  public dataUser() {
    this.validation = localStorage.getItem('validacion');
    this.user = this.encryptService.getValue();
    this.permisos();
  }


  permisos(): void {
    if (this.validation === 'true' && this.user !== {}) {
      const data = this.user.data.rol.descripcion
      const arr = new Array<any>();
      arr.push(data);
      this.permissionsService.loadPermissions(arr);
    }
  }

}
