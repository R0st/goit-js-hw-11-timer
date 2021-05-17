
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`${this.selector} span[data-value="days"]`),
      hours: document.querySelector(`${this.selector} span[data-value="hours"]`),
      mins: document.querySelector(`${this.selector} span[data-value="mins"]`),
      secs: document.querySelector(`${this.selector} span[data-value="secs"]`),
    };
  }

    interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const time = this.targetDate - currentTime;
      this.getTimeComponents(time);
      this.clearTimer(time);
    }, 1000);
  
  getTimeComponents(time) {
    const days = this.padThreeNumber(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  
    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`;
  }
    padThreeNumber(value) {
      return String(value).padStart(3, '0');
    }
    pad(value) {
      return String(value).padStart(2, '0');
    }
  clearTimer(time) {
    if (time < 0) {
      clearInterval(this.interval);
      document.getElementById('timer-1').innerText = "События завершилось...((( Ждем лучших акций ))) ";
    };
  }
}
  
 new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 18, 2021'),
});


//просто таймер обратного отсчета
// const timer = {
//   start() {
//     const startTime = new Date(2021,5,17,16,58,30).getTime();
//     const interval =  setInterval(() => {
//       // const currentTime = Date.now();
//       const currentTime = new Date().getTime();
//       const time = startTime-currentTime;
//       const { days, hours, mins, secs } = getTimeComponents(time);
//       console.log(`${days}:${hours}:${mins}:${secs}`);

//       // console.log(startTime);
//       // console.log(currentTime-startTime);
//     }, 1000);
//   },
// };

// timer.start();

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function padThreeNumber(value) {
//   return String(value).padStart(3, '0');
// }

// function getTimeComponents(time) {
 
//   const days = padThreeNumber(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   return { days, hours, mins, secs };
  
//   if (time < 0) {
//     clearInterval(interval);
//     document.getElementById('timer-1').innerText = "События завершилось";
//   } 
// };

//NaN
// class CountdownTimer {
//   constructor({selector, targetDate}) {
//     this.selector = selector;
//     this.targetDate = targetDate;
   
//   }

//   interval = setInterval(() => {
//     //  const currentTime = new Date().getTime();
//     const currentTime = Date.now();
//     const time = this.targetDate - currentTime;
//     this.getTimeComponents(time);
//     // this.clearTimeComponents(time);
//   }, 1000);

//   getTimeComponents(time) {
//     const days = this.padThreeNumber(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))); 
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  
//     document.querySelector('[data-value="days"]').textContent = 2;
//     document.querySelector('.value[data-value="hours"]').textContent = 3;
//     document.querySelector('[data-value="mins"]').textContent = mins;
//     document.querySelector('[data-value="secs"]').textContent = secs;
 
//       if (time < 0) {
//         clearInterval(this.interval);
//         document.getElementById('timer-1').textContent = "События завершилось";
//       }
//   }
//     pad(value) {
//       return String(value).padStart(2, '0');
//     }
//     padThreeNumber(value) {
//       return String(value).padStart(3, '0');
//   }

// };

//  new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2021'),
// });