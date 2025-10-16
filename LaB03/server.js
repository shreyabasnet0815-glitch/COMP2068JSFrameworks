/**
 * LAB03 - Node.js Simple Calculator using Connect
 * Author: Shreya Basnet
 * Description:
 * This Node.js server uses the Connect module to perform basic calculator
 * operations (add, subtract, multiply, divide) using query parameters in the URL.
 */

const connect = require('connect');
const http = require('http');

const app = connect();

/**
 * Calculator handler
 * Handles requests like: /lab3?method=add&x=16&y=4
 */
function calculator(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const method = (url.searchParams.get('method') || '').toLowerCase();
  const x = parseFloat(url.searchParams.get('x'));
  const y = parseFloat(url.searchParams.get('y'));

  res.setHeader('Content-Type', 'text/plain');

  // Validate inputs
  if (!method || isNaN(x) || isNaN(y)) {
    res.statusCode = 400;
    res.end(
      '❌ Error: Missing or invalid parameters.\n' +
      'Example: /lab3?method=add&x=16&y=4\n'
    );
    return;
  }

  let result;
  let symbol;

  // Perform operation based on method
  switch (method) {
    case 'add':
      result = x + y;
      symbol = '+';
      break;
    case 'subtract':
      result = x - y;
      symbol = '-';
      break;
    case 'multiply':
      result = x * y;
      symbol = '*';
      break;
    case 'divide':
      if (y === 0) {
        res.statusCode = 400;
        res.end('❌ Error: Division by zero is not allowed.\n');
        return;
      }
      result = x / y;
      symbol = '/';
      break;
    default:
      res.statusCode = 400;
      res.end('❌ Error: Invalid method. Use add, subtract, multiply, or divide.\n');
      return;
  }

  res.end(`${x} ${symbol} ${y} = ${result}\n`);
}

// Use /lab3 for this lab
app.use('/lab3', calculator);

// Root route message
app.use('/', (_req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end(
    '✅ Server is running!\n' +
    'Try opening in browser:\n' +
    '👉 http://localhost:3000/lab3?method=add&x=16&y=4\n'
  );
});

// Create and start the server
http.createServer(app).listen(3000, () => {
  console.log('🚀 Server running at: http://localhost:3000');
  console.log('🔹 Try this in your browser: /lab3?method=add&x=16&y=4');
});
