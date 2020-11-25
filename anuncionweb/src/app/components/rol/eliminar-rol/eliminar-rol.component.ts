import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { RolService } from 'src/app/services/rolService';

@Component({
  selector: 'app-eliminar-rol',
  templateUrl: './eliminar-rol.component.html',
  styleUrls: ['./eliminar-rol.component.scss']
})
export class EliminarRolComponent implements OnInit {

  public idRol: any;
  constructor(
    private generalService: GeneralService,
    private router: Router,
    private route: ActivatedRoute,
    private readonly rolService: RolService,
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => this.idRol = params['id']);
  }
  eliminar() {
    this.generalService.abrirConfirmacion().subscribe(
      response => {

        this.rolService.deleteRol(this.idRol).subscribe(
          res => {
            this.generalService.abrirMensaje('Se ha eliminado correctamente', 'success');
            this.router.navigate(['/rol']);

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

