import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';
import {ResizeEvent} from 'angular-resizable-element';
declare var CKEDITOR:any;
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  text:string="Double-cliquez pour éditer Ceci est un texte par défaut, vous pouvez en changer la taille, la couleur et bien sûr le contenu. Conseil design : une belle page est une page simple. Evitez d\'ajouter trop de couleur et de jouer avec les tailles de police.";
  width:number=360;
  height:number=180;
  @Input() ckid:string;
  @Input() dataObject:Object;
  @Output() textClicked:EventEmitter<boolean>=new EventEmitter<boolean>();
  att=false;
  sizeDiv="cc";

  onClickedOutside($event){
      this.sizeDiv="cc";
  }
    
  func2(){
    if(!this.att){
    var ckID=this.ckid;
    setTimeout(function(){
      CKEDITOR.disableAutoInline = true;
		CKEDITOR.inline(ckID, {
      extraPlugins: 'sourcedialog',
    } );
    },2);
  this.att=true;
  }}

  changeClass(){
    this.sizeDiv=null;
    this.textClicked.emit(true);
  }

  constructor() {}
  ngOnInit() {
   $('.textbox').draggable(
     {grid:[90,60],
     containment :"#dropp"
    });
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
 if(this.width<90)
  {
    this.width=90;
  }

  }
}
