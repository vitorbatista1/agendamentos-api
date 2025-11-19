import express from 'express';
import { routes } from './infra/http/routes/';


const app = express();
app.use(express.json());

app.use(routes);


app.listen(3000, () => {
  console.log("🔥 Server rodando na porta 3000");
});