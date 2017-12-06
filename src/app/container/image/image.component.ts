import { Component, OnInit , Input,Output,EventEmitter, ElementRef} from '@angular/core';
import {ResizeEvent} from 'angular-resizable-element';
import { ClickOutsideModule } from 'ng-click-outside';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

const URL = 'http://localhost:3000/api/upload';

declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
 
  height:number= 120;
  width:number=180;
  @Input() imageObject:Object;
  img="/assets/apps/img/placeholder.png";
  sizeDiv="cc";
  url;
    @Output() imgClicked:EventEmitter<boolean>=new EventEmitter<boolean>();
    onClickedOutside(e: Event) {
    this.sizeDiv="cc";
  }
  
  clicked(event:EventTarget){
    this.sizeDiv=null;
    this.imgClicked.emit(true);
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

   open(fileInput:HTMLButtonElement) {
  fileInput.click();
  }

fileEvent(fileInput: any){
    let files=fileInput.target.files;
     var fileReader=new FileReader();
      var im:string;
    if(files.length>0 && files[0].name.match(/\.(png|jpg|jpeg)$/)){
      fileReader.onload=(e:any)=>{
        this.img=e.target.result;
        this.url=files[0].name;
      }
        fileReader.readAsDataURL(files[0]);
    }
    else{
      this.img="/assets/apps/img/placeholder.png";
    }

}
  
  constructor(private http: Http, private el: ElementRef) { }
  // upload() {
  //       let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
  //       let fileCount: number = inputEl.files.length;
  //       let formData = new FormData();
  //       if (fileCount > 0) { 
  //               formData.append('photo', inputEl.files.item(0));
  //           this.http
  //             .post(URL,formData).map((res:Response) =>JSON.parse(JSON.stringify(res))).subscribe(
  //                (success) => {
  //                        console.log(success._body);
  //                        this.img="/assets/uploads/"+success._body;
  //                        console.log(this.img);
  //               },
  //               (error) => console.log(error))
          
  //         }
  //      }

  ngOnInit() {
    $('.imageClass').draggable(
     {grid:[90,60],
     containment :"#dropp"
    }
   );
  let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
  inputEl.click();
  }

}
