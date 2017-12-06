import { Component, OnInit,Input,ViewChild ,Output,EventEmitter} from '@angular/core';
import {ResizeEvent} from 'angular-resizable-element';
import { ClickOutsideModule } from 'ng-click-outside';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal'; 

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.css']
})
export class BoutonComponent implements OnInit {
@Output() bClicked:EventEmitter<boolean>=new EventEmitter<boolean>();
  height:number= 60;
  width:number=180;
   @Input() boutonObject:{id,x,y,drag};
   @ViewChild('modal')
    modal: ModalComponent;
  sizeDiv="cc";
txt:string;
finaltxt:string;
taille="Moyen";
bold=true;
italic=false;
underline=false;
b="bold";
i="none";
u="none";
t="medium";
ref:string="Page web d'un autre site";
other=true;
file=false;
own=false;
site;
psite="Choisissez";
pageNew=false;
pageCourante=true;
fileFinal;
annuler(){
  this.txt=this.finaltxt;
 if(this.t==="medium"){
    this.taille="Moyen";
  }
  else if(this.t==="small")
    {
      this.taille="Petit";
    }
    else if(this.t==="larger"){
      this.taille="Grand";
    }
    if(this.b==="bold"){
     this.bold=true;
    }
    else{
      this.bold=false;
    }
    if(this.i==="italic"){
          this.italic=true;
    }
    else{
     this.italic=false;
    }
    if(this.u==="underline"){
         this.underline=true;
    }
        else{
              this.underline=false;
        }
   this.fileFinal="";
}
save(){
if(this.taille==="Moyen"){
    this.t="medium";
  }
  else if(this.taille==="Petit")
    {
      this.t="small";
    }
    else if(this.taille==="Grand"){
      this.t="larger";
    }
    if(this.bold){
      this.b="bold";
    }
    else{
      this.b="none";
    }
    if(this.italic){
          this.i="italic";
    }
    else{
     this.i="none";
    }
    if(this.underline){
          this.u="underline";
    }
        else{
              this.u="none";
        }
this.finaltxt=this.txt;
}

checkPageC(){
this.pageCourante=true;
this.pageNew=false;
}
checkPageN(){
this.pageCourante=false;
this.pageNew=true;
}
selectChange(){
  if(this.ref==="Page web d'un autre site"){
    this.other=true;
    this.file=false;
    this.own=false;
  }
  else if(this.ref==="Page web du site"){
    this.other=false;
    this.file=false;
    this.own=true;
  }
  else if(this.ref==="Fichier")
    {
       this.other=false;
    this.file=true;
    this.own=false;
    }
}
boldCheck(){
  if(this.bold){
    this.bold=false;
  }
  else
  {
    this.bold=true;
  }
}
italicCheck(){
   if(this.italic){
    this.italic=false;
  }
  else
  {
    this.italic=true;
  }
}
uderCheck(){
  if(this.underline){
    this.underline=false;
  }
  else
  {
    this.underline=true;
  }
}
openfile(fileinput:HTMLButtonElement){
fileinput.click();
}
fileChoisi($event:any){
  this.fileFinal=$event.target.files[0].name;
}
    open(){
  this.modal.open();}

  close(){
  this.modal.close();
}

 onClickedOutside(e: Event) {
    this.sizeDiv="cc";
  }

  clicked(event:EventTarget){
    this.sizeDiv=null;
    this.bClicked.emit(true);
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
    $('.boutonClass').draggable(
     {grid:[90,60],
     containment :"#dropp"
    }
   );
  }

}
