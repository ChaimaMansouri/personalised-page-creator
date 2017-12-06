import { Component, OnInit,Input,ViewChild ,Output,EventEmitter} from '@angular/core';
import {ResizeEvent} from 'angular-resizable-element';
import { ClickOutsideModule } from 'ng-click-outside';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal'; 
import {Video} from './video';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Output() vClicked:EventEmitter<boolean>=new EventEmitter<boolean>();
  video:Video={"_id":"","url":"","videoid":""}
  height:number= 240;
  width:number=450;
  str:string;
  im:string;
  @Input() videoObject:{id,x,y,drag};
   @ViewChild('modal')
    modal: ModalComponent;
  sizeDiv="cc";
  save()
  {
    let url=this.str.replace("watch?v=","embed/")+"?start=0";
    let img =url.split('/');
    let inn="http://img.youtube.com/vi/"+img[4]+"/0.jpg";
    this.im=inn;
    this.video={"_id":this.videoObject.id,"url":url,"videoid":this.videoObject.id};
  }
open(){
  this.modal.open();
}
close(){
  this.str="";
  this.modal.close();
}
    onClickedOutside(e: Event) {
    this.sizeDiv="cc";
  }

  clicked(event:EventTarget){
    this.sizeDiv=null;
    this.vClicked.emit(true);
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
 if(this.height<120)
  {this.height=120}
 if(this.width<180)
  {
    this.width=180;
  } 
  }

  constructor() { }

  ngOnInit() {
    this.modal.open();
    $('.videoClass').draggable(
     {grid:[90,60],
     containment :"#dropp"
    }
   );}
}
