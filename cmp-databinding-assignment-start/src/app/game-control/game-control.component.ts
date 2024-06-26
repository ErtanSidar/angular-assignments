import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>()
  count: number = 0;
  interval: any;

  startGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.count + 1)
      this.count += 1;
    }, 1000)
  }

  stopGame() {
    clearInterval(this.interval);
  }

}
