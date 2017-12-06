import { Component, OnInit,Input,ViewChild,Output,EventEmitter } from '@angular/core';
import {ResizeEvent} from 'angular-resizable-element';
import { ClickOutsideModule } from 'ng-click-outside';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal'; 

declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-ligne',
  templateUrl: './ligne.component.html',
  styleUrls: ['./ligne.component.css']
})
export class LigneComponent implements OnInit {
  @Output() lineClicked:EventEmitter<boolean>=new EventEmitter<boolean>();
height:number= 60;
  width:number=180;
  done=false;
   @Input() ligneObject:{id,x,y,drag};
   @ViewChild('modal')
    modal: ModalComponent;
  sizeDiv="cc";
  clich="click";
  clicv=null;
  annuler(){
    this.modal.close();
    this.clich="click";
    this.clicv=null;
    this.done=true;
  }
  save(){
    this.done=true;
  }
addClassh(){
this.clich="click";
this.clicv=null;
}
addClassv(){
this.clicv="click";
this.clich=null;
}
  open(){
  this.modal.open();
  this.done=false;
  this.clich="click";
  this.clicv=null;
}
close(){
  this.modal.close();
}
    onClickedOutside(e: Event) {
    this.sizeDiv="cc";
  }

  clicked(event:EventTarget){
    this.sizeDiv=null;
    this.lineClicked.emit(true);
  }

   onResizeEnd(event: ResizeEvent): void {
    let h=event.rectangle.height%60;
    let w=event.rectangle.width%90;

    if(h>30){
      this.height=event.rectangle.height-h+60;
    }
    else{
      this.height=event.rectangle.height-h;
    }
    if(w>45){
      this.width=event.rectangle.width-w+90;
    }
    else{
     this.width=event.rectangle.width-w;
    }
 if(this.height<60)
  {this.height=60}
 if(this.width<180)
  {
    this.width=180;
  } 
  }
  constructor() { }

  ngOnInit() {
     this.modal.open();
    $('.ligneClass').draggable(
     {grid:[90,60],
     containment :"#dropp"
    }
   );
  }

}
