import { Task } from "../models/task.class"
import { LEVELS } from "../models/levels.enum"


const baseDeDatos= [
    new Task('Crear y subir repositorio ', 'Crear el repositorio de la app "Gestor de tarea"',false, LEVELS.URGENT),
    new Task('Actualizar repositorio ', 'Subir ultimos cambios ',false, LEVELS.NORMAL),
]


export const getBase = new Promise((resolve, reject) => {
    baseDeDatos ? resolve(baseDeDatos) : reject("Error la base de datos se encuentra vacia")
})

export const getTask = (ID) => {
    return new Promise((resolve, reject) => {
        ID
        ? resolve(baseDeDatos.find( task => task.id === parseFloat(ID))) 
        : reject("No se encontró el producto" )
    })
} 

export const addTaskToBase = (task) =>{
    baseDeDatos.push(task)
    console.log("Tarea agregada")
}

