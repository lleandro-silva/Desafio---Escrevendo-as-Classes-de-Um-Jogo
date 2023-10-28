// Definindo a classe Herói
class Heroi {
    // Construtor para inicializar o herói com nome, idade e tipo
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para atacar com base no tipo do herói
    atacar() {
        let ataque = '';
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
                break;
        }

        // Exibindo a mensagem de ataque
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}