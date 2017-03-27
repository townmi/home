var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var RADIO_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TeslaWheelsComponent; }),
    multi: true
};
export var TeslaWheelsComponent = (function () {
    function TeslaWheelsComponent() {
        this.sizes = [19, 21];
    }
    TeslaWheelsComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    TeslaWheelsComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    TeslaWheelsComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    TeslaWheelsComponent.prototype.onChange = function (value) {
        this.value = value;
        this.onModelChange(value);
    };
    TeslaWheelsComponent.prototype.onBlur = function (value) {
        this.focused = '';
    };
    TeslaWheelsComponent.prototype.onFocus = function (value) {
        this.focused = value;
        this.onTouch();
    };
    TeslaWheelsComponent = __decorate([
        Component({
            selector: 'tesla-wheels',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "\n    <div class=\"tesla-wheels\">\n      <p class=\"tesla-wheels__title\">Wheels</p>\n      <div class=\"tesla-wheels__container cf\">\n        <label \n          *ngFor=\"let size of sizes;\"\n          class=\"tesla-wheels__item tesla-wheels__item--{{ size }}\"\n          [class.tesla-wheels__item--active]=\"value === size\"\n          [class.tesla-wheels__item--focused]=\"focused === size\">\n          <input \n            type=\"radio\"\n            name=\"wheelsize\"\n            [attr.value]=\"size\"\n            (blur)=\"onBlur(size)\"\n            (change)=\"onChange(size)\"\n            (focus)=\"onFocus(size)\"\n            [checked]=\"value === size\">\n          <p>\n            {{ size }}\"\n          </p>\n        </label>\n      </div>\n    </div>\n  ",
            providers: [RADIO_CONTROL_ACCESSOR],
            styleUrls: ['./tesla-wheels.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], TeslaWheelsComponent);
    return TeslaWheelsComponent;
}());
//# sourceMappingURL=/Users/townmi/github/home/src/app/tesla-battery/components/tesla-wheels/tesla-wheels.component.js.map