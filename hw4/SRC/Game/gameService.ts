import {logger} from "../Utils/logger";
export default class GameService {
    constructor(
        public max: number,
        public min: number,
        public randomNumber: number,
        public name: string='admin',
        public password: string='330650052'
    ) {}

    updateMax(maxNum:number):void {
        this.max = maxNum;               
    }

    updateMin(minNum:number):void {
        this.min = minNum;   
    }

    checkGuess(guessNum:number):string {
        if(guessNum > this.randomNumber) {
            logger.info(`the guess ${guessNum} is too hige`)
            return 'Too High';
        } else if(guessNum < this.randomNumber) {
            logger.info(`the guess ${guessNum} is too low`)
            return 'Too Low';
        } else {
            logger.info(`the guess ${guessNum} is correct`)
            this.newRandomNumber();
            return 'Correct';
        }
    }

    newRandomNumber():void {        
        this.randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        logger.info(`new random number: ${this.randomNumber}`);
    }

    getMax():number{
        return this.max;
    }

    getMin():number{
        return this.min;
    }

    updateNumber(newNumber:number):void{
        this.randomNumber=newNumber;
    }
}
    