import { clear } from 'console';
import EventEmitter from 'events'; 
const emitter = new EventEmitter();

export class time {
    constructor( 
        private count: number = 0,
        private max: number
    ) {}
    clock(func: any) {
        emitter.on('continue', func);
    }
    tick(): void {
        this.count++;
        if (this.count >= this.max) {
            this.count = 0;
            emitter.emit('continue');    
        }
    }
    toString(): string {
        return this.count.toString().padStart(2, '0');
    }
}


let hours: time = new time(0, 24);
let menutes: time = new time(0, 60);
let seconds: time = new time(0, 60);

seconds.clock(() => {
  
    menutes.tick();
});

menutes.clock(() => {
 
    hours.tick();
});

const printTime = () => {
    console.log(`${hours.toString()}: ${menutes.toString()}: ${seconds.toString()}`);
    const interval = setInterval(() => {
        clear();
    }, 10000);
};
console.log(`hour: menutes: seconds`);
printTime(); 

setInterval(() => {
    seconds.tick(); 
    printTime();   
}, 1000);