import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadFileService } from '../../../services/uploadfile.service';

@Component({
    selector: 'list-upload',
    templateUrl: './upload-list.component.html',
    styleUrls: ['./upload-list.component.css']
})
export class ListUploadComponent implements OnInit {

    showFile = false;
    fileUploads: Observable<string[]>;

    constructor(private uploadService: UploadFileService) { }

    ngOnInit() {
    }

    showFiles(enable: boolean) {
        this.showFile = enable;

        if (enable) {
            this.fileUploads = this.uploadService.getFiles();
        }
    }
}
