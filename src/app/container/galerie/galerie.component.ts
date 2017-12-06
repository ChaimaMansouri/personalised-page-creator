import { Component, OnInit , Input,Output,EventEmitter, ElementRef,ViewChild} from '@angular/core';
import {ResizeEvent} from 'angular-resizable-element';
import { ClickOutsideModule } from 'ng-click-outside';
import { Http, Response } from '@angular/http';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal'; 
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {
height:number= 120;
  width:number=180;
  album=[];
  @ViewChild('modal')
  modal: ModalComponent;
  gal=false;
  img=[];
  photo;
  @Input() galerieObject:Object;
  sizeDiv="cc";
  ref;
  animationClass;
    @Output() galClicked:EventEmitter<boolean>=new EventEmitter<boolean>();

    changeGal(){
      if(this.ref!=undefined && this.ref!="Choisissez"){
      this.http.post('http://localhost:3000/api/getGal',{dir:this.ref}).subscribe(data => {
      this.img=data.json();
    });
    this.gal=false;
      }
      }
    save(){
      if(this.img.length>0){
        this.gal=true;
        var i=0;
        this.photo="/assets/apps/galerie/"+this.ref+"/"+this.img[0];
        setTimeout(()=> {
            this.animationClass="anim";
          }, 7000);
            setInterval(()=>{ 
              if(i<this.img.length-1)
          { i++;
            this.animationClass=null;
          this.photo="/assets/apps/galerie/"+this.ref+"/"+this.img[i];
          setTimeout(()=> {
            this.animationClass="anim";
          }, 7000);
          }
          else{
            i=0;
            this.animationClass=null;
            this.photo="/assets/apps/galerie/"+this.ref+"/"+this.img[0];
              setTimeout(()=> {
            this.animationClass="anim";
          }, 7000);
          }
        },8000);
        }
      else{
        this.gal=false;
      }
    }
    open(){
    this.modal.open();
    }
  close(){
  this.modal.close();
  }
    onClickedOutside(e: Event) {
    this.sizeDiv="cc";
  }

  clicked(event:EventTarget){
    this.sizeDiv=null;
    this.galClicked.emit(true);
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

  constructor(private http: Http) { }

  ngOnInit() {
       $('.galerieClass').draggable(
     {grid:[90,60],
     containment :"#dropp"
    }
   );
   this.http.get('http://localhost:3000/api/galerie').subscribe(data => {
      data.json().forEach(element => {
        this.album.push(element);
      });
    });
      
  this.open();
  }
  

}
