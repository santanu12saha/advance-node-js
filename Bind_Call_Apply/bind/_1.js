let person = {
    name: 'Santanu Saha',
    getName: function() {
        console.log(this.name);
    }
};

let fullName = person.getName.bind(person);

setTimeout(fullName, 1000);