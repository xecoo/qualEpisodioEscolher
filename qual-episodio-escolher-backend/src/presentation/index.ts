import express, { Request, Response } from "express";
import { ApiRouter } from "./router";
import cors from "cors";

const app = express();
app.use(express.json()); // Linha mágica (middleware)
app.use(cors({ origin: true }));

const generateRoute = (
  path: string,
  childPath?: string,
  grandChildPath?: string
): string => {
  let route = path;
  if (childPath) {
    route = `${route}/${childPath}`;
    if (grandChildPath) {
      route = `${route}/${grandChildPath}`;
    }
  }
  return route;
};

app.post("/:path/:childPath", async (req: Request, res: Response) => {
  try {
    const path = generateRoute(req.params.path, req.params.childPath);
    const result = await ApiRouter.handleRoute(path, req);
    const response = {
      result
    };
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.get("/:path/:childPath", async (req: Request, res: Response) => {
  try {
    const path = generateRoute(req.params.path, req.params.childPath);
    const result = await ApiRouter.handleRoute(path, req);
    const response = {
      result
    };
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.put("/:path/:childPath", async (req: Request, res: Response) => {
  try {
    const path = generateRoute(req.params.path, req.params.childPath);
    const result = await ApiRouter.handleRoute(path, req);
    const response = {
      result
    };
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.delete("/:path/:childPath", async (req: Request, res: Response) => {
  try {
    const path = generateRoute(req.params.path, req.params.childPath);
    const result = await ApiRouter.handleRoute(path, req);
    const response = {
      result
    };
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.post("/:path", async (req: Request, res: Response) => {
  try {
    const path = generateRoute(req.params.path);
    const result = await ApiRouter.handleRoute(path, req);
    const response = {
      result
    };
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.get("/:path", async (req: Request, res: Response) => {
  try {
    const path = generateRoute(req.params.path);
    const result = await ApiRouter.handleRoute(path, req);
    const response = {
      result
    };
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.put("/:path", async (req: Request, res: Response) => {
  try {
    const path = generateRoute(req.params.path);
    const result = await ApiRouter.handleRoute(path, req);
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

app.delete("/:path", async (req: Request, res: Response) => {
  try {
    const path = generateRoute(req.params.path);
    const result = await ApiRouter.handleRoute(path, req);
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
