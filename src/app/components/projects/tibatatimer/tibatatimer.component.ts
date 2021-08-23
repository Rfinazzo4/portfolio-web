import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tibatatimer',
  templateUrl: './tibatatimer.component.html',
  styleUrls: ['./tibatatimer.component.scss']
})
export class TibatatimerComponent implements OnInit {

  public timer: string = '00:00';
  public timerText: string = 'GO GO GO!';
  constructor() { }

  ngOnInit(): void {
  }

}
