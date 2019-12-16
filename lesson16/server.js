const http = require('http'); // подключаем http модуль!
http.createServer((req, res) => {
	// 1
	// res.end('HELLO WORLD');
	
	let obj = { name: 'SERGEi', lastName: 'SHAKHOV' };

	if (req.url === '/data') {
		res.end('success');
	}
	res.end(JSON.stringify(obj));

}).listen(3000, '127.0.0.1', () => console.log('Server is listening on port:' + 3000) );
