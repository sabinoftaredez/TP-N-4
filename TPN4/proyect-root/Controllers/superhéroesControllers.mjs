import { obtenerSuperhéroePorId, buscarSuperhéroesPorAtributo, obtenerSuperhéroesMayoresDe30 } from '../Service/superhéroesService.mjs';
import { renderizarSuperhéroes, renderizarListaSuperhéroes } from '../View/superhéroesView.mjs';
export function obtenerSuperhéroePorIdControllers(req, res) {
    const { id } = req.params;
    console.log(`Solicitud para obtener superhéroe con ID: ${id}`);
    const superhéroe = obtenerSuperhéroePorId(parseInt(id));
    if (superhéroe) {
        console.log(`Superhéroe encontrado: ${JSON.stringify(superhéroe)}`);
        res.send(renderizarSuperhéroes(superhéroe));
    } else {
        console.log('Superhéroe no encontrado');
        res.status(404).send('Superhéroe no encontrado');
    }
}
export function buscarSuperhéroesPorAtributoControllers(req, res) {
    const { atributo, valor } = req.params;
    console.log(`Solicitud para buscar superhéroes por atributo: ${atributo}, valor: ${valor}`);
    const superhéroes = buscarSuperhéroesPorAtributo(atributo, valor);
    if (superhéroes.length > 0) {
        console.log(`Superhéroes encontrados: ${JSON.stringify(superhéroes)}`);
        res.send(renderizarListaSuperhéroes(superhéroes));
    } else {
        console.log('Superhéroes no encontrados');
        res.status(404).send('Superhéroes no encontrados');
    }
}
export function obtenerSuperhéroesMayoresDe30Controllers(req, res) {
    console.log('Solicitud para obtener superhéroes mayores de 30 años');
    const superhéroes = obtenerSuperhéroesMayoresDe30();
    console.log(`Superhéroes mayores de 30 años encontrados: ${JSON.stringify(superhéroes)}`);
    res.send(renderizarListaSuperhéroes(superhéroes));
}