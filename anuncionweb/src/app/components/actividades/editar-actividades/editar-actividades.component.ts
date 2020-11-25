import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadesService } from 'src/app/services/actividadesService';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-editar-actividades',
  templateUrl: './editar-actividades.component.html',
  styleUrls: ['./editar-actividades.component.scss']
})
export class EditarActividadesComponent implements OnInit {
  public formGroupUser: FormGroup;
  public idActividad: any;
  public user: any;
  public actividad: any;
  public roles: any = [];

  constructor(
    private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly actividadService: ActividadesService
  ) {
    this.actividad = new Object();
  }



  ngOnInit() {
    this.route.params.subscribe(params => this.idActividad = params['id']);
    this.formGroupUser = this.formBuilder.group({
      name: ['', Validators.required]
    });
    this.getUserById();
  }

  public async getUserById() {
    this.actividadService.getActividadesById(this.idActividad).subscribe(
      res => {
        this.actividad = res.data;
      }, err => { });
  }

  captureInformation() {
    const descripcion = this.formGroupUser.value.name;
    const data = {
      id: this.idActividad,
      descripcion: descripcion.toUpperCase()
    };
    this.updateUser(data);
  }

  updateUser(data) {
    this.actividadService.updateActividades(data).subscribe(
      res => {
        this.router.navigate(['/actividades']);
        this.generalService.abrirMensaje('Agregado Correctamente', 'success');
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });

  }
}