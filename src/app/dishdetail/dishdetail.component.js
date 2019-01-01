"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(dishservice, route, routerExtensions, BaseURL) {
        this.dishservice = dishservice;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.BaseURL = BaseURL;
    }
    DishdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .pipe(operators_1.switchMap(function (params) { return _this.dishservice.getDish(params['id']); }))
            .subscribe(function (dish) { return _this.dish = dish; }, function (errmess) { return _this.errMess = errmess; });
    };
    DishdetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    DishdetailComponent = __decorate([
        core_1.Component({
            selector: 'app-dishdetail',
            moduleId: module.id,
            templateUrl: './dishdetail.component.html'
        }),
        __param(3, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService, router_1.ActivatedRoute, router_2.RouterExtensions, Object])
    ], DishdetailComponent);
    return DishdetailComponent;
}());
exports.DishdetailComponent = DishdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUcxRCx5REFBdUQ7QUFDdkQsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCw0Q0FBMkM7QUFRM0M7SUFNQyw2QkFBb0IsV0FBd0IsRUFBVSxLQUFxQixFQUFVLGdCQUFrQyxFQUE2QixPQUFPO1FBQXZJLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQTZCLFlBQU8sR0FBUCxPQUFPLENBQUE7SUFFM0osQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUpBLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTthQUNmLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQXRDLENBQXNDLENBQUMsQ0FBQzthQUMzRSxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsRUFBRSxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUF0QixDQUFzQixDQUFDLENBQUM7SUFFMUUsQ0FBQztJQUVELG9DQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQXBCVyxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7U0FDMUMsQ0FBQztRQVF5SCxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FBMUcsMEJBQVcsRUFBaUIsdUJBQWMsRUFBNEIseUJBQWdCO09BTjNHLG1CQUFtQixDQXNCL0I7SUFBRCwwQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGlzaCB9IGZyb20gJy4uL3NoYXJlZC9kaXNoJztcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4uL3NoYXJlZC9jb21tZW50JztcclxuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYXBwLWRpc2hkZXRhaWwnLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2Rpc2hkZXRhaWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGlzaGRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdGRpc2g6IERpc2g7XHJcblx0Y29tbWVudDogQ29tbWVudDtcclxuXHRlcnJNZXNzOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlzaHNlcnZpY2U6IERpc2hTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBASW5qZWN0KCdCYXNlVVJMJykgcHJpdmF0ZSBCYXNlVVJMKSB7XHJcblxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtc1xyXG5cdFx0XHQucGlwZShzd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PiB0aGlzLmRpc2hzZXJ2aWNlLmdldERpc2gocGFyYW1zWydpZCddKSkpXHJcblx0XHRcdC5zdWJzY3JpYmUoZGlzaCA9PiB0aGlzLmRpc2ggPSBkaXNoLCBlcnJtZXNzID0+IHRoaXMuZXJyTWVzcyA9IGVycm1lc3MpO1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRnb0JhY2soKTogdm9pZCB7XHJcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG5cdH1cclxuXHJcbn0iXX0=