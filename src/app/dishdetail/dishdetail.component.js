"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var favorite_service_1 = require("../services/favorite.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var nativescript_toasty_1 = require("nativescript-toasty");
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
            var toast = new nativescript_toasty_1.Toasty("Added Dish " + this.dish.id, "bottom");
            toast.show();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUcxRCx5REFBdUQ7QUFDdkQsaUVBQStEO0FBQy9ELHVFQUErRDtBQUMvRCwwQ0FBeUQ7QUFDekQsc0RBQStEO0FBQy9ELDJEQUE2QztBQUM3Qyw0Q0FBMkM7QUFRM0M7SUFTQyw2QkFBb0IsV0FBd0IsRUFBVSxlQUFnQyxFQUFVLFFBQTRCLEVBQVUsS0FBcUIsRUFBVSxnQkFBa0MsRUFBNkIsT0FBTztRQUF2TixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQTZCLFlBQU8sR0FBUCxPQUFPLENBQUE7UUFGM08sYUFBUSxHQUFZLEtBQUssQ0FBQztJQUkxQixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUFBLGlCQWVDO1FBYkEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2YsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFDO2FBQzNFLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDZCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNYLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5RCxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUU3QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFLLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO1lBQy9ELEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLEdBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDLEVBQ0QsVUFBQSxPQUFPLElBQU0sS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxHQUFRLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWpFLENBQUM7SUFFRCw0Q0FBYyxHQUFkO1FBQ0MsSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMvRCxJQUFNLEtBQUssR0FBRyxJQUFJLDRCQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2pFLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0YsQ0FBQztJQUVELG9DQUFNLEdBQU47UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQXpDVyxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7U0FDMUMsQ0FBQztRQVd5TSxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FBMUwsMEJBQVcsRUFBMkIsa0NBQWUsRUFBb0IsOENBQWtCLEVBQWlCLHVCQUFjLEVBQTRCLHlCQUFnQjtPQVQzTCxtQkFBbUIsQ0EyQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XHJcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tICcuLi9zaGFyZWQvY29tbWVudCc7XHJcbmltcG9ydCB7IERpc2hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGlzaC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRmF2b3JpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmF2b3JpdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2FwcC1kaXNoZGV0YWlsJyxcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9kaXNoZGV0YWlsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERpc2hkZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHRkaXNoOiBEaXNoO1xyXG5cdGNvbW1lbnQ6IENvbW1lbnQ7XHJcblx0ZXJyTWVzczogc3RyaW5nO1xyXG5cdGF2Z3N0YXJzOiBzdHJpbmc7XHJcblx0bnVtY29tbWVudHM6IG51bWJlcjtcclxuXHRmYXZvcml0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRpc2hzZXJ2aWNlOiBEaXNoU2VydmljZSwgcHJpdmF0ZSBmYXZvcml0ZXNlcnZpY2U6IEZhdm9yaXRlU2VydmljZSwgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBASW5qZWN0KCdCYXNlVVJMJykgcHJpdmF0ZSBiYXNlVVJMKSB7XHJcblxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXNcclxuXHRcdFx0LnBpcGUoc3dpdGNoTWFwKChwYXJhbXM6IFBhcmFtcykgPT4gdGhpcy5kaXNoc2VydmljZS5nZXREaXNoKHBhcmFtc1snaWQnXSkpKVxyXG5cdFx0XHQuc3Vic2NyaWJlKGRpc2ggPT4ge1xyXG5cdFx0XHRcdHRoaXMuZGlzaCA9IGRpc2g7XHJcbiAgICAgICAgICB0aGlzLmZhdm9yaXRlID0gdGhpcy5mYXZvcml0ZXNlcnZpY2UuaXNGYXZvcml0ZSh0aGlzLmRpc2guaWQpO1xyXG4gICAgICAgICAgdGhpcy5udW1jb21tZW50cyA9IHRoaXMuZGlzaC5jb21tZW50cy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICAgIHRoaXMuZGlzaC5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4gdG90YWwgKz0gY29tbWVudC5yYXRpbmcpO1xyXG4gICAgICAgICAgdGhpcy5hdmdzdGFycyA9ICh0b3RhbC90aGlzLm51bWNvbW1lbnRzKS50b0ZpeGVkKDIpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRlcnJtZXNzID0+IHsgdGhpcy5kaXNoID0gbnVsbDsgdGhpcy5lcnJNZXNzID0gPGFueT5lcnJtZXNzOyB9KTtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0YWRkVG9GYXZvcml0ZXMoKSB7XHJcblx0XHRpZighdGhpcy5mYXZvcml0ZSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnQWRkaW5nIHRvIEZhdm9yaXRlcycsIHRoaXMuZGlzaC5pZCk7XHJcblx0XHRcdHRoaXMuZmF2b3JpdGUgPSB0aGlzLmZhdm9yaXRlc2VydmljZS5hZGRGYXZvcml0ZSh0aGlzLmRpc2guaWQpO1xyXG5cdFx0XHRjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJBZGRlZCBEaXNoIFwiICsgdGhpcy5kaXNoLmlkLCBcImJvdHRvbVwiKTtcclxuXHRcdFx0dG9hc3Quc2hvdygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z29CYWNrKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuXHR9XHJcblxyXG59Il19