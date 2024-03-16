import Animal from "./animal.js";

const audioPlayer = document.getElementById("player");

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Rugir() {
        console.log(this.getSonido());
        audioPlayer.src = `assets/sounds/${this.getSonido()}`;
        audioPlayer.play();
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Aullar() {
        console.log(this.getSonido());
        audioPlayer.src = `assets/sounds/${this.getSonido()}`;
        audioPlayer.play();
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Gruñir() {
        console.log(this.getSonido());
        audioPlayer.src = `assets/sounds/${this.getSonido()}`;
        audioPlayer.play();
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Sisear() {
        console.log(this.getSonido());
        audioPlayer.src = `assets/sounds/${this.getSonido()}`;
        audioPlayer.play();
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Chillar() {
        console.log(this.getSonido());
        audioPlayer.src = `assets/sounds/${this.getSonido()}`;
        audioPlayer.play();
    }
}

export { Leon, Oso, Lobo, Serpiente, Aguila };