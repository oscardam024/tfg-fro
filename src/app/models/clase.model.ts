import { Alumno } from "./alumno.model";
import { Profesor } from "./profesor.model";

export interface Clase{
    nombreClase: string;
    clasesAsignadas: Array<Alumno>;
    pclasesAsignadas: Array<Profesor>;
}