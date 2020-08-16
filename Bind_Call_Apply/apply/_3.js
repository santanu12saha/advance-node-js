// Using apply to chain constructors

// using Object.create() 

/* Function.prototype.construct = function(aArgs) {
    let oNew = Object.create(this.prototype);
    this.apply(oNew, aArgs);
    return oNew;
}; */

// Using Object.__proto__:

/* Function.prototype.construct = function (aArgs) {
    let oNew = {};
    oNew.__proto__ = this.prototype;
    this.apply(oNew, aArgs);
    return oNew;
}; */

// Using closures

/*Function.prototype.construct = function (aArgs) {
    let fConstructor = this;
    let fNewConstr = function () {
        fConstructor.apply(this, aArgs);
    };
    fNewConstr.prototype = fConstructor.prototype;
    return new fNewConstr();
};*/

// Using the Function constructor:

Function.prototype.construct = function (aArgs) {
    let fNewConstr = new Function("");
    fNewConstr.prototype = this.prototype;
    let oNew = new fNewConstr();
    this.apply(oNew, aArgs);
    return oNew;
};

function MyConstructor() {
    for (let nProp = 0; nProp < arguments.length; nProp++) {
        this['property' + nProp] = arguments[nProp];
    }
}

let myArray = [4, 'Hello world!', false];
let myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1);                // logs 'Hello world!'
console.log(myInstance instanceof MyConstructor); // logs 'true'
console.log(myInstance.constructor);   // logs 'MyConstructor'  