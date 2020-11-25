import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadesService } from 'src/app/services/actividadesService';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-agregar-actividades',
  templateUrl: './agregar-actividades.component.html',
  styleUrls: ['./agregar-actividades.component.scss']
})
export class AgregarActividadesComponent implements OnInit {

  public formGroupUser: FormGroup;

  constructor(
    private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly actividadService: ActividadesService
  ) { }



  ngOnInit() {
    this.formGroupUser = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }


  captureInformation() {
    const descripcion = this.formGroupUser.value.name;
    const data = {
      descripcion: descripcion.toUpperCase()
    };
    this.agregar(data);
  }

  agregar(data) {
    this.actividadService.postActividades(data).subscribe(
      res => {
        this.generalService.abrirMensaje('Agregado Correctamente', 'success');
        this.router.navigate(['/actividades']);
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });

  }
}