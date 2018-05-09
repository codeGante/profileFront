import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { PerfilListComponent } from '././components/perfil-list.component';
import { DetailsUploadComponent } from './components/upload/detail-upload/details-upload.component';
import { FormUploadComponent } from './components/upload/form-upload/form-upload.component';
import { ListUploadComponent } from './components/upload/list-upload/upload-list.component';

import { PerfilService } from '././services/perfil.service';
import { UploadFileService } from '././services/uploadfile.service';

import { NumberOnlyDirective } from './diretive/number-directive';


@NgModule({
  declarations: [
    AppComponent,
    PerfilListComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent,
    NumberOnlyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [PerfilService, UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
