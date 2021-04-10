import { Application } from './src/config';

const app = new Application();

app.listen(`Server is running on port: ${process.env.PORT || 3000}`);
