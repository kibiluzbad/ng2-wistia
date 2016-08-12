import { OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';
export declare class WistiaPlayerComponent implements OnInit {
    private sanitizer;
    password: string;
    error: string;
    showAlert: boolean;
    uploader: FileUploader;
    urls: [SafeResourceUrl];
    constructor(sanitizer: DomSanitizationService);
    ngOnInit(): void;
    getUrl(): string;
}
