import { Application } from './src/config';
import './src/jobs';
import './src/config/database';

const app = new Application();

app.listen(`Server is running on port: ${process.env.PORT || 3000}`);
