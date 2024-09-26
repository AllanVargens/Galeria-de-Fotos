import { Injectable } from '@angular/core';
import { Plant } from '../../models/plants.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  private readonly plants!: Plant[];
  private readonly jsonUrl = 'assets/plants.json';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.jsonUrl);
  }

  findOne(nome_planta: string): Plant | undefined {
    if (undefined) return undefined;
    return this.plants.find((plant) => plant['nome_cientifico'] === nome_planta);
  }

  filterByName(data: Plant[], name: string): Plant[] {
    return data.filter(item => item.nome_planta.toLowerCase().includes(name.toLowerCase()))
  }

  filterByCientificName(data: Plant[], name: string): Plant[] {
    return data.filter(item => item.nome_cientifico.toLowerCase().includes(name.toLowerCase()))
  }
}
