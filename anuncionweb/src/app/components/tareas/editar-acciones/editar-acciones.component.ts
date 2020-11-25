import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadesService } from 'src/app/services/actividadesService';
import { GeneralService } from 'src/app/services/general.service';
import { RolService } from 'src/app/services/rolService';
import { TareaService } from 'src/app/services/tareaService';

@Component({
  selector: 'app-editar-acciones',
  templateUrl: './editar-acciones.component.html',
  styleUrls: ['./editar-acciones.component.scss']
})
export class EditarAccionesComponent implements OnInit {
  public formGroupUser: FormGroup;
  public rol: any = [];
  public actividades: any = [];
  public tarea: any;
  public idTarea: any;

  constructor(
    private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly tareaService: TareaService,
    private readonly rolService: RolService,
    private readonly actividadService: ActividadesService
  ) {
    this.tarea = new Object();
  }



  ngOnInit() {
    this.route.params.subscribe(params => this.idTarea = params['id']);
    this.formGroupUser = this.formBuilder.group({
      role: ['', Validators.required],
      actividad: ['', Validators.required],
    });
    this.listarRoles();
    this.listarActividades();
    this.consultar();
  }

  consultar() {
    this.tareaService.getTareaById(this.idTarea).subscribe(
      res => {
        this.tarea = res;
      }, err => {
        this.generalService.abrirMensaje('No hay datos de Roles', 'error');
      }
    );
  }

  listarRoles() {
    this.rolService.listarRoles().subscribe(
      res => {
        this.rol = res.data;
      }, err => {
        this.generalService.abrirMensaje('No hay datos de Roles', 'error');
      }
    );
  }

  listarActividades() {
    this.actividadService.listarActividades().subscribe(
      res => {
        this.actividades = res.data;
      }, err => {
        this.generalService.abrirMensaje('No hay datos de Roles', 'error');
      }
    );
  }


  captureInformation() {
    const data = {
      id: this.idTarea,
      idactividad: this.formGroupUser.value.actividad,
      idrol: this.formGroupUser.value.role
    };
    this.agregar(data);

  }

  agregar(data) {
    this.tareaService.updateTarea(data).subscribe(
      res => {
        this.generalService.abrirMensaje('Agregado Correctamente', 'success');
        this.router.navigate(['/tareas']);
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });

  }
}