const http = require('http'); 
const url = require('url') 
let port = 3000;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let q = url.parse(req.url, true);
    let qdata = q.query;
    let qSearch = q.search;
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
    // http://localhost:3000/phones?priceS=7000&priceF=40000&color=black - вот пример, где ?priceS=7000&priceF=40000&color=black -  query

    if (req.url === '/phones') {
        res.end(JSON.stringify(phones));
    }
    if (req.url.includes('/phones?')) {
        let phonesArr = phones.filter(i => {
            if((i.color == qdata.color) && (qdata.priceS <= i.price) && ( i.price <= qdata.priceF) ) {
                return i;
            }
        });
        if(phonesArr.length != 0) {
            res.end(JSON.stringify(phonesArr));
        } else {
            res.end(JSON.stringify('Please enter three parameters'));
        }
        
    }

    res.end(JSON.stringify('Hellow!'));

}).listen(port, '127.0.0.1', () => console.log(`Server is listening on port: ${port}`) );
