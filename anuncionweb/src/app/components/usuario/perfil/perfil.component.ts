import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/userService';
import { EncryptService } from 'src/app/services/encrypt.service';

@Component({
    selector: 'app-perfil-usuario',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

    public formGroupUser: FormGroup;
    public idUser: any;
    public user: any;
    public rol: any;
    public roles: any = [];
    public rolLocal:any;

    constructor(
        private readonly generalService: GeneralService,
        private formBuilder: FormBuilder,
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly userService: UserService,
        private readonly encryprService: EncryptService
    ) {
        this.user = new Object();
    }



    ngOnInit() {
        this.route.params.subscribe(params => this.idUser = params['id']);
        this.formGroupUser = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            confirmpassword: ['', Validators.required],
        });
        this.rolLocal = this.encryprService.getValue();
        this.listarRoles();
        this.getUserById();
    }

    listarRoles() {
        this.userService.listarRoles().subscribe(
            res => {
                this.roles = res.data;
            }, err => {
                this.generalService.abrirMensaje('No hay datos de Roles', 'error');
            }
        );
    }

    public async getUserById() {
        this.userService.getUsersById(this.rolLocal.data.id).subscribe(
            res => {
                this.user = res;
            }, err => { });
    }

    captureInformation() {
        if (this.formGroupUser.value.password === this.formGroupUser.value.confirmpassword) {
            const data = {
                id: this.idUser,
                nombre: this.formGroupUser.value.name,
                rol: this.user.data.rol.id,
                correo: this.formGroupUser.value.email,
                clave: this.formGroupUser.value.password
            };
            this.updateUser(data);
        } else {
            this.generalService.abrirMensaje('Las contraseñas no coinciden', 'error');
        }
    }

    updateUser(data) {
        this.userService.updateUser(data).subscribe(
            res => {
                this.router.navigate(['/usuario']);
                this.generalService.abrirMensaje('Agregado Correctamente', 'success');
            }, err => {
                this.generalService.abrirMensaje('Ocurrio un Error', 'error');
            });

    }
}

