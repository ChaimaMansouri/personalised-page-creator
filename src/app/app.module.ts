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
import { AppRoutingModule }     from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import {ResizableModule} from 'angular-resizable-element';
import { ClickOutsideModule } from 'ng-click-outside';
import { VideoComponent } from './container/video/video.component';
import { SafePipe } from './safe.pipe';
import { LigneComponent } from './container/ligne/ligne.component';
import { BoutonComponent } from './container/bouton/bouton.component';
import { ColorComponent } from './container/color/color.component';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { GalerieComponent } from './container/galerie/galerie.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TextboxComponent,
    FacebookComponent,
    ImageComponent,
    VideoComponent,
    SafePipe,
    LigneComponent,
    BoutonComponent,
    ColorComponent,
    GalerieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DndModule.forRoot(),
    Ng2Bs3ModalModule,
    CKEditorModule,
    AppRoutingModule,
    ResizableModule,
    ClickOutsideModule,
    IonRangeSliderModule
  ],
  providers: [
     { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
