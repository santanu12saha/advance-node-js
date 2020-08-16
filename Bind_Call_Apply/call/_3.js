// Using call to invoke an anonymous function

const animals = [
    { species: 'Lion', name: 'king'},
    { species: 'Whale', name: 'Fail'}
];

for(let i = 0; i < animals.length; ++i) {
    (function(i) {
        this.print = function () {
            console.log(`# ${i} ${this.species} : ${this.name}`);
        }
        this.print();
    }).call(animals[i], i);
}