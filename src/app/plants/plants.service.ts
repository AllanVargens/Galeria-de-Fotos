import { Injectable } from '@angular/core';
import path from 'path';
import * as fs from 'fs';
import { Plant } from '../models/plants.interface';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  private readonly plants: Plant[];

  constructor() {
    const filePath = path.join(__dirname, '..', 'plants.json');
    const data = fs.readFileSync(filePath, 'utf8');
    this.plants = JSON.parse(data);
  }

  findAll(): Plant[] {
    return this.plants;
  }

  findOne(nome_planta: string): Plant | undefined {
    if (undefined) return undefined;
    return this.plants.find((plant) => plant['nome_planta'] === nome_planta);
  }
}
