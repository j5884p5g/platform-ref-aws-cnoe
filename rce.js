const cp = require('child_process');
const path = require('path');
process.env.PATH = path.join(process.cwd(), 'node_modules', '.bin') + path.delimiter + process.env.PATH;
