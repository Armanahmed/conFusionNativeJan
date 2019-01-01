"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(dishService, baseURL) {
        this.dishService = dishService;
        this.baseURL = baseURL;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishService.getDishes()
            .subscribe(function (dishes) { return _this.dishes = dishes; }, function (errmess) { return _this.errMess = errmess; });
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'app-menu',
            moduleId: module.id,
            templateUrl: './menu.component.html'
        }),
        __param(1, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService, Object])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUUxRCx5REFBdUQ7QUFRdkQ7SUFLRSx1QkFBb0IsV0FBd0IsRUFDZixPQUFPO1FBRGhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBQTtJQUFJLENBQUM7SUFFekMsZ0NBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7YUFDekIsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQXBCLENBQW9CLEVBQ3ZDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBUSxPQUFPLEVBQTNCLENBQTJCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBWlUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDcEMsQ0FBQztRQVFHLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQURhLDBCQUFXO09BTGpDLGFBQWEsQ0FjekI7SUFBRCxvQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xyXG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2FwcC1tZW51JyxcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9tZW51LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBkaXNoZXM6IERpc2hbXTtcclxuICBlcnJNZXNzOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlzaFNlcnZpY2U6IERpc2hTZXJ2aWNlLFxyXG4gICAgQEluamVjdCgnQmFzZVVSTCcpIHByaXZhdGUgYmFzZVVSTCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kaXNoU2VydmljZS5nZXREaXNoZXMoKVxyXG4gICAgICAuc3Vic2NyaWJlKGRpc2hlcyA9PiB0aGlzLmRpc2hlcyA9IGRpc2hlcyxcclxuICAgICAgICBlcnJtZXNzID0+IHRoaXMuZXJyTWVzcyA9IDxhbnk+ZXJybWVzcyk7XHJcbiAgfVxyXG5cclxufSJdfQ==