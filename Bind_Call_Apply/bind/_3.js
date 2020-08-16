let name = {
    firstName: 'Santanu',
    lastName: 'Saha',
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    } 
};

let fullName = function() {
    console.log(`${this.getFullName()} I choose you!`);
}

let logFullName = fullName.bind(name); 
logFullName();