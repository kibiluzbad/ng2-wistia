import { Component, OnInit, Input } from '@angular/core';
import { FILE_UPLOAD_DIRECTIVES, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';

const baseUrl = 'https://upload.wistia.com';

@Component({
    moduleId: module.id,
    selector: 'wistia-player',
    templateUrl: 'wistia.component.html',
    styleUrls: ['wistia.component.css'],
    directives: [FILE_UPLOAD_DIRECTIVES]
})
export class WistiaPlayerComponent implements OnInit {
    @Input() password: string;

    error: string;
    showAlert: boolean = false;
    public uploader: FileUploader;
    public urls: [SafeResourceUrl] = <[SafeResourceUrl]>[];

    constructor(private sanitizer: DomSanitizationService) {

    }

    ngOnInit() {
        this.uploader = new FileUploader({
            url: this.getUrl(),
            isHTML5: true,
            autoUpload: true
        });
        this.uploader.onAfterAddingFile = ((fileItem: any) => {
            fileItem.withCredentials = false;
            return fileItem;
        });
        this.uploader.onSuccessItem = (item, response, status) => {
            let video = JSON.parse(response);
            this.urls.push(this.sanitizer.bypassSecurityTrustResourceUrl(`http://fast.wistia.com/embed/iframe/${video.hashed_id}/?videoFoam=true`));
        };

        this.uploader.onCompleteItem = (item) => {
            this.uploader.clearQueue();
        };

        this.uploader.onErrorItem = (item, response, status) => {
            console.log(response);
            let message = JSON.parse(response);
            this.showAlert = true;
            this.error = message.error || 'Server error.';
        };
    }

    getUrl() {
        return `${baseUrl}/?api_password=${this.password}`;
    }

}
