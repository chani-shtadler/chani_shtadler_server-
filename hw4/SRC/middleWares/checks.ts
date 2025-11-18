import gameService from "../Game/gameService";
import {logger} from "../Utils/logger";
import { Request, Response, NextFunction } from "express";



    export function check(gameService: gameService, randomNumber:number, res: Response) {
        
        if (randomNumber === undefined) {
            logger.error("no number provided for prime check");
            return res.status(400).json({ error: "no number provided for prime check" });//זה מחזיר שגיאה אם לא קיבל מספר לבדוק אם הוא ראשוני לקובץ Gamerouter.ts
        }

        
        if (isNaN(randomNumber)) {
            logger.error("Invalid number provided for prime check");
            return res.status(400).json({ error: "Invalid number provided for prime check" });
        }

        const min = gameService.getMin();
        const max = gameService.getMax();
        if (randomNumber < min || randomNumber > max) {
            logger.error(`Number ${randomNumber} is out of bounds for prime check`);
            return res.status(400).json({ error: `Number ${randomNumber} is out of bounds for prime check` });
        }

        // אם הכל תקין, שומרים את המספר המאומת בבקשה וממשיכים
        const num=randomNumber;//validatedRandom זה שם פרופרטי חדש שהוספנו לאובייקט הבקשה כדי לשמור את המספר המאומת
        // next();//מעבר למידלוור הבא ששמו check
    };

