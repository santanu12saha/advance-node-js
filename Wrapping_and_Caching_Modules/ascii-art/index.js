require('./ascii-art')();
//console.log(require.cache); // The node require.cache caches the above require.  
//delete require.cache['/home/santanu/workspace-advance-node-js/advance-node-js/Wrapping_and_Caching_Modules/ascii-art/ascii-art.js']; // To load the second time, we have to delete the file ascii-art.js in require.cache 
require('./ascii-art')();