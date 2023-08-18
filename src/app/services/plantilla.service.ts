import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlantillaService {

  constructor(private readonly MainService: MainService) { }

  //traer plantilla de documentos 
  async GetPlantilla(TramiteSubtipoId: any, CarreraId: any) {
    let ans: any = await this.MainService.get(`${environment.endPoint}Plantilla/ListaDocumentosPlantilla/${TramiteSubtipoId}/carreraId/${CarreraId}`);
    return ans;
  }


  //traer los estados de una plantilla (indispensable, obligatorio, opcional)
  async GetListestadoPlantilla() {
    let ans: any = await this.MainService.get(`${environment.endPoint}Plantilla/ListaEstadoPlantilla`);
    return ans;
  }

  //traer lista de carreras de un estudiante
  async GetListCarrera() {
    let ans: any = await this.MainService.get(`${environment.endPoint}Plantilla/ListaCarrera`);
    return ans;
  }

  //traer plantilla de documentos 
  async GetTramitesSubTramites() {
    let ans: any = await this.MainService.get(`${environment.endPoint}Plantilla/ListaTramiteSubTramite`);
    return ans;
  }

  async AgregarPlantilla(plantilla: any) {
    let ans: any = await this.MainService.post(`${environment.endPoint}Archivos/AgregarPlantilla`, plantilla);
    return ans;
  }

  //Lista de distintos tipos de documentos
  async ListTipoDocumento() {
    let ans: any = await this.MainService.get(`${environment.endPoint}Plantilla/ListaTipoDocumentos`);
    return ans;
  }

  //Lista de estados de un documento
  async ListaEstadoPlantilla() {
    let ans: any = await this.MainService.get(`${environment.endPoint}Plantilla/ListaEstadoPlantilla`);
    return ans;
  }



}