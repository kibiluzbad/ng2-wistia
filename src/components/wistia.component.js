"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_file_upload_1 = require('ng2-file-upload/ng2-file-upload');
var platform_browser_1 = require('@angular/platform-browser');
var baseUrl = 'https://upload.wistia.com';
var WistiaPlayerComponent = (function () {
    function WistiaPlayerComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.showAlert = false;
        this.urls = [];
    }
    WistiaPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader = new ng2_file_upload_1.FileUploader({
            url: this.getUrl(),
            isHTML5: true,
            autoUpload: true
        });
        this.uploader.onAfterAddingFile = (function (fileItem) {
            fileItem.withCredentials = false;
            return fileItem;
        });
        this.uploader.onSuccessItem = function (item, response, status) {
            var video = JSON.parse(response);
            _this.urls.push(_this.sanitizer.bypassSecurityTrustResourceUrl("http://fast.wistia.com/embed/iframe/" + video.hashed_id + "/?videoFoam=true"));
        };
        this.uploader.onCompleteItem = function (item) {
            _this.uploader.clearQueue();
        };
        this.uploader.onErrorItem = function (item, response, status) {
            console.log(response);
            var message = JSON.parse(response);
            _this.showAlert = true;
            _this.error = message.error || 'Server error.';
        };
    };
    WistiaPlayerComponent.prototype.getUrl = function () {
        return baseUrl + "/?api_password=" + this.password;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WistiaPlayerComponent.prototype, "password", void 0);
    WistiaPlayerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wistia-player',
            templateUrl: 'wistia.component.html',
            styleUrls: ['wistia.component.css'],
            directives: [ng2_file_upload_1.FILE_UPLOAD_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof platform_browser_1.DomSanitizationService !== 'undefined' && platform_browser_1.DomSanitizationService) === 'function' && _a) || Object])
    ], WistiaPlayerComponent);
    return WistiaPlayerComponent;
    var _a;
}());
exports.WistiaPlayerComponent = WistiaPlayerComponent;
