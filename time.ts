import { Persistor, Persistant } from "persistancy"

export interface TimeAmount {
  hours: number
  minutes: number
  seconds: number
}


export class GameTime implements Persistant {

  hoursInADay = 24
  minutesInAHour = 60
  secondsInAMinute = 60

  secondsInADay = this.hoursInADay * this.minutesInAHour * this.secondsInAMinute
  
  secondsInAHour = this.secondsInADay / this.hoursInADay
  
  currTime

  constructor() {
    console.log('construct');
    
    this.retrieve()
  }


  pushTime(amount: TimeAmount) {
    const newSeconds = amount.hours * this.secondsInAHour +
                        amount.minutes * this.secondsInAMinute +
                        amount.seconds
    this.currTime = (this.currTime + newSeconds) % this.secondsInADay
    
    this.persist()
  }

  getCurrentHour() : number {
    return Math.floor(this.currTime / this.secondsInAHour)
  }

  key = 'game-time'

  persist() {
    Persistor.persist(this.key, { currTime: this.currTime })
  } 

  retrieve() {
    console.log(Persistor.retrieve(this.key));
    
    this.currTime = Persistor.retrieve(this.key)?.currTime || 0
  }

}