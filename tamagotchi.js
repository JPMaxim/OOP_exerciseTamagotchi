class Tamagotchi {
    constructor(){
        this.age = 0;
        this.weight = 100;
        this.happiness = 50;
        this.hunger = 50;
        this.hygene = 50;
    }
}
// --------------------------------------------------------
// TAMADOG
// --------------------------------------------------------
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
        console.log(`${this.name} says 'It's chow time! My favorite part of the day! Yummyyy!' (ᵔᴥᵔ)
        hunger: ${this.hunger}%`)
        return this;
    }
    play(){
        this.happiness += 50;
        if (this.happiness > 100) {this.happiness = 100};
        console.log(`${this.name} says 'Wahooo! Play time! Wahooo! Play time! Wahooo! Play time!' Their tail is wagging so fast it might fall off.(ᵔᴥᵔ)
        happiness: ${this.happiness}%' `);
        return this;
    }
    clean(){
        this.hygene += 50;
        console.log(`${this.name} says 'Oh boy, it's bath time! Time to show off my impressive splash skills and get all the water on you, too.' (ᵔᴥᵔ)
        hygene: ${this.hygene}%`);
        return this;
    }
    stats() {
        return console.table({
            name: this.name,
            age: this.age,
            weight: this.weight,
            happiness: this.happiness,
            hunger: this.hunger,
            hygene: this.hygene,
        })
    }
}

// --------------------------------------------------------
// TAMACAT
// --------------------------------------------------------
class TamaCat extends Tamagotchi {
    constructor(name) {
        super (name); // using the super keyword inside a constructor runs the constructor from the parent class to set up the properties for the new subclass
        this.name = name;
        this.favouriteFood = "canned tuna";
        this.favouriteToy = "feather wand";
    }
    feed(){
        this.hunger += 50;
        if (this.hunger > 100) {this.hunger = 100};
        console.log(`${this.name} says 'Food, human. Now. Only the finest gourmet cat cuisine will do.' (ᵔ‿ᵔ)
        hunger: ${this.hunger}%`)
        return this;
    }
    play(){
        this.happiness += 50;
        if (this.happiness > 100) {this.happiness = 100};
        console.log(`${this.name} says 'Wahooo! Watch as I pounce, stalk, and leap through the air with graceful precision. You may applaud now.(ᵔ‿ᵔ)
        happiness: ${this.happiness}%' `);
        return this;
    }
    clean(){
        this.hygene += 50;
        console.log(`${this.name} says 'Baths? You've got to be kitten me! I'm a self-cleaning machine'. And gives you the stink-eye. (¬_¬)
        hygene: ${this.hygene}%`);
        return this;
    }
    stats() {
        return console.table({
            name: this.name,
            age: this.age,
            weight: this.weight,
            happiness: this.happiness,
            hunger: this.hunger,
            hygene: this.hygene,
        })
    }
}
// --------------------------------------------------------
// TAMAPARROT
// --------------------------------------------------------
class TamaParrot extends Tamagotchi {
    constructor(name) {
        super (name); // using the super keyword inside a constructor runs the constructor from the parent class to set up the properties for the new subclass
        this.name = name;
        this.favouriteFood = "special seeds and nuts";
        this.favouriteToy = "swing";
    }
    feed(){
        this.hunger += 50;
        if (this.hunger > 100) {this.hunger = 100};
        console.log(`${this.name} says 'Polly wants a cracker! And some delicious seeds, and fruits, and maybe a little head scratch while I munch.' (~˘▾˘)~
        hunger: ${this.hunger}%`)
        return this;
    }
    play(){
        this.happiness += 50;
        if (this.happiness > 100) {this.happiness = 100};
        console.log(`${this.name} says 'Squawk! Time for some feathered acrobatics and mimicry. I'll dance, sing, and entertain you with my repertoire of human phrases and goofy moves! (~˘▾˘)~
        happiness: ${this.happiness}%' `);
        return this;
    }
    clean(){
        this.hygene += 50;
        console.log(`${this.name} says 'Water! Water! Time for a shower! Squawk! More! More! Squawk! Scrub-a-dub-dub! (~˘▾˘)~
        hygene: ${this.hygene}%`);
        return this;
    }
    stats() {
        return console.table({
            name: this.name,
            age: this.age,
            weight: this.weight,
            happiness: this.happiness,
            hunger: this.hunger,
            hygene: this.hygene,
        })
    }
}
// --------------------------------------------------------
// TAMARABBIT
// --------------------------------------------------------
class TamaRabbit extends Tamagotchi {
    constructor(name) {
        super (name); // using the super keyword inside a constructor runs the constructor from the parent class to set up the properties for the new subclass
        this.name = name;
        this.favouriteFood = "fruit treat";
        this.favouriteToy = "twisting tunnel";
    }
    feed(){
        this.hunger += 50;
        if (this.hunger > 100) {this.hunger = 100};
        console.log(`${this.name} says 'Nom, nom, nom! I'm hopping with joy over these tasty greens and crunchy pellets.' ꒰ᐢ.‿.ᐢ꒱
        hunger: ${this.hunger}%`)
        return this;
    }
    play(){
        this.happiness += 50;
        if (this.happiness > 100) {this.happiness = 100};
        console.log(`${this.name} says 'Hop to it! Time to engage zoom mode. Witness my supreme agility! ꒰ᐢ.‿.ᐢ꒱
        happiness: ${this.happiness}%' `);
        return this;
    }
    clean(){
        this.hygene += 50;
        console.log(`${this.name} says 'I'd rather be zooming through my tunnel, but if you insist, I'll just pretend I'm on a thrilling water slide. ꒰ᐢ.‿.ᐢ꒱
        hygene: ${this.hygene}%`);
        return this;
    }
    stats() {
        return console.table({
            name: this.name,
            age: this.age,
            weight: this.weight,
            happiness: this.happiness,
            hunger: this.hunger,
            hygene: this.hygene,
        })
    }
}
const tamaDog = new TamaDog("Alfie")
tamaDog.feed().play().clean().stats()