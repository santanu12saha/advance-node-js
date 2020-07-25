var version = process.versions.v8.split(".");
if(version[0] < 4){
    console.log(`I am older version ${version[0]}`);
}else{
    console.log(`I am newer version ${version[0]}`);
}
//instead of directly reading
//process.env.PORT

//read from a config utility always
const { config } = require('./util');

console.log(config.port);

const lts = process.release.lts;
if(lts) {
    console.log(`LTS support is there we can use in production mode ${lts}`);
}else {
    console.log(`LTS support is not there we can not use in production mode ${lts}`);
}