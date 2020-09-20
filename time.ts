
export interface TimeAmount {
  hours: number
  minutes: number
  seconds: number
}

export class GameTime {

  hoursInADay = 24
  minutesInAHour = 60
  secondsInAMinute = 60

  secondsInADay = this.hoursInADay * this.minutesInAHour * this.secondsInAMinute
  
  secondsInAHour = this.secondsInADay / this.hoursInADay
  
  

  constructor(private currTime: number) {}


  pushTime(amount: TimeAmount) {
    const newSeconds = amount.hours * this.secondsInAHour +
                        amount.minutes * this.secondsInAMinute +
                        amount.seconds
    this.currTime = (this.currTime + newSeconds) % this.secondsInADay
  }

  getCurrentHour() : number {
    return Math.floor(this.currTime / this.secondsInAHour)
  }

}