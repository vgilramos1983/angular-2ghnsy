import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Operacion matematica</h1>
            <h1>El resultado de la suma es: {{suma}}</h1>
            `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() suma: number;
}
