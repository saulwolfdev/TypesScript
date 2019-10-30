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
//HERENCIA-CONSTRUCTORES
class Padre{
    constructor( public nombre:string, private apellido:string){
        console.log("Constructor padre")
    }
    protected getNombre():string{
        console.log("Get nombre Protegido")
        return this.nombre
    }

}

let padreObj:Padre = new Padre("Saul","Alejos")
console.log("Constructor padre=>",padreObj)

class Hijo extends Padre{
constructor(a:string,b:string) {
    console.log("Constructor hijo llamado")
    super(a,b);
}
public getNombre():string{
    console.log("Get nombre Public")
    return super.getNombre()
}
}

let saulHijo:Hijo = new Hijo("Saul","Alejos")
console.log("Constructor hijo llamado =>",saulHijo.getNombre())

//GETS SETS
class Abuelo{
    private _nombre:string;

    constructor(nombre:string){
        this._nombre=nombre
    }
    get nombre():string{
        console.log("paso por get")
        return this._nombre
        if(this.nombre){
            return this.nombre
        }else{
            return "NO tiene  nombre"
        }
    }
    set nombre(nombre:string){
        console.log("paso por set")
        if(nombre.length<3){
            throw new Error("Los nombre tienen que tener mas de 3 letras")
            return
        }
        this._nombre=nombre
    }
}
let sobrino:Abuelo = new Abuelo("el sobrino tiene nombre Saul")
console.log(sobrino.nombre)

sobrino.nombre="Sharan"
console.log(sobrino.nombre)
//METODOS Y PROPIEDADES ESTATICAS

class Xmen{
    static nombre:string="Wolverine"
    constructor(){}
    static crearXmen(){
        console.log("se creo de forma estatica")
        return new Xmen()
    }
}
let Wolverine2=Xmen.crearXmen()
console.log(Xmen.nombre)
console.log(Wolverine2)
//CLASES ABSTRACTAS
abstract class Mutantes{
    constructor( public nombre:string, private apellido:string){

    }
}
class Xmen2 extends Mutantes{

}
let wolverine=new Xmen2("Saul","Alejos")
console.log(wolverine)
//CONSTRUCTORES PRIVADOS
class Apocalipsis{
    static instancia:Apocalipsis
    private constructor(public nombre:string){

    }
    static llamarApocalipsis(){
        if(!Apocalipsis.instancia){
            Apocalipsis.instancia=new Apocalipsis("SOY APOCALIPSIS")
        }
        return Apocalipsis.instancia
    }
}
let apocalips = Apocalipsis.llamarApocalipsis()
console.log(apocalips)
//INTERFACES

interface NombreMutantes{
    nombre:string,
    poder?:string,
    regenerar(nombreReal:string):void
}
function enviarMision(nombres:NombreMutantes){
console.log("Enviado a "+nombres.nombre)
    nombres.regenerar("LOGAN")
}
function enviarCuartel(nombres:NombreMutantes){
    console.log("Enviado a "+nombres.nombre)
    }
let ciclope:NombreMutantes={
    nombre:"xxx",
    regenerar(x:string){
        console.log("se regenero",x)
    },
    poder:"ddddd"
}
enviarCuartel(ciclope)
enviarMision(ciclope)
//CLASES Y FUNCIONES INTERFASES

interface XmenNuevos{
    nombrex:string;
    nombreReal?:string;
    regenar(nombreReal:string):void
    
}
// class MutantesN implements XmenNuevos{
//     nombrex:string;
//     regenar(nombrex){
//             console.log(nombrex)
//     }

// }
// let xxxx=new MutantesN()
