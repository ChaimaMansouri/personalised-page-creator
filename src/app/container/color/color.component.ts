import { Component, OnInit ,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
@Output() dataColor:EventEmitter<string>=new EventEmitter<string>();
per;
  constructor() { }

  ngOnInit() {
  }
  sendData(event:any)
  {
    if(!this.per){
    this.dataColor.emit(event.target.dataset.color);}
    else{
      this.dataColor.emit(this.per);
    }
  }

}
