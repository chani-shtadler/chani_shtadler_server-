import express, { Request, Response } from "express";
import GameService from "../Game/gameService";
import { authenticatAdmin, AuthorizatAdmin } from "../middleWares/auth";
import { AuthService } from "../Utils/Authentication";

const router = express.Router();
const gameService = new GameService(100, 1, 0);
const authService = new AuthService();


router.post("/login", (req: Request, res: Response) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(400).json({ error: "Missing name or password" });
  }

  if (name === gameService.name && password === gameService.password) {
    const token = authService.generateToken(name);
    return res.json({ token });
  }

  return res.status(401).json({ error: "Invalid credentials" });
});

router.use(authenticatAdmin, AuthorizatAdmin);

router.post("/range", (req: Request, res: Response) => {
  let {minNum, maxNum} = req.body;
  if (isNaN(minNum) || isNaN(maxNum)) {
    return res.status(400).json({ error: "min and max must be numbers" });
  }
  if (minNum > maxNum) {
    return res.status(400).json({ error: "min must be <= max" });
  }

  gameService.updateMin(minNum);
  gameService.updateMax(maxNum);
  gameService.newRandomNumber();

  return res.json({
    message: "Range updated and new random generated",
    min: gameService.getMin(),
    max: gameService.getMax(),
    random: gameService.randomNumber
  });
});

router.post("/newnumber", (req: Request, res: Response) => {
  let randNum = req.body;
  if (isNaN(randNum)) {
    return res.status(400).json({ error: "value must be a number" });
  }
  if (randNum < gameService.getMin() || randNum > gameService.getMax()) {
    return res.status(400).json({
      error: `value must be within min (${gameService.getMin()}) and max (${gameService.getMax()})`
    });
  }

  gameService.randomNumber = randNum;
  return res.json({ message: "Random value set manually", random: gameService.randomNumber });
});


router.post("/randomagein", (req: Request, res: Response) => {
  gameService.newRandomNumber();
  return res.json({ message: "New random generated", random: gameService.randomNumber });
});


router.get("/random", (req: Request, res: Response) => {
  return res.json({ random: gameService.newRandomNumber() });
});

export default router;
