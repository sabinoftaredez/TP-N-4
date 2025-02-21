import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import superhéroesDataSource from './superhéroesDataSource.mjs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class superhéroesRepository extends superhéroesDataSource {
    constructor() {
        super();
        this.filePath = path.resolve(__dirname, '../superhéroes.txt');
    }
    obtenerTodos() {
        console.log(`Leyendo datos desde: ${this.filePath}`);
        const data = fs.readFileSync(this.filePath, 'utf-8');
        const superhéroes = JSON.parse(data);
        console.log(`Datos leídos: ${JSON.stringify(superhéroes)}`);
        return superhéroes;
    }
}