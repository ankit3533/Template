import { Component } from '@angular/core';
import { TutorialsComponent } from './tutorials.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello World from Ankit</h1>
            <h2>Parent AppComponent</h2>
            <label>Enter a component value to send to child</label>
            <input type="text" #parentText (keyup)="0">
            <p>value coming back from child--{{childData}}
              <my-tutorials (childEvent)="childData=$event" [parentData]="parentText.value" ></my-tutorials>`,
directives:[TutorialsComponent]
})
export class AppComponent {
  public childData:string;
 }
