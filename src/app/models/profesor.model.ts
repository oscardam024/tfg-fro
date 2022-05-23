import { Clase } from "./clase.model";


export interface Profesor{
    idProfesor: string;
    nombre: string;
    apellido: string;
    dni: string;
    numeroTelefono: string;
    correo: string;
    direccion: string;
    profesoresAsociados: Array<Clase>;
}