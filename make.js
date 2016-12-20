var webmake = require('webmake');

webmake('src/carota.js', { output: 'carota-debug.js' }, function(result) {
    if (!result) {
        console.log('All good');
    } else {
        console.log(result);
    }
});
