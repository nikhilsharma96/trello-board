import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import {  NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { TrelloModalComponent } from './trello-modal/trello-modal.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    TrelloModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule
  ],
  providers: [
    NgbActiveModal,
    NgbModal,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
