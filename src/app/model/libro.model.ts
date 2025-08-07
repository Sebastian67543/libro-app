import { CategoriaComponent } from "../componets/categoria/categoria"
import { Autor } from "./autor.model"

export interface Libro{
    idLibro: number
    titulo: string
    editorial: string
    numPaginas: number
    edicion: String
    idioma: String
    fechaPublicacion: Date
    descripcion: string
    tipoPasta: string
    iSBN: string
    numEjemplares: number
    portada: string
    presentacion: string
    precio: number
    categoria: CategoriaComponent
    autor: Autor


    [key: string]: any;
}