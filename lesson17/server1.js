const http = require('http');
http.createServer((req, res) => {

	res.setHeader('Access-Control-Allow-Origin', '*');
	
    let obj = {
        data: {
            question: 'How are you',
            answer: 'I am good'
        }
	}

	res.end(JSON.stringify(obj));

}).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000) );
