"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var leader_service_1 = require("../services/leader.service");
var AboutComponent = /** @class */ (function () {
    function AboutComponent(leaderService, baseURL) {
        this.leaderService = leaderService;
        this.baseURL = baseURL;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderService.getLeaders()
            .subscribe(function (leaders) { return _this.leaders = leaders; }, function (errmess) { return _this.errMess = errmess; });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            moduleId: module.id,
            templateUrl: './about.component.html'
        }),
        __param(1, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [leader_service_1.LeaderService, Object])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBEO0FBRTFELDZEQUEyRDtBQVEzRDtJQUtFLHdCQUFvQixhQUE0QixFQUE2QixPQUFPO1FBQWhFLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQTZCLFlBQU8sR0FBUCxPQUFPLENBQUE7SUFBSSxDQUFDO0lBRXpGLGlDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO2FBQzVCLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUF0QixDQUFzQixFQUMxQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQVEsT0FBTyxFQUEzQixDQUEyQixDQUFDLENBQUM7SUFDOUMsQ0FBQztJQVhVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3RDLENBQUM7UUFPbUQsV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBQWpDLDhCQUFhO09BTHJDLGNBQWMsQ0FhMUI7SUFBRCxxQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMZWFkZXIgfSBmcm9tICcuLi9zaGFyZWQvbGVhZGVyJztcclxuaW1wb3J0IHsgTGVhZGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xlYWRlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWFib3V0JyxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hYm91dC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGxlYWRlcnM6IExlYWRlcltdO1xyXG4gIGVyck1lc3M6IHN0cmluZzsgXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGVhZGVyU2VydmljZTogTGVhZGVyU2VydmljZSwgQEluamVjdCgnQmFzZVVSTCcpIHByaXZhdGUgYmFzZVVSTCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5sZWFkZXJTZXJ2aWNlLmdldExlYWRlcnMoKVxyXG4gICAgICAuc3Vic2NyaWJlKGxlYWRlcnMgPT4gdGhpcy5sZWFkZXJzID0gbGVhZGVycyxcclxuICAgICAgICBlcnJtZXNzID0+IHRoaXMuZXJyTWVzcyA9IDxhbnk+ZXJybWVzcyk7XHJcbiAgfVxyXG5cclxufSJdfQ==