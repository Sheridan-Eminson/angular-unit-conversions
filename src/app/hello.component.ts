import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Welcome{{name}}!</h1>`,
  styles: [`h1 { color:white; font-family: cooper-black; text-align:center; background-color: #507a91; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
