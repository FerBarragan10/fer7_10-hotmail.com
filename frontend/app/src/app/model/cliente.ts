export class Cliente {
    id:number;
    nombre:string;
    apellido: string;
    email: string;

    constructor(nombre: string, apellido: string, email: string) {
        this.nombre =nombre;
        this.apellido = apellido;
        this.email = email;
    }
}


