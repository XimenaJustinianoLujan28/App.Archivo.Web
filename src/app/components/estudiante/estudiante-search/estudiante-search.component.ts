import { Component, EventEmitter, Output } from '@angular/core';

import { EstudianteService } from '../../../services/estudiante.service';

import { Persona } from '../../../interfaces/estudiante.interface';

@Component({
  selector: 'app-estudiante-search',
  templateUrl: './estudiante-search.component.html',
  styleUrls: ['./estudiante-search.component.scss']
})
export class EstudianteSearchComponent {
  public estudianteEncontrados: Persona[] = [];
  @Output() getEstudianteSeleccionado: EventEmitter<Persona> = new EventEmitter();

  constructor(
    private readonly estudianteService: EstudianteService,
  ) { }

  async buscarEstudiante(event: any) {
    const textSearch = event.query.trim() as string;
    if (textSearch.length === 0) {
      return;
    }

    const response = await this.estudianteService.buscarEstudiante(textSearch);
    this.estudianteEncontrados = response || [];
  }

  setEstudianteSeleccionado(persona: Persona): void {
    this.getEstudianteSeleccionado.emit(persona);
  }
}