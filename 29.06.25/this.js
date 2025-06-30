const q = {
    description: "3 + 5",
    ask: function () {
        console.log(this.description);
    },
    askArrow: () => {
        console.log(this.description);
    }
}

// function decorator(fn) {
//     const start = Date.now();
//     fn();
//     const end = Date.now();
//     return end - start;
// }

// decorator(q.ask.call());
q.ask()
q.askArrow()