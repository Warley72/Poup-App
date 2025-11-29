import Express from "express";
import cors from "cors";
import routes from "./routes"; // <-- IMPORTANTE

const server = Express();

server.use(cors());
server.use(Express.json());
server.use(routes); // <-- AQUI ESTAVA FALTANDO

server.listen(4000, () => {
  console.log("Rodando em http://localhost:4000");
});
