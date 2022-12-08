import 'reflect-metadata';
import 'src/external/envConfig';

import { app } from './app';
import connectToDatabase from './database/mongodb';

const PORT = process.env.PORT ?? 3001;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
  })
  .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });
