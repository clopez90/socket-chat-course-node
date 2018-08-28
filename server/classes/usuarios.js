class Usuario {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };
        this.personas.push(persona);
        return this.personas;
    }

    getPersona(id) {
        let persona = this.personas.filter(persona => persona.id === id)[0];
        return persona;
    }
    getPersonas() {
        return this.personas;
    }
    getPersonasPorSala(sala) {
        return this.personas.filter(persona => persona.sala === sala);
        //....
    }
    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);
        //devuelve todas las personas que no coincidan con el id, es decir, la borra.
        this.personas = this.personas.filter(persona => id != persona.id);
        return personaBorrada;
    }
}
module.exports = {
    Usuario
}