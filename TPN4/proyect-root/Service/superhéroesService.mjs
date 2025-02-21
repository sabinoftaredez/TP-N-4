import superhéroesRepository from '../Repository/superhéroesRepository.mjs';
const repo = new superhéroesRepository();
export function obtenerSuperhéroePorId(id) {
    console.log(`Buscando superhéroe con ID: ${id}`);
    const superhéroes = repo.obtenerTodos();
    const superhéroe = superhéroes.find(héroe => héroe.id === id);
    console.log(`Superhéroe encontrado: ${JSON.stringify(superhéroe)}`);
    return superhéroe;
}
export function buscarSuperhéroesPorAtributo(atributo, valor) {
    console.log(`Buscando superhéroes por atributo: ${atributo}, valor: ${valor}`);
    const superhéroes = repo.obtenerTodos();
    const resultado = superhéroes.filter(héroe => String(héroe[atributo]).toLowerCase().includes(valor.toLowerCase()));
    console.log(`Superhéroes encontrados: ${JSON.stringify(resultado)}`);
    return resultado;
}
export function obtenerSuperhéroesMayoresDe30() {
    console.log('Buscando superhéroes mayores de 30 años');
    const superhéroes = repo.obtenerTodos();
    const resultado = superhéroes.filter(héroe => héroe.edad > 30);
    console.log(`Superhéroes mayores de 30 años encontrados: ${JSON.stringify(resultado)}`);
    return resultado;
}