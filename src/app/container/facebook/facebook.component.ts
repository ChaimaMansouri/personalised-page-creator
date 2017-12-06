import { Component, OnInit, Input } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css'],
})
export class FacebookComponent implements OnInit {
modal:ModalComponent;
@Input() dataObject;
open()
{
  this.modal.open();
}
  constructor() { }

  ngOnInit() {
  }

}
