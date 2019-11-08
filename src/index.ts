let arreglo: number[] = [1, 2, 3, 4, 4];
let texto:string[]=["texto","texto"]
console.log( arreglo);
texto.push( "texto nuevo" );
console.log( texto );
 

let wherever: any = "hola perro";
let largoString: number = ( <string>wherever ).length;
console.log( largoString );

function nombre ( nombre: string, apellido: string, capitalizado:boolean=true ): string
{
    if (capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido);
    } else {
        return nombre + " " + apellido;
     }
   
}
function capitalizar(palabra:string):string {
    return palabra.charAt( 0 ).toLocaleUpperCase() + palabra.substr( 1 ).toLowerCase();
}
let data = nombre( "saul", "alejos",false );
console.log( data );

function nombreCompleto(nombre:string,...masDatos:string[]):string {
    return nombre + "" + masDatos.join( " " );
}
let dato: string = nombreCompleto( "saul", "saul1", "saul2", "saul3" );
let dato1: string = nombreCompleto( "alejos", "alejos1", "alejos2", "alejos3" );
console.log( dato + dato1 )

function sumar(a:number,b:number):number {
    return a + b;
}
console.log( sumar( 1, 2 ) );


type Heroe = {
    nombre: string,
    edad: number,
    poderes: any[],
    superVelocidad: () => string,
    superFuerza:()=>string
}

let flash: Heroe = {
    nombre: "nombre",
    edad: 1000,
    poderes: ["fuerza", "invisible", "rayos", "magnetismo"],
    superFuerza ()
    { 
        return this.poderes[0];
    },
    superVelocidad ()
    {
        return this.poderes[1];
    }
}
let superman: Heroe = {
    nombre: "nombre dos",
    edad: 2000,
    poderes: ["fuerza dos", "invisible dos", "rayos dos ", "magnetismo dos"],
    superFuerza ()
    {
        return this.poderes[0];
    },
    superVelocidad ()
    {
        return this.poderes[1];
    }
}
console.log(flash,superman) 
