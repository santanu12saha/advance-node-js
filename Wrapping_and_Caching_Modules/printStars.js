const print = (stars, header) => {
    console.log('*'.repeat(stars));
    console.log(header);
    console.log('*'.repeat(stars));
};

if(require.main === module) {
    // Running as a script
    print(process.argv[2], process.argv[3]);
}else {
    // being required
    module.exports = print;
}

