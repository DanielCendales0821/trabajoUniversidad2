import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { TareaService } from 'src/app/services/tareaService';

@Component({
  selector: 'app-eliminar-acciones',
  templateUrl: './eliminar-acciones.component.html',
  styleUrls: ['./eliminar-acciones.component.scss']
})
export class EliminarAccionesComponent implements OnInit {

  public idTarea: any;
  constructor(
    private generalService: GeneralService,
    private router: Router,
    private route: ActivatedRoute,
    private readonly tareaService: TareaService,
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => this.idTarea = params['id']);
  }
  eliminar() {
    this.generalService.abrirConfirmacion().subscribe(
      response => {
        this.tareaService.deleteTarea(this.idTarea).subscribe(
          res => {
            this.generalService.abrirMensaje('Se ha eliminado correctamente', 'success');
            this.router.navigate(['/tareas']);
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

