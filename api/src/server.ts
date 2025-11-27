import Express from "express";
import cors from "cors";

const server = Express();

server.use(cors());
server.use(Express.json());

server.listen(4000, () => {
  console.log("Rodando em http://localhost:4000");
});
