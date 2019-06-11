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
let nombreUsuario=nombreCompleto("Saul","alejos",34)
console.log(nombreUsuario)