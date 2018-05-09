import { Injectable } from '@angular/core';
import { Perfil } from '../models/perfil';
import { Headers, Http } from '@angular/http';


@Injectable()
export class PerfilService {
    private baseUrl = 'http://localhost:8080';

    constructor(private http: Http) { }

    getPerfiles(): Promise<Perfil[]> {
        return this.http.get(this.baseUrl + '/api/perfiles/')
            .toPromise()
            .then(response => response.json() as Perfil[])
            .catch(this.handleError);
    }

    createPerfil(perfilData: Perfil): Promise<Perfil> {
        return this.http.post(this.baseUrl + '/api/perfiles/', perfilData)
            .toPromise().then(response => response.json() as Perfil)
            .catch(this.handleError);
    }

    updatePerfil(perfilData: Perfil): Promise<Perfil> {
        return this.http.put(this.baseUrl + '/api/perfiles/' + perfilData.id, perfilData)
            .toPromise()
            .then(response => response.json() as Perfil)
            .catch(this.handleError);
    }

    deletePerfil(id: string): Promise<any> {
        return this.http.delete(this.baseUrl + '/api/perfiles/' + id)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Un error ha ocurrido, contactar con el administrador', error);
        return Promise.reject(error.message || error);
    }
}
