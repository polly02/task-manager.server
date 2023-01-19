import { config } from 'dotenv';
import app from './src/app';

config();

const port = process.env.PORT;

app.listen(port, () => console.log(`Server run on ${port} port`));
