import { Task } from "../models/task.class"
import { LEVELS } from "../models/levels.enum"


const task1 ={
    id: 1, 
    name: 'Crear y subir repositorio ', 
    description: 'Crear el repositorio de la app "Gestor de tarea"',
    date: "27/03/2023, 16:05:34",
    completed: true,
    notes: [
        {
            id: `task1-${Date.now()}`,
            noteText: "Probando Los comentarios",
            noteDate: new Date().toLocaleString(),
            noteUser: "Peter"

        },
        {
            id: `task1-${Date.now() + 1}`,
            noteText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            noteDate: new Date().toLocaleString(),
            noteUser: "Peter"

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
    notes: [
        {
            id: `task2-${Date.now()}`,
            noteText: "Probando Los comentarios",
            noteDate: "28/03/2023, 15:00:32",
            noteUser: "Juan"

        },
        {
            id: `task2-${Date.now() + 1}`,
            noteText: "Comentario 2",
            notaDate: "29/03/2023, 10:43:02",
            noteUser: "Juan"

        }
    ],
    level: LEVELS.NORMAL
}

const baseDeDatos= [
    task1,
    task2,
    new Task('Revisar errores Frecuentes', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ,false, LEVELS.BLOCKING),
    
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
export const deleteTask = (ID) => {
    const tareaEncontrada = baseDeDatos.find( task => task.id === parseFloat(ID))
    const index = baseDeDatos.indexOf(tareaEncontrada)
    baseDeDatos.splice(index,1)
} 

export const addTaskToBase = (task) =>{
    baseDeDatos.push(task)
    console.log("Tarea agregada")
}

