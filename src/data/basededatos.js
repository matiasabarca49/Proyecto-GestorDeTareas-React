import { Task } from "../models/task.class"
import { LEVELS } from "../models/levels.enum"


const task1 ={
    id: 1, 
    name: 'Crear y subir repositorio ', 
    description: 'Crear el repositorio de la app "Gestor de tarea"',
    date: "27/03/2023, 16:05:34",
    completed: true,
    comentary: [
        {
            comentaryText: "Probando Los comentarios",
            dateComentary: new Date().toLocaleDateString(),
            user: "Peter"

        },
        {
            comentaryText: "Comentario 2",
            dateComentary: new Date().toLocaleDateString(),
            user: "Peter"

        }
    ],
    level: LEVELS.URGENT
}

const task2 ={
    id: 2, 
    name: 'Actualizar repositorio constantemente ', 
    description: 'Crear commit y subirlos todas las semanas',
    date: "27/03/2023, 17:30:23",
    completed: false,
    comentary: [
        {
            comentaryText: "Probando Los comentarios",
            dateComentary: "28/03/2023, 15:00:32",
            user: "Juan"

        },
        {
            comentaryText: "Comentario 2",
            dateComentary: "29/03/2023, 10:43:02",
            user: "Juan"

        }
    ],
    level: LEVELS.NORMAL
}

const baseDeDatos= [
    task1,
    task2,
    new Task('Revisar errores Frecuentes', 'Subir ultimos cambios ',false, LEVELS.BLOCKING),
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

