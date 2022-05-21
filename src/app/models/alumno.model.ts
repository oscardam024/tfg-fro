import { Clase } from "./clase.model";

export interface Alumno{
    nombre: string;
    apellido: string;
    dni: string;
    numeroTelefono: string;
    correo: string;
    direccion: string;
    clasesAsignadas: Array<Clase>;
}