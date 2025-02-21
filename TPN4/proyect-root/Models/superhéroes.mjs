export default class superhéroes {
    constructor (id, nombreSuperhéroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo)
    {
        this.id = id;
        this.nombreSuperhéroe = nombreSuperhéroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }

    mostrarInformación() {
        return `ID: ${this.id}, 
        Nombre ${this.nombreSuperhéroe},
        NombreReal: ${this.nombreReal},
        NombreSociedad: ${this.nombreSociedad},
        Edad: ${this.edad},
        PlanetaOrigen: ${this.planetaOrigen},
        Debilidad: ${this.debilidad},
        Poder: ${this.poder},
        HabilidadEspecial: ${this.habilidadEspecial},
        Aliado: ${this.aliado},
        Enemigo: ${this.enemigo}`;
    }
}