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
import { FormBuilder } from '@angular/forms';
import { BatteryService } from '../../tesla-battery.service';
export var TeslaBatteryComponent = (function () {
    function TeslaBatteryComponent(fb, batteryService) {
        this.fb = fb;
        this.batteryService = batteryService;
        this.title = 'Range Per Charge';
        this.results = ['60', '60D', '75', '75D', '90D', 'P100D'];
    }
    TeslaBatteryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.models = this.batteryService.getModelData();
        this.tesla = this.fb.group({
            config: this.fb.group({
                speed: 55,
                temperature: 20,
                climate: true,
                wheels: 19
            })
        });
        this.stats = this.calculateStats(this.results, this.tesla.controls['config'].value);
        this.tesla.controls['config'].valueChanges.subscribe(function (data) {
            _this.stats = _this.calculateStats(_this.results, data);
        });
    };
    TeslaBatteryComponent.prototype.calculateStats = function (models, value) {
        var _this = this;
        return models.map(function (model) {
            var speed = value.speed, temperature = value.temperature, climate = value.climate, wheels = value.wheels;
            var miles = _this.models[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
            return {
                model: model,
                miles: miles
            };
        });
    };
    TeslaBatteryComponent = __decorate([
        Component({
            selector: 'tesla-battery',
            template: "\n    <form class=\"tesla-battery\" [formGroup]=\"tesla\">\n      <h1>{{ title }}</h1>\n      <tesla-car [wheelsize]=\"tesla.get('config.wheels').value\"></tesla-car>\n      <tesla-stats [stats]=\"stats\"></tesla-stats>\n      <div class=\"tesla-controls cf\" formGroupName=\"config\">\n        <tesla-counter\n          [title]=\"'Speed'\"\n          [unit]=\"'mph'\"\n          [step]=\"5\"\n          [min]=\"45\"\n          [max]=\"70\"\n          formControlName=\"speed\">\n        </tesla-counter>\n        <div class=\"tesla-climate cf\">\n          <tesla-counter\n            [title]=\"'Outside Temperature'\"\n            [unit]=\"'\u00B0'\" \n            [step]=\"10\"\n            [min]=\"-10\"\n            [max]=\"40\"\n            formControlName=\"temperature\">\n          </tesla-counter>\n          <tesla-climate \n            [limit]=\"tesla.get('config.temperature').value > 10\" \n            formControlName=\"climate\">\n          </tesla-climate>\n        </div>\n        <tesla-wheels formControlName=\"wheels\"></tesla-wheels>\n      </div>\n      <div class=\"tesla-battery__notice\">\n        <p>\n          The actual amount of range that you experience will vary based \n          on your particular use conditions. See how particular use conditions \n          may affect your range in our simulation model.\n        </p>\n        <p>\n          Vehicle range may vary depending on the vehicle configuration, \n          battery age and condition, driving style and operating, environmental \n          and climate conditions.\n        </p>\n      </div>\n    </form>\n  ",
            styleUrls: ['./tesla-battery.component.scss']
        }), 
        __metadata('design:paramtypes', [FormBuilder, BatteryService])
    ], TeslaBatteryComponent);
    return TeslaBatteryComponent;
}());
//# sourceMappingURL=/Users/townmi/github/home/src/app/tesla-battery/containers/tesla-battery/tesla-battery.component.js.map