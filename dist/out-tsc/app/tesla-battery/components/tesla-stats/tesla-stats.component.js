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
export var TeslaStatsComponent = (function () {
    function TeslaStatsComponent() {
    }
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], TeslaStatsComponent.prototype, "stats", void 0);
    TeslaStatsComponent = __decorate([
        Component({
            selector: 'tesla-stats',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "\n    <div class=\"tesla-stats\">\n      <ul>\n        <li *ngFor=\"let stat of stats\">\n          <div class=\"tesla-stats-icon tesla-stats-icon--{{ stat.model | lowercase }}\"></div>\n          <p>{{ stat.miles }}</p>\n        </li>\n      </ul>\n    </div>\n  ",
            styleUrls: ['./tesla-stats.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], TeslaStatsComponent);
    return TeslaStatsComponent;
}());
//# sourceMappingURL=/Users/townmi/github/home/src/app/tesla-battery/components/tesla-stats/tesla-stats.component.js.map