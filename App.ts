let nombre:string="saul"
let apellido:string="alejos"
//ANY no pone valor por defecto
let nombre2;
console.log(nombre2)
//tuplas
let nombres:[string,number,boolean]=["nombre",123,true]
console.log(nombres)
//ENUM
enum Volumen{
    min=1,
    medio=5,
    alto=10
}
let numeros:number=Volumen.min
console.log(numeros)

function llamar():void{
    console.log("mostrar")
}
//NEVER
// function colgar(mensaje):never{
// throw new Error(mensaje)
// }
//ASERCIONES
let cualquerValor:any="lo que sea no se el valor"
let largoString:number=(<string>cualquerValor).length
console.log(largoString)
//NULL UNDEFINED
//funciones

function nombreCompleto(nombre:string,apellido:string,edad:number):string{
    return nombre+""+apellido+edad
}
function datos(nombre:string,apellido:string,edad?:number):string{
    if(edad){return nombre+""+apellido}
    else{return nombre}
}
let nombreUsuario=nombreCompleto("Saul","alejos",34)
console.log(nombreUsuario)

function nombreUsuarios(nombre:string,...losdemasParametros:string[]):string{
        return nombre+""+losdemasParametros.join("")
}
let nombreUno=["Saul","Salim","Saladin","Sharan"]
let nombreDos=["Hasan","Haiser","Haiden","Hitler"]
console.log(nombreUno)
console.log(nombreDos)

//TIPOS es una definicion de un tipo

type Nombre={
    nombre:string,
    apellido:string,
    edad:number,
    carrera:string[],
    getNombre:()=>string
}

let persona:Nombre={
    nombre:"Saul",
    apellido:"Alejos",
    edad:34,
    carrera:["Diseñador","Programador"],
    getNombre(){
        return this.nombre
    }
}
console.log(persona)
//UNIon de tipos
class Datos{
    nombre:string="Sin nombre";
    apellido:string="Sin nombre";
    apodo:string="Sin nombre";
    edad:number=0
    constructor(nombre:string,apellido:string,apodo:string,edad:number){
        this.nombre=nombre;
        this.nombre=apellido;
        this.apodo=apodo;
        this.edad=edad
    }
}
let DatoNombre:Datos = new Datos("Saul","Alejos","Wolf",34)
console.log(DatoNombre)