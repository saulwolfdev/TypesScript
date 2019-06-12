var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//HERENCIA-CONSTRUCTORES
var Padre = /** @class */ (function () {
    function Padre(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        console.log("Constructor padre");
    }
    Padre.prototype.getNombre = function () {
        console.log("Get nombre Protegido");
        return this.nombre;
    };
    return Padre;
}());
var padreObj = new Padre("Saul", "Alejos");
console.log("Constructor padre=>", padreObj);
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo(a, b) {
        var _this = this;
        console.log("Constructor hijo llamado");
        _this = _super.call(this, a, b) || this;
        return _this;
    }
    Hijo.prototype.getNombre = function () {
        console.log("Get nombre Public");
        return _super.prototype.getNombre.call(this);
    };
    return Hijo;
}(Padre));
var saulHijo = new Hijo("Saul", "Alejos");
console.log("Constructor hijo llamado =>", saulHijo.getNombre());
//GETS SETS
var Abuelo = /** @class */ (function () {
    function Abuelo(nombre) {
        this._nombre = nombre;
    }
    Object.defineProperty(Abuelo.prototype, "nombre", {
        get: function () {
            console.log("paso por get");
            return this._nombre;
            if (this.nombre) {
                return this.nombre;
            }
            else {
                return "NO tiene  nombre";
            }
        },
        set: function (nombre) {
            console.log("paso por set");
            if (nombre.length < 3) {
                throw new Error("Los nombre tienen que tener mas de 3 letras");
                return;
            }
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Abuelo;
}());
var sobrino = new Abuelo("el sobrino tiene nombre Saul");
console.log(sobrino.nombre);
sobrino.nombre = "Sharan";
console.log(sobrino.nombre);
//METODOS Y PROPIEDADES ESTATICAS
var Xmen = /** @class */ (function () {
    function Xmen() {
    }
    Xmen.crearXmen = function () {
        console.log("se creo de forma estatica");
        return new Xmen();
    };
    Xmen.nombre = "Wolverine";
    return Xmen;
}());
var Wolverine2 = Xmen.crearXmen();
console.log(Xmen.nombre);
console.log(Wolverine2);
//CLASES ABSTRACTAS
var Mutantes = /** @class */ (function () {
    function Mutantes(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    return Mutantes;
}());
var Xmen2 = /** @class */ (function (_super) {
    __extends(Xmen2, _super);
    function Xmen2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Xmen2;
}(Mutantes));
var wolverine = new Xmen2("Saul", "Alejos");
console.log(wolverine);
//CONSTRUCTORES PRIVADOS
var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Apocalipsis.llamarApocalipsis = function () {
        if (!Apocalipsis.instancia) {
            Apocalipsis.instancia = new Apocalipsis("SOY APOCALIPSIS");
        }
        return Apocalipsis.instancia;
    };
    return Apocalipsis;
}());
var apocalips = Apocalipsis.llamarApocalipsis();
console.log(apocalips);
