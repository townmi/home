var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var AppComponent = (function () {
    function AppComponent() {
        this.logo = 'assets/logo.svg';
    }
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            template: "\n    <header class=\"header\">\n      <img [src]=\"logo\">\n    </header>\n    <div class=\"wrapper\">\n      <tesla-battery></tesla-battery>\n    </div>\n  ",
            styleUrls: ['./app.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/townmi/github/home/src/app/app.component.js.map