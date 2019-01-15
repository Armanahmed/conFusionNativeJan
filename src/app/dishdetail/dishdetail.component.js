"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var favorite_service_1 = require("../services/favorite.service");
var comment_component_1 = require("../comment/comment.component");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var nativescript_toasty_1 = require("nativescript-toasty");
var dialogs_1 = require("ui/dialogs");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var operators_1 = require("rxjs/operators");
var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(dishservice, favoriteservice, fonticon, route, routerExtensions, modalService, vcRef, baseURL) {
        this.dishservice = dishservice;
        this.favoriteservice = favoriteservice;
        this.fonticon = fonticon;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.modalService = modalService;
        this.vcRef = vcRef;
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
            var toast = new nativescript_toasty_1.Toasty("Added Dish " + this.dish.id, "short", "bottom");
            toast.show();
        }
    };
    DishdetailComponent.prototype.displayActionDialog = function () {
        var _this = this;
        var options = {
            title: "Actions",
            cancelButtonText: "Cancel",
            actions: ["Add to Favorites", "Add comment"]
        };
        dialogs_1.action(options).then(function (result) {
            if (result === "Add to Favorites") {
                _this.addToFavorites();
            }
            else if (result === "Add comment") {
                console.log("Add Comment from Action Dialog");
                _this.commentModalView();
            }
        });
    };
    DishdetailComponent.prototype.commentModalView = function () {
        var _this = this;
        var options = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        this.modalService.showModal(comment_component_1.CommentModalComponent, options)
            .then(function (result) {
            _this.dish.comments.push(result);
            _this.numcomments = _this.dish.comments.length;
            var total = 0;
            _this.dish.comments.forEach(function (comment) { return total += comment.rating; });
            _this.avgstars = (total / _this.numcomments).toFixed(2);
        });
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
        __param(7, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService, favorite_service_1.FavoriteService, nativescript_ngx_fonticon_1.TNSFontIconService, router_1.ActivatedRoute, router_2.RouterExtensions, modal_dialog_1.ModalDialogService, core_1.ViewContainerRef, Object])
    ], DishdetailComponent);
    return DishdetailComponent;
}());
exports.DishdetailComponent = DishdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUc1RSx5REFBdUQ7QUFDdkQsaUVBQStEO0FBQy9ELGtFQUFxRTtBQUNyRSx1RUFBK0Q7QUFDL0QsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCwyREFBNkM7QUFDN0Msc0NBQW9DO0FBQ3BDLGtFQUEyRjtBQUMzRiw0Q0FBMkM7QUFRM0M7SUFTQyw2QkFBb0IsV0FBd0IsRUFBVSxlQUFnQyxFQUFVLFFBQTRCLEVBQVUsS0FBcUIsRUFBVSxnQkFBa0MsRUFBVSxZQUFnQyxFQUFVLEtBQXVCLEVBQTZCLE9BQU87UUFBbFMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQTZCLFlBQU8sR0FBUCxPQUFPLENBQUE7UUFGdFQsYUFBUSxHQUFZLEtBQUssQ0FBQztJQUkxQixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUFBLGlCQWVDO1FBYkEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2YsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFDO2FBQzNFLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDZCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNYLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLGVB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QyxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRixvQ0FBTSxHQUFOO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7SUE1RVcsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1NBQzFDLENBQUM7UUFXb1IsV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBQXJRLDBCQUFXLEVBQTJCLGtDQUFlLEVBQW9CLDhDQUFrQixFQUFpQix1QkFBYyxFQUE0Qix5QkFBZ0IsRUFBd0IsaUNBQWtCLEVBQWlCLHVCQUFnQjtPQVR0USxtQkFBbUIsQ0E4RS9CO0lBQUQsMEJBQUM7Q0FBQSxBQTlFRCxJQThFQztBQTlFWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XHJcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tICcuLi9zaGFyZWQvY29tbWVudCc7XHJcbmltcG9ydCB7IERpc2hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGlzaC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRmF2b3JpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmF2b3JpdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW1lbnRNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknO1xyXG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYXBwLWRpc2hkZXRhaWwnLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2Rpc2hkZXRhaWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGlzaGRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdGRpc2g6IERpc2g7XHJcblx0Y29tbWVudDogQ29tbWVudDtcclxuXHRlcnJNZXNzOiBzdHJpbmc7XHJcblx0YXZnc3RhcnM6IHN0cmluZztcclxuXHRudW1jb21tZW50czogbnVtYmVyO1xyXG5cdGZhdm9yaXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlzaHNlcnZpY2U6IERpc2hTZXJ2aWNlLCBwcml2YXRlIGZhdm9yaXRlc2VydmljZTogRmF2b3JpdGVTZXJ2aWNlLCBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIEBJbmplY3QoJ0Jhc2VVUkwnKSBwcml2YXRlIGJhc2VVUkwpIHtcclxuXHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtc1xyXG5cdFx0XHQucGlwZShzd2l0Y2hNYXAoKHBhcmFtczogUGFyYW1zKSA9PiB0aGlzLmRpc2hzZXJ2aWNlLmdldERpc2gocGFyYW1zWydpZCddKSkpXHJcblx0XHRcdC5zdWJzY3JpYmUoZGlzaCA9PiB7XHJcblx0XHRcdFx0dGhpcy5kaXNoID0gZGlzaDtcclxuICAgICAgICAgIHRoaXMuZmF2b3JpdGUgPSB0aGlzLmZhdm9yaXRlc2VydmljZS5pc0Zhdm9yaXRlKHRoaXMuZGlzaC5pZCk7XHJcbiAgICAgICAgICB0aGlzLm51bWNvbW1lbnRzID0gdGhpcy5kaXNoLmNvbW1lbnRzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgICAgdGhpcy5kaXNoLmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiB0b3RhbCArPSBjb21tZW50LnJhdGluZyk7XHJcbiAgICAgICAgICB0aGlzLmF2Z3N0YXJzID0gKHRvdGFsL3RoaXMubnVtY29tbWVudHMpLnRvRml4ZWQoMik7XHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm1lc3MgPT4geyB0aGlzLmRpc2ggPSBudWxsOyB0aGlzLmVyck1lc3MgPSA8YW55PmVycm1lc3M7IH0pO1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRhZGRUb0Zhdm9yaXRlcygpIHtcclxuXHRcdGlmKCF0aGlzLmZhdm9yaXRlKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdBZGRpbmcgdG8gRmF2b3JpdGVzJywgdGhpcy5kaXNoLmlkKTtcclxuXHRcdFx0dGhpcy5mYXZvcml0ZSA9IHRoaXMuZmF2b3JpdGVzZXJ2aWNlLmFkZEZhdm9yaXRlKHRoaXMuZGlzaC5pZCk7XHJcblx0XHRcdGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0eShcIkFkZGVkIERpc2ggXCIgKyB0aGlzLmRpc2guaWQsIFwic2hvcnRcIiwgXCJib3R0b21cIik7XHJcblx0XHRcdHRvYXN0LnNob3coKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGRpc3BsYXlBY3Rpb25EaWFsb2coKSB7XHJcblxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHRpdGxlOiBcIkFjdGlvbnNcIixcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcclxuICAgICAgYWN0aW9uczogW1wiQWRkIHRvIEZhdm9yaXRlc1wiLCBcIkFkZCBjb21tZW50XCJdXHJcbiAgICB9O1xyXG5cclxuICAgIGFjdGlvbihvcHRpb25zKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQgPT09IFwiQWRkIHRvIEZhdm9yaXRlc1wiKSB7XHJcbiAgICAgICAgdGhpcy5hZGRUb0Zhdm9yaXRlcygpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJBZGQgY29tbWVudFwiKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZCBDb21tZW50IGZyb20gQWN0aW9uIERpYWxvZ1wiKTtcclxuICAgICAgICB0aGlzLmNvbW1lbnRNb2RhbFZpZXcoKTtcclxuICAgICAgfSBcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGNvbW1lbnRNb2RhbFZpZXcoKSB7XHJcbiAgXHRsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICAgICAgZnVsbHNjcmVlbjogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKENvbW1lbnRNb2RhbENvbXBvbmVudCwgb3B0aW9ucylcclxuICAgICAgLnRoZW4oKHJlc3VsdDogQ29tbWVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlzaC5jb21tZW50cy5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgdGhpcy5udW1jb21tZW50cyA9IHRoaXMuZGlzaC5jb21tZW50cy5sZW5ndGg7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICB0aGlzLmRpc2guY29tbWVudHMuZm9yRWFjaCgoY29tbWVudDogQ29tbWVudCkgPT4gdG90YWwgKz0gY29tbWVudC5yYXRpbmcpO1xyXG4gICAgICAgIHRoaXMuYXZnc3RhcnMgPSAodG90YWwvdGhpcy5udW1jb21tZW50cykudG9GaXhlZCgyKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuXHRnb0JhY2soKTogdm9pZCB7XHJcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG5cdH1cclxuXHJcbn0iXX0=