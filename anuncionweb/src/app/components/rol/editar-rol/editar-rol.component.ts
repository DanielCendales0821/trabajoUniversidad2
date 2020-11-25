import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { RolService } from 'src/app/services/rolService';


@Component({
  selector: 'app-editar-rol',
  templateUrl: './editar-rol.component.html',
  styleUrls: ['./editar-rol.component.scss']
})
export class EditarRolComponent implements OnInit {
  public formGroupUser: FormGroup;
  public idRol: any;
  public user: any;
  public rol: any;
  public roles: any = [];

  constructor(
    private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly rolService: RolService
  ) {
    this.rol = new Object();
  }



  ngOnInit() {
    this.route.params.subscribe(params => this.idRol = params['id']);
    this.formGroupUser = this.formBuilder.group({
      name: ['', Validators.required]
    });
    this.getUserById();
  }

  public async getUserById() {
    this.rolService.getRolById(this.idRol).subscribe(
      res => {
        this.rol = res.data;
      }, err => { });
  }

  captureInformation() {
    const descripcion = this.formGroupUser.value.name;
    const data = {
      id: this.idRol,
      descripcion: descripcion.toUpperCase()
    };
    this.updateUser(data);
  }

  updateUser(data) {
    this.rolService.updateRol(data).subscribe(
      res => {
        this.router.navigate(['/rol']);
        this.generalService.abrirMensaje('Agregado Correctamente', 'success');
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });

  }
}