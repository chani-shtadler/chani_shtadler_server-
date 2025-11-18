import { Request, Response, NextFunction } from "express";
import { AuthService } from "../Utils/Authentication";
import ManagerRouter from "../Manageer/manageRouter";

const authService = new AuthService();

export function authenticatAdmin(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const token = authHeader?.split(" ")[1]; // פורמט: "Bearer <token>";
  if (!token) {
    return res.status(401).json({ error: "Missing token" });
  }
    
    const decoded  = authService.verifyToken(token); 
    if(decoded){
    (req as any).user = decoded.name;
    next();}

    else res.status(401).send("invalid token")
  }

  export function AuthorizatAdmin(req: Request, res: Response, next: NextFunction) {
  if((req as any).user == "admin")
    next();
  else return res.status(403).json({error: "the user not allow to enter this page"})
}
  
    
  
