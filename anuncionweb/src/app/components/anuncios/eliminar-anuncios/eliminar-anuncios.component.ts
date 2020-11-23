import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnunciosService } from 'src/app/services/anunciosService';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-eliminar-anuncios',
  templateUrl: './eliminar-anuncios.component.html',
  styleUrls: ['./eliminar-anuncios.component.scss']
})
export class EliminarAnunciosComponent implements OnInit {

  public idAnuncio: any;
  constructor(
    private generalService: GeneralService,
    private router: Router,
    private route: ActivatedRoute,
    private readonly anuncionsService: AnunciosService,
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => this.idAnuncio = params['id']);
  }
  eliminar() {
    this.generalService.abrirConfirmacion().subscribe(
      response => {
        this.anuncionsService.deleteAnuncio(this.idAnuncio).subscribe(
          res => {
            this.generalService.abrirMensaje('Se ha eliminado correctamente', 'success');
            this.router.navigate(['/anuncios']);

          },
          error => {

            this.generalService.abrirMensaje('Verificar información', 'error');
          }
        );
      }, err => {
        this.generalService.abrirMensaje('Verificar información', 'error');

      });
  }

}
