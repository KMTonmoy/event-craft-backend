import { Server } from 'http';
import app from './app';

const port = 5000;

async function main() {
  const server: Server = app.listen(port, () => {
    console.log('Server is running on port', port);
  });

  process.on('SIGTERM', () => {
    server.close(() => process.exit(0));
  });
} 

main();
