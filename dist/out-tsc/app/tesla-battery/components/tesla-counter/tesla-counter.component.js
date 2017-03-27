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
var NUMBER_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TeslaCounterComponent; }),
    multi: true
};
export var TeslaCounterComponent = (function () {
    function TeslaCounterComponent() {
        this.step = 1;
        this.title = '';
        this.unit = '';
    }
    TeslaCounterComponent.prototype.onChange = function (value) {
        this.value = value;
        this.onModelChange(value);
    };
    TeslaCounterComponent.prototype.increment = function () {
        if (this.value < this.max) {
            this.onChange(this.value + this.step);
        }
        this.onTouch();
    };
    TeslaCounterComponent.prototype.decrement = function () {
        if (this.value > this.min) {
            this.onChange(this.value - this.step);
        }
        this.onTouch();
    };
    TeslaCounterComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    TeslaCounterComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    TeslaCounterComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    TeslaCounterComponent.prototype.onBlur = function (event) {
        this.focused = false;
        event.preventDefault();
        event.stopPropagation();
    };
    TeslaCounterComponent.prototype.onKeyUp = function (event) {
        var _this = this;
        var handlers = {
            ArrowDown: function () { return _this.decrement(); },
            ArrowUp: function () { return _this.increment(); }
        };
        if (handlers[event.code]) {
            handlers[event.code]();
            event.preventDefault();
            event.stopPropagation();
        }
    };
    TeslaCounterComponent.prototype.onFocus = function (event) {
        this.focused = true;
        event.preventDefault();
        event.stopPropagation();
    };
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], TeslaCounterComponent.prototype, "step", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], TeslaCounterComponent.prototype, "min", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], TeslaCounterComponent.prototype, "max", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], TeslaCounterComponent.prototype, "title", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], TeslaCounterComponent.prototype, "unit", void 0);
    TeslaCounterComponent = __decorate([
        Component({
            selector: 'tesla-counter',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "\n    <div class=\"tesla-counter\">\n      <p class=\"tesla-counter__title\">{{ title }}</p>\n      <div class=\"tesla-counter__container cf\">\n        <div \n          class=\"tesla-counter__item\"\n          (keydown)=\"onKeyUp($event)\"\n          (blur)=\"onBlur($event)\"\n          (focus)=\"onFocus($event)\"\n          tabindex=\"0\">\n          <p class=\"tesla-counter__number\">\n            {{ value }}\n            <span>{{ unit }}</span>\n          </p>\n          <div class=\"tesla-counter__controls\" tabindex=\"-1\">\n            <button tabindex=\"-1\" (click)=\"increment()\" [disabled]=\"value === max\"></button>\n            <button tabindex=\"-1\" (click)=\"decrement()\" [disabled]=\"value === min\"></button>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
            providers: [NUMBER_CONTROL_ACCESSOR],
            styleUrls: ['./tesla-counter.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], TeslaCounterComponent);
    return TeslaCounterComponent;
}());
//# sourceMappingURL=/Users/townmi/github/home/src/app/tesla-battery/components/tesla-counter/tesla-counter.component.js.map