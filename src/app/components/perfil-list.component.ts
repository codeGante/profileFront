import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../services/perfil.service';
import { Perfil } from '../models/perfil';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'perfil-list',
    templateUrl: './perfil-list.component.html'
})

export class PerfilListComponent implements OnInit {
    perfiles: Perfil[];
    nuevoPerfil: Perfil = new Perfil();

    editar: boolean = false;
    editarPerfil: Perfil = new Perfil();

    constructor(
        private perfilService: PerfilService,
    ) {}

    ngOnInit(): void {
        this.getPerfiles();
    }

    getPerfiles(): void {
        this.perfilService.getPerfiles()
            .then(perfiles => this.perfiles = perfiles);
    }

    createPerfil(perfilForm: NgForm): void {
        this.perfilService.createPerfil(this.nuevoPerfil)
            .then(createPerfil => {
                perfilForm.reset();
                this.nuevoPerfil = new Perfil();
                this.perfiles.unshift(createPerfil);
            });
    }

    deletePerfil(id: string): void {
        this.perfilService.deletePerfil(id)
            .then(() => {
                this.perfiles = this.perfiles.filter(perfil => perfil.id !== id);
            });
    }

    updatePerfil(perfilData: Perfil): void {
        console.log(perfilData);
        this.perfilService.updatePerfil(perfilData)
            .then(updatedPerfil => {
                const existePerfil = this.perfiles.find(perfil => perfil.id === updatedPerfil.id);
                Object.assign(existePerfil, updatedPerfil);
                this.clearEdicion();
            });
    }

    toggleCompleted(perfilData: Perfil): void {
        perfilData.completado = !perfilData.completado;
        this.perfilService.updatePerfil(perfilData)
            .then(updatedPerfil => {
                const existePerfil = this.perfiles.find(perfil => perfil.id === updatedPerfil.id);
                Object.assign(existePerfil, updatedPerfil);
        });
    }

    editPerfil(perfilData: Perfil): void {
        this.editar = true;
        Object.assign(this.editarPerfil, perfilData);
    }

    clearEdicion(): void {
        this.editarPerfil = new Perfil();
        this.editar = false;
    }
}
