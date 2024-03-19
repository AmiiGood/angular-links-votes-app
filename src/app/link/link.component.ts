import { Component, Input, HostBinding } from '@angular/core';
import { Link } from './link.model';



@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() link: Link;

  constructor(){
  }
}
