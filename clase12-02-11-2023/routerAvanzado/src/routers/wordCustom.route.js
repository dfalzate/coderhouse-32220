import Router from "./router.js";

class WordRouter extends Router {
  init() {
    this.get("/", ["ADMIN", "USER"], (req, res) => {
      res.sendUserError("Hola coderhouse");
    });
  }
}

export default new WordRouter();
