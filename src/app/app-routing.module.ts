import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DndModule} from 'ng2-dnd';
 import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { TextboxComponent } from './container/textbox/textbox.component';
import { FacebookComponent } from './container/facebook/facebook.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { ImageComponent } from './container/image/image.component';
import { RouterModule, Routes}   from '@angular/router';

 
const routes: Routes = [

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}