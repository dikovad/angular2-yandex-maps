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
var core_1 = require("@angular/core");
var ya_maps_api_wrapper_1 = require("../ya-maps-api-wrapper");
var ballon_manager_1 = require("../services/managers/ballon-manager");
var ballonId = 0;
var YaBallon = (function () {
    function YaBallon(_ballonManager) {
        this._ballonManager = _ballonManager;
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._id = (ballonId++).toString();
        this._ballonManager.add(this);
    }
    YaBallon.prototype.ngOnChanges = function (changes) {
        if (!this._markerAddedToManger) {
            this._ballonManager.add(this);
            this._markerAddedToManger = true;
            return;
        }
    };
    return YaBallon;
}());
YaBallon = __decorate([
    core_1.Directive({
        selector: 'ya-ballon',
        providers: [
            ya_maps_api_wrapper_1.YaMapsAPIWrapper
        ],
        inputs: [
            'latitude', 'longitude'
        ]
    }),
    __metadata("design:paramtypes", [ballon_manager_1.BallonManager])
], YaBallon);
exports.YaBallon = YaBallon;
//# sourceMappingURL=ballon.js.map