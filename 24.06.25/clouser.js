let counter = 0;
function spellFactory(str) {
    counter++;
    const level = counter;
    return () => {
        console.log(`${str} level: ${level}`);
    }
}

const fireball = spellFactory("fireball");
const fireball2 = spellFactory("fireball2");
const fireball3 = spellFactory("fireball3");

fireball()
fireball2()
fireball()
fireball3()
fireball()