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
            noteDate: "29/03/2023, 10:43:02",
            noteUser: "Juan"

        }
    ],
    level: LEVELS.NORMAL
}

//==============================================================================================================
//datos ======================================================================================================
//==============================================================================================================

const taskDataBase=  JSON.parse(localStorage.getItem("task"))  
|| [
    task1,
    task2,
    new Task('Revisar errores Frecuentes', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ,false, LEVELS.BLOCKING),   
]

const notesDataBase = JSON.parse(localStorage.getItem("notes"))
|| [
    {name : "Servidores", Notas: [ {id: 1, text: "Preguntar tiempo de entrega servidores CDN nuevos"} ]},
    {name : "Rack", Notas: [ {id: 2, text: "El servidor CDN de streaming está fallando, prueba de reinicio no funcionó"}, {id: 3, text: "Se sacó el disco 4, esperando que lleguen los nuevos"} ]},
    {name : "Raul", Notas: [ {id:4 ,text: "La VLAN Para usar en la conexion TarCo es la 8972"}, {id: 5, text: "Hay un error en la potencia del enlace, revisar en el proximo intento"} ]}
]

//==============================================================================================================
//Metodos ======================================================================================================
//==============================================================================================================

// Metodos para sección TAREAS

export const getTaskBase = new Promise((resolve, reject) => {
    taskDataBase ? resolve(taskDataBase) : reject("Error la base de datos se encuentra vacia")
})

export const getTask = (ID) => {
    return new Promise((resolve, reject) => {
        ID
        ? resolve(taskDataBase.find( task => task.id === parseFloat(ID))) 
        : reject("No se encontró el producto" )
    })
} 
export const deleteTask = (ID) => {
    const tareaEncontrada = taskDataBase.find( task => task.id === parseFloat(ID))
    const index = taskDataBase.indexOf(tareaEncontrada)
    taskDataBase.splice(index,1)
    saveTaskInLocalStorage()
} 

export const addTaskToBase = (task) =>{
    taskDataBase.push(task)
    saveTaskInLocalStorage()
}

export const updateTaskInBase = () =>{
    localStorage.setItem("task", JSON.stringify(taskDataBase))
}

const saveTaskInLocalStorage = () =>{
    localStorage.setItem("task", JSON.stringify(taskDataBase))
}

//Metodos para sección NOTAS

export const getNotesBase = new Promise((resolve, reject) => {
    notesDataBase ? resolve(notesDataBase) : reject("Error la base de datos se encuentra vacia")
})

export const addThemeToBase = ( newTheme ) =>{
    notesDataBase.push( newTheme )
    saveNotesInLocalStorage()
}

export const deleteThemeFromBase = (themeToDelete)=>{
    console.log(themeToDelete)
    const themeFound = notesDataBase.find( themes => themes.name === themeToDelete )
    console.log(themeFound)
    notesDataBase.splice(  notesDataBase.indexOf(themeFound), 1  )
    saveNotesInLocalStorage()
}

export const addNoteToBase = ( theme, newNota) =>{
    const themeFound = notesDataBase.find(  nota => nota.name === theme )
    newNota.id = Date.now()
    themeFound.Notas.push(newNota)
    saveNotesInLocalStorage()
}

export const deleteNoteFromBase = ( theme ,ID) => {
    const themeToDelete = notesDataBase.find(  nota => nota.name === theme ) 
    const noteFound = themeToDelete.Notas.find( nota => nota.id === parseFloat(ID)  )
    themeToDelete.Notas.splice( themeToDelete.Notas.indexOf(noteFound), 1  )
    saveNotesInLocalStorage()    
} 

const saveNotesInLocalStorage = () =>{
    localStorage.setItem("notes", JSON.stringify(notesDataBase))
}

export const updateNotesInBase = () =>{
    saveNotesInLocalStorage()
}



