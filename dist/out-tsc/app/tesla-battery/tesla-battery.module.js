var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';
import { TeslaCarComponent } from './components/tesla-car/tesla-car.component';
import { TeslaStatsComponent } from './components/tesla-stats/tesla-stats.component';
import { TeslaCounterComponent } from './components/tesla-counter/tesla-counter.component';
import { TeslaClimateComponent } from './components/tesla-climate/tesla-climate.component';
import { TeslaWheelsComponent } from './components/tesla-wheels/tesla-wheels.component';
import { BatteryService } from './tesla-battery.service';
export var TeslaBatteryModule = (function () {
    function TeslaBatteryModule() {
    }
    TeslaBatteryModule = __decorate([
        NgModule({
            declarations: [
                TeslaBatteryComponent,
                TeslaCarComponent,
                TeslaStatsComponent,
                TeslaCounterComponent,
                TeslaClimateComponent,
                TeslaWheelsComponent
            ],
            imports: [
                CommonModule,
                ReactiveFormsModule
            ],
            providers: [
                BatteryService
            ],
            exports: [
                TeslaBatteryComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TeslaBatteryModule);
    return TeslaBatteryModule;
}());
//# sourceMappingURL=/Users/townmi/github/home/src/app/tesla-battery/tesla-battery.module.js.map