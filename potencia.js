const potencia = (exp, callback) => {
    var list = [];

    setTimeout( () => {
        
        for (let i = 1; i <= 1000000; i++) {
            list.push(Math.pow(i, exp))            
        }        
        callback(list)
    }, 10000)
}

const myCallback = (resultado) => {
    console.log("El resultado de la función callback es: "+ resultado)
}

console.log("Antes de la función callback")
potencia(2, myCallback)
console.log("Después de la función callback")
