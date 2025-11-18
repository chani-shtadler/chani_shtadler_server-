import jwt from "jsonwebtoken";

const SECRET_KEY = "my_secret_key"; 

export class AuthService {
  generateToken(name: string): string {    
    const payload = { name };    
    return jwt.sign(payload, SECRET_KEY, { expiresIn: "1w" });
  }

 
  verifyToken(token: string): any {
        return jwt.verify(token, SECRET_KEY);
  }
}