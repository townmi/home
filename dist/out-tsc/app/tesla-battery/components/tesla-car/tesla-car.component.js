var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export var TeslaCarComponent = (function () {
    function TeslaCarComponent() {
    }
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], TeslaCarComponent.prototype, "wheelsize", void 0);
    TeslaCarComponent = __decorate([
        Component({
            selector: 'tesla-car',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "\n    <div class=\"tesla-car\">\n      <div class=\"tesla-wheels\">\n        <div class=\"tesla-wheel tesla-wheel--front tesla-wheel--{{ wheelsize }}\"></div>\n        <div class=\"tesla-wheel tesla-wheel--rear tesla-wheel--{{ wheelsize }}\"></div>\n      </div>\n    </div>\n  ",
            styleUrls: ['./tesla-car.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], TeslaCarComponent);
    return TeslaCarComponent;
}());
//# sourceMappingURL=/Users/townmi/github/home/src/app/tesla-battery/components/tesla-car/tesla-car.component.js.map