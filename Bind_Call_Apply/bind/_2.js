let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(`${this.name} run at ${speed} mph.`);
    }
}

let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(`${this.name} fly at ${speed} mph.`);
    }
}

let run = runner.run.bind(flyer, 20); // method borrowing
run();