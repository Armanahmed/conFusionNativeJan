"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var favorite_service_1 = require("../services/favorite.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(dishservice, favoriteservice, fonticon, route, routerExtensions, baseURL) {
        this.dishservice = dishservice;
        this.favoriteservice = favoriteservice;
        this.fonticon = fonticon;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.baseURL = baseURL;
        this.favorite = false;
    }
    DishdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .pipe(operators_1.switchMap(function (params) { return _this.dishservice.getDish(params['id']); }))
            .subscribe(function (dish) {
            _this.dish = dish;
            _this.favorite = _this.favoriteservice.isFavorite(_this.dish.id);
            _this.numcomments = _this.dish.comments.length;
            var total = 0;
            _this.dish.comments.forEach(function (comment) { return total += comment.rating; });
            _this.avgstars = (total / _this.numcomments).toFixed(2);
        }, function (errmess) { _this.dish = null; _this.errMess = errmess; });
    };
    DishdetailComponent.prototype.addToFavorites = function () {
        if (!this.favorite) {
            console.log('Adding to Favorites', this.dish.id);
            this.favorite = this.favoriteservice.addFavorite(this.dish.id);
        }
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
        __param(5, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService, favorite_service_1.FavoriteService, nativescript_ngx_fonticon_1.TNSFontIconService, router_1.ActivatedRoute, router_2.RouterExtensions, Object])
    ], DishdetailComponent);
    return DishdetailComponent;
}());
exports.DishdetailComponent = DishdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUcxRCx5REFBdUQ7QUFDdkQsaUVBQStEO0FBQy9ELHVFQUErRDtBQUMvRCwwQ0FBeUQ7QUFDekQsc0RBQStEO0FBQy9ELDRDQUEyQztBQVEzQztJQVNDLDZCQUFvQixXQUF3QixFQUFVLGVBQWdDLEVBQVUsUUFBNEIsRUFBVSxLQUFxQixFQUFVLGdCQUFrQyxFQUE2QixPQUFPO1FBQXZOLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBNkIsWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQUYzTyxhQUFRLEdBQVksS0FBSyxDQUFDO0lBSTFCLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBZUM7UUFiQSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDZixJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUF0QyxDQUFzQyxDQUFDLENBQUM7YUFDM0UsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNkLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ1gsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlELEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRTdDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUssSUFBSSxPQUFPLENBQUMsTUFBTSxFQUF2QixDQUF1QixDQUFDLENBQUM7WUFDL0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssR0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUMsRUFDRCxVQUFBLE9BQU8sSUFBTSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLEdBQVEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakUsQ0FBQztJQUVELDRDQUFjLEdBQWQ7UUFDQyxJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQy9EO0lBQ0YsQ0FBQztJQUVELG9DQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQXZDVyxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7U0FDMUMsQ0FBQztRQVd5TSxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FBMUwsMEJBQVcsRUFBMkIsa0NBQWUsRUFBb0IsOENBQWtCLEVBQWlCLHVCQUFjLEVBQTRCLHlCQUFnQjtPQVQzTCxtQkFBbUIsQ0F5Qy9CO0lBQUQsMEJBQUM7Q0FBQSxBQXpDRCxJQXlDQztBQXpDWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XHJcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tICcuLi9zaGFyZWQvY29tbWVudCc7XHJcbmltcG9ydCB7IERpc2hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGlzaC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRmF2b3JpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmF2b3JpdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYXBwLWRpc2hkZXRhaWwnLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2Rpc2hkZXRhaWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGlzaGRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdGRpc2g6IERpc2g7XHJcblx0Y29tbWVudDogQ29tbWVudDtcclxuXHRlcnJNZXNzOiBzdHJpbmc7XHJcblx0YXZnc3RhcnM6IHN0cmluZztcclxuXHRudW1jb21tZW50czogbnVtYmVyO1xyXG5cdGZhdm9yaXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlzaHNlcnZpY2U6IERpc2hTZXJ2aWNlLCBwcml2YXRlIGZhdm9yaXRlc2VydmljZTogRmF2b3JpdGVTZXJ2aWNlLCBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIEBJbmplY3QoJ0Jhc2VVUkwnKSBwcml2YXRlIGJhc2VVUkwpIHtcclxuXHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtc1xyXG5cdFx0XHQucGlwZShzd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PiB0aGlzLmRpc2hzZXJ2aWNlLmdldERpc2gocGFyYW1zWydpZCddKSkpXHJcblx0XHRcdC5zdWJzY3JpYmUoZGlzaCA9PiB7XHJcblx0XHRcdFx0dGhpcy5kaXNoID0gZGlzaDtcclxuICAgICAgICAgIHRoaXMuZmF2b3JpdGUgPSB0aGlzLmZhdm9yaXRlc2VydmljZS5pc0Zhdm9yaXRlKHRoaXMuZGlzaC5pZCk7XHJcbiAgICAgICAgICB0aGlzLm51bWNvbW1lbnRzID0gdGhpcy5kaXNoLmNvbW1lbnRzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgICAgdGhpcy5kaXNoLmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiB0b3RhbCArPSBjb21tZW50LnJhdGluZyk7XHJcbiAgICAgICAgICB0aGlzLmF2Z3N0YXJzID0gKHRvdGFsL3RoaXMubnVtY29tbWVudHMpLnRvRml4ZWQoMik7XHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm1lc3MgPT4geyB0aGlzLmRpc2ggPSBudWxsOyB0aGlzLmVyck1lc3MgPSA8YW55PmVycm1lc3M7IH0pO1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRhZGRUb0Zhdm9yaXRlcygpIHtcclxuXHRcdGlmKCF0aGlzLmZhdm9yaXRlKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdBZGRpbmcgdG8gRmF2b3JpdGVzJywgdGhpcy5kaXNoLmlkKTtcclxuXHRcdFx0dGhpcy5mYXZvcml0ZSA9IHRoaXMuZmF2b3JpdGVzZXJ2aWNlLmFkZEZhdm9yaXRlKHRoaXMuZGlzaC5pZCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnb0JhY2soKTogdm9pZCB7XHJcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG5cdH1cclxuXHJcbn0iXX0=