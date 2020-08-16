let name = {
    firstName: 'Santanu',
    lastName: 'Saha',
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    } 
};

let fullName = function(snack, hobby) {
    console.log(`${this.getFullName()} I choose you!`);
    console.log(`${this.getFullName()} loves ${snack} and ${hobby}`);
}

let logFullName = fullName.bind(name); 
logFullName('french fries', 'algorithms');