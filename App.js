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
function nombreUsuarios(nombre) {
    var losdemasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        losdemasParametros[_i - 1] = arguments[_i];
    }
    return nombre + "" + losdemasParametros.join("");
}
var nombreUno = ["Saul", "Salim", "Saladin", "Sharan"];
var nombreDos = ["Hasan", "Haiser", "Haiden", "Hitler"];
console.log(nombreUno);
console.log(nombreDos);
var persona = {
    nombre: "Saul",
    apellido: "Alejos",
    edad: 34,
    carrera: ["Diseñador", "Programador"],
    getNombre: function () {
        return this.nombre;
    }
};
console.log(persona);
//UNIon de tipos
var Datos = /** @class */ (function () {
    function Datos(nombre, apellido, apodo, edad) {
        this.nombre = "Sin nombre";
        this.apellido = "Sin nombre";
        this.apodo = "Sin nombre";
        this.edad = 0;
        this.nombre = nombre;
        this.nombre = apellido;
        this.apodo = apodo;
        this.edad = edad;
    }
    return Datos;
}());
var DatoNombre = new Datos("Saul", "Alejos", "Wolf", 34);
console.log(DatoNombre);
