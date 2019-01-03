"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var promotion_service_1 = require("../services/promotion.service");
var leader_service_1 = require("../services/leader.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dishService, promotionService, leaderService, baseURL) {
        this.dishService = dishService;
        this.promotionService = promotionService;
        this.leaderService = leaderService;
        this.baseURL = baseURL;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishService.getFeaturedDish()
            .subscribe(function (dish) { return _this.dish = dish; }, function (errmess) { return _this.dishErrMess = errmess; });
        this.promotionService.getFeaturedPromotion()
            .subscribe(function (promotion) { return _this.promotion = promotion; }, function (errmess) { return _this.promoErrMess = errmess; });
        this.leaderService.getFeaturedLeader()
            .subscribe(function (leader) { return _this.leader = leader; }, function (errmess) { return _this.leaderErrMess = errmess; });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            moduleId: module.id,
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __param(3, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService, promotion_service_1.PromotionService, leader_service_1.LeaderService, Object])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUUxRCx5REFBdUQ7QUFFdkQsbUVBQWlFO0FBRWpFLDZEQUEyRDtBQVMzRDtJQVNFLHVCQUFvQixXQUF3QixFQUFVLGdCQUFrQyxFQUFVLGFBQTRCLEVBQTZCLE9BQU87UUFBOUksZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBNkIsWUFBTyxHQUFQLE9BQU8sQ0FBQTtJQUFJLENBQUM7SUFFdkssZ0NBQVEsR0FBUjtRQUFBLGlCQVlDO1FBVkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7YUFDL0IsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLEVBQ2pDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsR0FBUSxPQUFPLEVBQS9CLENBQStCLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUU7YUFDekMsU0FBUyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLEVBQTFCLENBQTBCLEVBQ2hELFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxPQUFPLEVBQWhDLENBQWdDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFO2FBQ25DLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFwQixDQUFvQixFQUN2QyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLEdBQVEsT0FBTyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7SUFFcEQsQ0FBQztJQXZCVSxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDO1FBV2lJLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQUFqSCwwQkFBVyxFQUE0QixvQ0FBZ0IsRUFBeUIsOEJBQWE7T0FUbkgsYUFBYSxDQXlCekI7SUFBRCxvQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xyXG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XHJcbmltcG9ydCB7IFByb21vdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9wcm9tb3Rpb24nO1xyXG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcHJvbW90aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMZWFkZXIgfSBmcm9tICcuLi9zaGFyZWQvbGVhZGVyJztcclxuaW1wb3J0IHsgTGVhZGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xlYWRlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGRpc2g6IERpc2g7XHJcbiAgcHJvbW90aW9uOiBQcm9tb3Rpb247XHJcbiAgbGVhZGVyOiBMZWFkZXI7XHJcbiAgZGlzaEVyck1lc3M6IHN0cmluZztcclxuICBwcm9tb0Vyck1lc3M6IHN0cmluZztcclxuICBsZWFkZXJFcnJNZXNzOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlzaFNlcnZpY2U6IERpc2hTZXJ2aWNlLCBwcml2YXRlIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2UsIHByaXZhdGUgbGVhZGVyU2VydmljZTogTGVhZGVyU2VydmljZSwgQEluamVjdCgnQmFzZVVSTCcpIHByaXZhdGUgYmFzZVVSTCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIHRoaXMuZGlzaFNlcnZpY2UuZ2V0RmVhdHVyZWREaXNoKClcclxuICAgICAgLnN1YnNjcmliZShkaXNoID0+IHRoaXMuZGlzaCA9IGRpc2gsXHJcbiAgICAgICAgZXJybWVzcyA9PiB0aGlzLmRpc2hFcnJNZXNzID0gPGFueT5lcnJtZXNzKTtcclxuICAgIHRoaXMucHJvbW90aW9uU2VydmljZS5nZXRGZWF0dXJlZFByb21vdGlvbigpXHJcbiAgICAgIC5zdWJzY3JpYmUocHJvbW90aW9uID0+IHRoaXMucHJvbW90aW9uID0gcHJvbW90aW9uLFxyXG4gICAgICAgIGVycm1lc3MgPT4gdGhpcy5wcm9tb0Vyck1lc3MgPSA8YW55PmVycm1lc3MpO1xyXG4gICAgdGhpcy5sZWFkZXJTZXJ2aWNlLmdldEZlYXR1cmVkTGVhZGVyKClcclxuICAgICAgLnN1YnNjcmliZShsZWFkZXIgPT4gdGhpcy5sZWFkZXIgPSBsZWFkZXIsXHJcbiAgICAgICAgZXJybWVzcyA9PiB0aGlzLmxlYWRlckVyck1lc3MgPSA8YW55PmVycm1lc3MpO1xyXG5cclxuICB9XHJcblxyXG59Il19