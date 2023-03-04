import { Command } from "commander";

const program = new Command();

program
  .option("-d, --debug", "Variable para debug", false)
  .option("-p, --port <port>", "Puerto del servidor", 3000)
  .option("--mode <mode>", "Ambiente", "development")
  .requiredOption("-u, --user <user>", "Usuario")
  .option("-l, --letter [letter...]", "Otros parámetros")
  .parse(process.argv);

console.log(program.opts(), program.args);
