import { Component, OnInit, Input } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {
 
 @Input () buttonText;

 faCoffee = faCoffee;
}
