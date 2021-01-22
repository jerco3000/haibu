/** Javascript
 - Cada función debe ser desarrollada con un código personalizado y devolver la data requerida
 - Al final de la prueba estará un console.log de cada una de las funciones para validar si el resultado es válido.
 - Las respuestas deben ser subidas a un git para su posterior revisión
 - Enviar el link del git en el mismo correo enviado
 Regla no1: No modifiques el objeto original. Cada función debe retornar un nuevo set de datos.
 Regla no2: Queda prohibido ocupar librarías como lodash o Underscore, el objetivo de la prueba es evaluar las
 habilidades con "vanilla" javascript
 ¡Suerte!
 */
/**
 @section DATASET
 */
const clients = [
    { id: 1, rut: "89873550", name: "LARA RENE PETTY BERGER" },
    { id: 2, rut: "86833361", name: "CONWAY LANDRY POLLARD BRADLEY" },
    { id: 3, rut: "88271452", name: "MICHELLE LETITIA BATTLE MOONEY" },
    { id: 4, rut: "87252013", name: "SIMMONS NELSON WITT MONROE" },
    { id: 5, rut: "81706494", name: "BRADY MARY RANDALL FERNANDEZ" },
    { id: 6, rut: "71167355", name: "ACOSTA COLE ATKINSON PITTS" },
    { id: 7, rut: "79093176", name: "DOMINGUEZ HOUSE GONZALES SALAZAR" },
    { id: 8, rut: "91361017", name: "KIRSTEN COLLINS BYERS COFFEY" },
    { id: 9, rut: "9065642K", name: "FIELDS RATLIFF MORRIS QUINN" }
];
const banks = [
    { id: 1, name: 'SCOTIABANK' },
    { id: 2, name: 'BCI' },
    { id: 3, name: 'ITAU' },
    { id: 4, name: 'CONDELL' },
];
const accounts = [
    { clientId: 4, bankId: 1, balance: 79069 },
    { clientId: 6, bankId: 3, balance: 136060 },
    { clientId: 9, bankId: 3, balance: 74908 },
    { clientId: 2, bankId: 2, balance: 4391 },
    { clientId: 6, bankId: 2, balance: 116707 },
    { clientId: 1, bankId: 3, balance: 157627 },
    { clientId: 5, bankId: 4, balance: 136372 },
    { clientId: 7, bankId: 4, balance: 190204 },
    { clientId: 5, bankId: 4, balance: 149670 },
    { clientId: 2, bankId: 3, balance: 143321 },
    { clientId: 2, bankId: 4, balance: 67466 },
    { clientId: 2, bankId: 3, balance: 17956 },
    { clientId: 9, bankId: 2, balance: 43194 },
    { clientId: 5, bankId: 1, balance: 52245 },
    { clientId: 6, bankId: 2, balance: 41562 },
    { clientId: 3, bankId: 2, balance: 138046 },
    { clientId: 6, bankId: 3, balance: 196964 },
    { clientId: 8, bankId: 3, balance: 73803 },
    { clientId: 9, bankId: 2, balance: 150402 },
    { clientId: 7, bankId: 1, balance: 122869 },
    { clientId: 5, bankId: 4, balance: 65223 },
    { clientId: 7, bankId: 3, balance: 143589 },
    { clientId: 9, bankId: 3, balance: 43346 },
    { clientId: 2, bankId: 1, balance: 60421 },
    { clientId: 4, bankId: 4, balance: 184110 },
    { clientId: 8, bankId: 4, balance: 195903 },
    { clientId: 5, bankId: 2, balance: 77649 },
    { clientId: 8, bankId: 4, balance: 28170 },
    { clientId: 5, bankId: 1, balance: 132850 },
    { clientId: 1, bankId: 3, balance: 139679 },
    { clientId: 7, bankId: 4, balance: 119808 },
    { clientId: 4, bankId: 4, balance: 109201 },
    { clientId: 9, bankId: 3, balance: 112529 },
    { clientId: 1, bankId: 3, balance: 137914 },
    { clientId: 6, bankId: 2, balance: 122904 },
    { clientId: 5, bankId: 4, balance: 103142 },
    { clientId: 8, bankId: 2, balance: 69163 },
    { clientId: 2, bankId: 4, balance: 57812 },
    { clientId: 2, bankId: 3, balance: 32851 },
    { clientId: 7, bankId: 1, balance: 109763 },
    { clientId: 8, bankId: 3, balance: 147442 },
    { clientId: 9, bankId: 1, balance: 42217 },
    { clientId: 1, bankId: 1, balance: 39658 },
    { clientId: 6, bankId: 2, balance: 8664 },
    { clientId: 8, bankId: 1, balance: 41915 },
    { clientId: 7, bankId: 1, balance: 31879 },
    { clientId: 7, bankId: 4, balance: 117795 },
    { clientId: 1, bankId: 4, balance: 108862 },
    { clientId: 5, bankId: 1, balance: 18550 },
];

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function sortByKeyMax(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
}


/**
 Ejercicio 0
 @description Retornar un arreglo con los ID de los clientes
 */
function exercise0() {
    return clients.map(client =>client.id);
}
//Answer// => [1, 2, 3, 4, 5, 6, 7, 8, 9];
/**
 Ejercicio 1
 @description Retornar un arreglo con los ID de los clientes ordenados por RUT
 */
function exercise1() {
//TODO
    /**
     * Retirar digito verificador para ordenar
     */
    clientruts = clients;
    i = 0;
    while (clientruts[i]){
        clientruts[i]["rut"] = clientruts[i]["rut"].substr(0,(clientruts[i]["rut"].length - 1))
        i++;
    }
    /**
     * Ordenar por RUT
     */
    sortByKey(clientruts, "rut");
    return clientruts.map(clientruts => clientruts.id)
}
/**
 Ejercicio 2
 @description Retornar un arreglo con los nombres de los clientes, ordenados de mayor a menor
 por la suma TOTAL de los saldos de las Cuentas
 */
function exercise2() {
//TODO
    /**
     * Sumarizar los saldos de los clientes
     **/
    clientSaldos = [];
    i = 0;
    while (clients[i]){
        ii = 0;
        balance = 0;
        cliente = clients[i]["id"];
        nombre = clients[i]["name"];
        while (accounts[ii]){
            if (cliente == accounts[ii]["clientId"]){
                balance = balance + accounts[ii]["balance"];
            }
            ii++;
        }
        i++;
        var obj = {};
        obj.id = cliente;
        obj.name = nombre;
        obj.balance = balance;
        clientSaldos.push(obj);
    }
    /*
    * Ordena
    * */
    sortByKeyMax(clientSaldos, "balance");
    return clientSaldos.map(clientSaldos => clientSaldos.name)
    //return clientSaldos
}
/**
 Ejercicio 3
 @description Devuelve un objeto cuyo índice es el nombre de los bancos
 y cuyo valor es un arreglo de los ruts de los clientes ordenados alfabéticamente por 'nombre'
 */
function exercise3() {
//TODO
    bancoClientes=[];
    Clientes=clients;
    i = 0;
    /*
    * Lista de Bancos
    * */
    while (banks[i]){
        banconombre = banks[i]["name"];
        banco = banks[i]["id"];
        ii = 0;
        cantidadClientes=0;
        /*
        * Ordenar clientes por nombre
        * */
        sortByKey(Clientes,"name");
        var objClientes = [];
        /*
        * Lista de Clientes
        * */
        while (Clientes[ii]){
            iii = 0;
            cliente = Clientes[ii]["id"];
            /*
            * Clientes que poseen cuenta en banco
            * */
            while (accounts[iii]){
                if (banco == accounts[iii]["bankId"] && cliente==accounts[iii]["clientId"]){
                    nombre = Clientes[ii]["name"];
                    rut = Clientes[ii]["rut"];
                    //objClientes.push(nombre, rut);
                    objClientes.push(rut);
                    break;
                }
                iii++;
            }

            ii++;
        }
        i++;
        var obj = {};
        obj[banconombre]=objClientes;
        bancoClientes.push(obj);
    }
    return bancoClientes
}
/**
 Ejercicio 4
 @description Devuelve un arreglo ordenado de mayor a menor con el saldo de los clientes que
 tengan más de 25000 en el banco 'SCOTIABANK'
 */
function exercise4() {
//TODO
    clientSaldos = [];
    i = 0;
    /*
    * Lista clientes
    * */
    while (clients[i]){
        ii = 0;
        balance = 0;
        banco = 1; // Indica de que banco se crea balance
        cliente = clients[i]["id"];
        nombre = clients[i]["name"];
        /*
        * Balance
        * */
        while (accounts[ii]){
            /*
               Crea balance de clientes solo para bankid=1 (scotiabank)
             */
            if (accounts[ii]["bankId"] == banco && cliente == accounts[ii]["clientId"]){
                balance = balance + accounts[ii]["balance"];
            }
            ii++;
        }
        i++;
        var obj = {};
        obj.bankid = banco;
        obj.id = cliente;
        obj.name = nombre;
        obj.balance = balance;

        /*
        * Solo tomar los balance > 25.000
        * */
        if (balance > 25000) {clientSaldos.push(obj)}
        /*
        * Ordena
        * */
        sortByKeyMax(clientSaldos, "balance");
    }
    return clientSaldos.map(clientSaldos => clientSaldos.balance)
}
/**
 Ejercicio 5
 @description Devuelve un arreglo con la 'id' de los Bancos de menor a mayor por el
 TOTAL de dinero que administran en las cuentas de sus clientes
 */
function exercise5() {
//TODO:
    bancoSaldos = [];
    i = 0;
    while (banks[i]){
        ii = 0;
        balance = 0;
        bancoid = banks[i]["id"];
        banconombre = banks[i]["name"];
        /*
        Crea balance de clientes en los bancos
        */
        while (accounts[ii]){
            if (bancoid == accounts[ii]["bankId"]){
                balance = balance + accounts[ii]["balance"];
            }
            ii++;
        }
        i++;
        /* Crea saldos totales de los bancos*/
        var obj = {};
        obj.bankid = bancoid;
        obj.bankname = banconombre;
        obj.balance = balance;
        bancoSaldos.push(obj)
        /* Ordena */
        sortByKey(bancoSaldos, "balance");
    }
    //return bancoSaldos
    return bancoSaldos.map(bancoSaldos => bancoSaldos.bankid)
}
/**
 Ejercicio 6
 @description Devuelve un objeto en donde la key son los nombre de los bancos
 y el valor es la cantidad de clientes que solo tienen una cuenta en ese banco
 */
/*
* NO existe objetos CUENTA que permita definir si una persona posee mas de 1 cuenta,
* por lo que solo es posible determinar si una persona posee balance
* y asumir que al menos posee una cuenta.
* */
function exercise6() {
//TODO:
    bancoClientes=[];
    i = 0;
    cantidadClientes=0;
    anterior=0;
    bancoClientesBalance=[];
    /*
    * Lista bancos
    * */
    while (banks[i]){
        banconombre = banks[i]["name"];
        banco = banks[i]["id"];
        ii = 0;
        cantidadClientes=0;
        /*
        * Lista Clientes
        * */
        while (clients[ii]){
            iii = 0;
            cliente = clients[ii]["id"];
            /*
            * Valida quien es cliente en base a si registra balance
            * */
            while (accounts[iii]){
                if (banco == accounts[iii]["bankId"] && cliente==accounts[iii]["clientId"]){
                    cantidadClientes++;
                    break;
                }
                iii++;
            }

            ii++;
        }
        i++;
        var obj = {};
        obj[banconombre] = cantidadClientes;
        bancoClientes.push(obj);
    }
    return bancoClientes
}
/**
 Ejercicio 7
 @description Devuelve un objeto en donde la key son el nombre de los bancos
 y el valor es el 'id' de su cliente con menos dinero.
 */
function exercise7() {
//TODO:
    bancoRegresa = []; //Objeto que regresa
    Clientes=clients;
    bancoClientes=[];
    i = 0;
    /*
    * Lista bancos
    * */
    while (banks[i]){
        BancoClientesBalance=[]; // Sumariza los balances antes sin orden
        banconombre = banks[i]["name"];
        banco = banks[i]["id"];
        ii = 0;
        cantidadClientes=0;
        anterior=0;
        clientefinal=0;
        /*
        * Lista Clientes
        * */
        while (Clientes[ii]){
            iii = 0;
            cliente = Clientes[ii]["id"];
            balance = 0;
            while (accounts[iii]){
                if (banco === accounts[iii]["bankId"] && accounts[iii]["clientId"] === Clientes[ii]["id"]){
                    balance = balance + accounts[iii]["balance"];
                }
                iii++;
            }
            /*
            * Registra solo clientes
            * */
            if (balance>0){
                var obj = {};
                obj.banco = banconombre;
                obj.cliente = cliente;
                obj.balance = balance;
                BancoClientesBalance.push(obj); //Balance clientes sin orden
            }
            ii++;
        }
        /*
        * Ordena de menor a mayor clientes con balance
        * */
        sortByKey(BancoClientesBalance,"balance");
        /*
        * Crea Objeto con los clientes de menor monto posterior a ordenar
        * */
        var obj2 = {};
        obj2[BancoClientesBalance[0].banco] = BancoClientesBalance[0].cliente;
        bancoRegresa.push(obj2);
        i++;

    }
    return bancoRegresa
    }


/**
 No modificar.
 Debes ejecutar este ejercicio con NodeJs y verificar si su código está dando los resultados correctos
 @section CONSOLE LOG
 */
console.log("Ejercicio 0 --> ", exercise0() || "Ejercicio no resuelto");
console.log("Ejercicio 1 --> ", exercise1() || "Ejercicio no resuelto");
console.log("Ejercicio 2 --> ", exercise2() || "Ejercicio no resuelto");
console.log("Ejercicio 3 --> ", exercise3() || "Ejercicio no resuelto");
console.log("Ejercicio 4 --> ", exercise4() || "Ejercicio no resuelto");
console.log("Ejercicio 5 --> ", exercise5() || "Ejercicio no resuelto");
console.log("Ejercicio 6 --> ", exercise6() || "Ejercicio no resuelto");
console.log("Ejercicio 7 --> ", exercise7() || "Ejercicio no resuelto");
process.exit();
