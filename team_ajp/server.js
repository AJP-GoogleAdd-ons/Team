'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

// �t�@�C�����W���[��
var fs = require('fs');

http.createServer(function (req, res) {
    //�R:�t�@�C���ǂݍ���
    fs.readFile('public/teamAJP.html', 'UTF-8',
        (error, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
}).listen(port);
