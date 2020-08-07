const http = require('http');

const req = http.request(
    {hostname: 'www.google.com'},
    (res) => {
        console.log(res.statusCode);
        console.log(res.headers);

        res.on('data', (data) => {
            console.log(data.toString());
        });
    }
);

// here request error will capture based on event listener error invoke
req.on('error', (e) => console.log(e));

// for request object we have to explicitly terminate the stream
req.end();