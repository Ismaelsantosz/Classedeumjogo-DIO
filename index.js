// Escrevendo uma classe e suas propriedades

class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        
    }
//
    atacar(){
       let ataque = ""
       switch (this.tipo){

        case "mago": ataque = "magia"
        break

        case "guerreiro": ataque = "espada"
        break

        case "monge": ataque = "artes marcias"
        break

        case "ninja": ataque = "shuriken"
        break

       }
       console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }
    
}

    const carteristicas = new hero("Harry", 25, "mago")  
    const carteristicas1 = new hero("Jack", 30, "guerreiro")
    const carteristicas2 = new hero("Myagi", 90, "monge")
    const carteristicas3 = new hero("Snake", 32, "ninja")


    carteristicas.atacar()
    carteristicas1.atacar()
    carteristicas2.atacar()
    carteristicas3.atacar()

