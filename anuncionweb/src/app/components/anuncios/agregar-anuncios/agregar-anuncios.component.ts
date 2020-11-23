import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnunciosService } from 'src/app/services/anunciosService';
import { EncryptService } from 'src/app/services/encrypt.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-agregar-anuncios',
  templateUrl: './agregar-anuncios.component.html',
  styleUrls: ['./agregar-anuncios.component.scss']
})
export class AgregarAnunciosComponent implements OnInit {
  public formGroup: FormGroup;
  public usuario: any;
  constructor(private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly encryptService: EncryptService,
    private readonly router: Router,
    private readonly anunciosService: AnunciosService) { }

  ngOnInit() {
    this.usuario = this.encryptService.getValue();
    this.initiForm();
  }

  initiForm() {
    this.formGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required]
    });
  }

  captureInformation() {
    const data = {
      nombre: this.formGroup.value.nombre,
      fecha: this.formGroup.value.fecha,
      descripcion: this.formGroup.value.descripcion,
      precio: this.formGroup.value.precio,
      idUsuario: this.usuario.data.id
    };
    this.agregar(data);
  }

  agregar(data) {
    this.anunciosService.postAnuncio(data).subscribe(
      res => {
        this.generalService.abrirMensaje('Agregado Correctamente', 'success');
        this.router.navigate(['/anuncios']);
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });

  }

}
