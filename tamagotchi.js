class Tamagotchi {
    constructor(){
        this.age = 0;
        this.weight = 100;
        this.happiness = 50;
        this.hunger = 50;
        this.hygene = 50;
    }
}
class TamaDog extends Tamagotchi {
    constructor(name) {
        super (name); // using the super keyword inside a constructor runs the constructor from the parent class to set up the properties for the new subclass
        this.name = name;
        this.favouriteFood = "peanut butter";
        this.favouriteToy = "squeeky ball";
    }
    feed(){
        this.hunger += 50;
        if (this.hunger > 100) {this.hunger = 100};
        console.log(`${this.name} says 'It's chow time! Yummyyy' (ᵔᴥᵔ)
        hunger: ${this.hunger}%`)
        return this;
    }
    play(){
        this.happiness += 50;
        if (this.happiness > 100) {this.happiness = 100};
        console.log(`${this.name} says 'Wahooo! Watch as I pounce, stalk, and leap through the air with graceful precision. You may applaud now.
        happiness: ${this.happiness}%' (ᵔᴥᵔ)`);
        return this;
    }
    clean(){
        this.hygene += 50;
        console.log(`${this.name} says 'Baths? You've got to be kitten me! I'm a self-cleaning machine'. And gives you the stink-eye. (¬_¬)
        hygene: ${this.hygene}%`);
        return this;
    }
}
const tamaDog = new TamaDog("Alfie")
tamaDog.feed().play().clean()