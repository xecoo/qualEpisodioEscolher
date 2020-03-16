import express, { Request, Response } from "express";
import { ApiRouter } from "./router";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post("/:route", async (req: Request, res: Response) => {
  try {
    const result = await ApiRouter.handleRoute(req.params.route, req);
    const response = {
      result
    };
    res.status(200).send(response);
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.get("/:route", async (req: Request, res: Response) => {
  try {
    const result = await ApiRouter.handleRoute(req.params.route, req);
    const response = {
      result
    };
    res.status(200).send(response);
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.put("/:route", async (req: Request, res: Response) => {
  try {
    const result = await ApiRouter.handleRoute(req.params.route, req);
    const response = {
      result
    };
    res.status(200).send(response);
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.delete("/:route", async (req: Request, res: Response) => {
  try {
    const result = await ApiRouter.handleRoute(req.params.route, req);
    const response = {
      result
    };
    res.status(200).send(response);
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

export default app;
