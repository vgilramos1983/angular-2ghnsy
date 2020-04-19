import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  vlr1: number = 0;
  vlr2: number = 0;

  sumar():number{
    let sumar : number;
    sumar = this.vlr1 + this.vlr2;
    return sumar;
  }
}
