import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { RolService } from 'src/app/services/rolService';

@Component({
  selector: 'app-agregar-rol',
  templateUrl: './agregar-rol.component.html',
  styleUrls: ['./agregar-rol.component.scss']
})
export class AgregarRolComponent implements OnInit {

  public formGroupUser: FormGroup;
  public rol: any = [];

  constructor(
    private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly rolService: RolService
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
    this.rolService.postRol(data).subscribe(
      res => {
        this.generalService.abrirMensaje('Agregado Correctamente', 'success');
        this.router.navigate(['/rol']);
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });

  }
}

