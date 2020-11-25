import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadesService } from 'src/app/services/actividadesService';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-eliminar-actividades',
  templateUrl: './eliminar-actividades.component.html',
  styleUrls: ['./eliminar-actividades.component.scss']
})
export class EliminarActividadesComponent implements OnInit {

  public idActividad: any;
  constructor(
    private generalService: GeneralService,
    private router: Router,
    private route: ActivatedRoute,
    private readonly actividadService: ActividadesService,
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => this.idActividad = params['id']);
  }
  eliminar() {
    this.generalService.abrirConfirmacion().subscribe(
      response => {

        this.actividadService.deleteActividades(this.idActividad).subscribe(
          res => {
            this.generalService.abrirMensaje('Se ha eliminado correctamente', 'success');
            this.router.navigate(['/actividades']);
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

