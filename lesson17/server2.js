const http = require('http'); 
http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');

    const url = require('url') 
    
    const phones = [
        {
            name: 'iphone7',
            price: 14000,
            color: 'black'
        },
        {
            name: 'iphone8',
            price: 18000,
            color: 'white'
        },
        {
            name: 'iphone10',
            price: 24000,
            color: 'pink'
        },
        {
            name: 'iphone11',
            price: 28000,
            color: 'black'
        },
        {
            name: 'sumsung',
            price: 14000,
            color: 'black'
        },
        {
            name: 'xiomi',
            price: 10000,
            color: 'black'
        },
        {
            name: 'meizu',
            price: 8000,
            color: 'green'
        },
        {
            name: 'huaiwei',
            price: 11000,
            color: 'black'
        },
    ];

    res.end(JSON.stringify(phones));

}).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000) );
