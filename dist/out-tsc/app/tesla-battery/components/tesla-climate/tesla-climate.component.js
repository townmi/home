var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TeslaClimateComponent; }),
    multi: true
};
export var TeslaClimateComponent = (function () {
    function TeslaClimateComponent() {
    }
    TeslaClimateComponent.prototype.onChange = function (value) {
        this.value = !value;
        this.onModelChange(this.value);
    };
    TeslaClimateComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    TeslaClimateComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    TeslaClimateComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    TeslaClimateComponent.prototype.onBlur = function (value) {
        this.focused = false;
    };
    TeslaClimateComponent.prototype.onFocus = function (value) {
        this.focused = value;
        this.onTouch();
    };
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], TeslaClimateComponent.prototype, "limit", void 0);
    TeslaClimateComponent = __decorate([
        Component({
            selector: 'tesla-climate',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "\n    <div class=\"tesla-climate\">\n      <label \n        class=\"tesla-climate__item\"\n        [class.tesla-heat]=\"!limit\"\n        [class.tesla-climate__item--active]=\"value\"\n        [class.tesla-climate__item--focused]=\"focused === value\">\n        <p>{{ (limit ? 'ac' : 'heat') }} {{ value ? 'on' : 'off' }}</p>\n        <i class=\"tesla-climate__icon\"></i>\n      <input \n        type=\"checkbox\"\n        name=\"climate\"\n        [checked]=\"value\"\n        (change)=\"onChange(value)\"\n        (blur)=\"onBlur($event)\"\n        (focus)=\"onFocus($event)\">\n    </label>\n  </div>\n  ",
            providers: [CHECKBOX_VALUE_ACCESSOR],
            styleUrls: ['./tesla-climate.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], TeslaClimateComponent);
    return TeslaClimateComponent;
}());
//# sourceMappingURL=/Users/townmi/github/home/src/app/tesla-battery/components/tesla-climate/tesla-climate.component.js.map