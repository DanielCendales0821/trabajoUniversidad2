import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnunciosService } from 'src/app/services/anunciosService';
import { EncryptService } from 'src/app/services/encrypt.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-editar-anuncios',
  templateUrl: './editar-anuncios.component.html',
  styleUrls: ['./editar-anuncios.component.scss']
})
export class EditarAnunciosComponent implements OnInit {

  public formGroup: FormGroup;
  public usuario: any;
  public anuncio: any;
  public idAnuncio: any;
  constructor(private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly encryptService: EncryptService,
    private readonly router: Router,
    private readonly anunciosService: AnunciosService) {
    this.anuncio = new Object();
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.idAnuncio = params['id']);
    this.usuario = this.encryptService.getValue();
    this.initiForm();
    this.consultarAnuncios();
  }

  initiForm() {
    this.formGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required]
    });
  }

  consultarAnuncios() {
    this.anunciosService.getAnuncioById(this.idAnuncio).subscribe(
      res => { this.anuncio = res; }, err => { });

  }

  captureInformation() {
    const data = {
      id: this.idAnuncio,
      nombre: this.formGroup.value.nombre,
      fecha: this.formGroup.value.fecha,
      descripcion: this.formGroup.value.descripcion,
      precio: this.formGroup.value.precio,
      idUsuario: this.usuario.data.id
    };
    this.agregar(data);
  }

  agregar(data) {
    this.anunciosService.updateAnuncio(data).subscribe(
      res => {
        this.generalService.abrirMensaje('Actualizado Correctamente', 'success');
        this.router.navigate(['/anuncios']);
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });

  }

}
