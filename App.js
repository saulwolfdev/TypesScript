var nombre = "saul";
var apellido = "alejos";
//ANY no pone valor por defecto
var nombre2;
console.log(nombre2);
//tuplas
var nombres = ["nombre", 123, true];
console.log(nombres);
//ENUM
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["alto"] = 10] = "alto";
})(Volumen || (Volumen = {}));
var numeros = Volumen.min;
console.log(numeros);
function llamar() {
    console.log("mostrar");
}
//NEVER
// function colgar(mensaje):never{
// throw new Error(mensaje)
// }
//ASERCIONES
var cualquerValor = "lo que sea no se el valor";
var largoString = cualquerValor.length;
console.log(largoString);
//NULL UNDEFINED
//funciones
function nombreCompleto(nombre, apellido, edad) {
    return nombre + "" + apellido + edad;
}
function datos(nombre, apellido, edad) {
    if (edad) {
        return nombre + "" + apellido;
    }
    else {
        return nombre;
    }
}
var nombreUsuario = nombreCompleto("Saul", "alejos", 34);
console.log(nombreUsuario);
