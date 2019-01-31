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
var page_1 = require("ui/page");
var animation_1 = require("ui/animation");
var gestures_1 = require("ui/gestures");
var color_1 = require("color");
var enums = require("ui/enums");
var SocialShare = require("nativescript-social-share");
var image_source_1 = require("image-source");
var operators_1 = require("rxjs/operators");
var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(dishservice, favoriteservice, fonticon, route, routerExtensions, modalService, vcRef, page, baseURL) {
        this.dishservice = dishservice;
        this.favoriteservice = favoriteservice;
        this.fonticon = fonticon;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.page = page;
        this.baseURL = baseURL;
        this.favorite = false;
        this.showComments = false;
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
    DishdetailComponent.prototype.socialShare = function () {
        var image;
        image_source_1.fromUrl(this.baseURL + this.dish.image)
            .then(function (img) {
            image = img;
            SocialShare.shareImage(image, "How would you like to share this image?");
        })
            .catch(function () { console.log('Error loading image'); });
    };
    DishdetailComponent.prototype.displayActionDialog = function () {
        var _this = this;
        var options = {
            title: "Actions",
            cancelButtonText: "Cancel",
            actions: ["Add to Favorites", "Add comment", "Social Sharing"]
        };
        dialogs_1.action(options).then(function (result) {
            if (result === "Add to Favorites") {
                _this.addToFavorites();
            }
            else if (result === "Add comment") {
                console.log("Add Comment from Action Dialog");
                _this.commentModalView();
            }
            else if (result == 'Social Sharing') {
                _this.socialShare();
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
    DishdetailComponent.prototype.onSwipe = function (args) {
        if (args.direction === gestures_1.SwipeDirection.up && !this.showComments) {
            this.animateUp();
        }
        else if (args.direction === gestures_1.SwipeDirection.down && this.showComments) {
            this.animateDown();
        }
    };
    DishdetailComponent.prototype.showAndHideComments = function () {
        if (!this.showComments) {
            this.animateUp();
        }
        else {
            this.animateDown();
        }
    };
    DishdetailComponent.prototype.animateUp = function () {
        var _this = this;
        if (this.dish && !this.showComments) {
            this.cardImage = this.page.getViewById("cardImage");
            this.cardLayout = this.page.getViewById("cardLayout");
            this.commentList = this.page.getViewById("commentList");
            var definitions = new Array();
            var a1 = {
                target: this.cardImage,
                scale: { x: 1, y: 0 },
                translate: { x: 0, y: -200 },
                opacity: 0,
                duration: 500,
                curve: enums.AnimationCurve.easeIn
            };
            definitions.push(a1);
            var a2 = {
                target: this.cardLayout,
                backgroundColor: new color_1.Color("#ffc107"),
                duration: 500,
                curve: enums.AnimationCurve.easeIn
            };
            definitions.push(a2);
            var animationSet = new animation_1.Animation(definitions);
            animationSet.play()
                .then(function () {
                _this.showComments = true;
            })
                .catch(function (e) {
                console.log(e.message);
            });
        }
    };
    DishdetailComponent.prototype.animateDown = function () {
        if (this.dish && this.showComments) {
            this.cardImage = this.page.getViewById("cardImage");
            this.cardLayout = this.page.getViewById("cardLayout");
            this.commentList = this.page.getViewById("commentList");
            this.showComments = false;
            var definitions = new Array();
            var a1 = {
                target: this.cardImage,
                scale: { x: 1, y: 1 },
                translate: { x: 0, y: 0 },
                opacity: 1,
                duration: 500,
                curve: enums.AnimationCurve.easeIn
            };
            definitions.push(a1);
            var a2 = {
                target: this.cardLayout,
                backgroundColor: new color_1.Color("#ffffff"),
                duration: 500,
                curve: enums.AnimationCurve.easeIn
            };
            definitions.push(a2);
            var animationSet = new animation_1.Animation(definitions);
            animationSet.play()
                .then(function () {
            })
                .catch(function (e) {
                console.log(e.message);
            });
        }
    };
    DishdetailComponent = __decorate([
        core_1.Component({
            selector: 'app-dishdetail',
            moduleId: module.id,
            templateUrl: './dishdetail.component.html'
        }),
        __param(8, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService, favorite_service_1.FavoriteService, nativescript_ngx_fonticon_1.TNSFontIconService, router_1.ActivatedRoute, router_2.RouterExtensions, modal_dialog_1.ModalDialogService, core_1.ViewContainerRef, page_1.Page, Object])
    ], DishdetailComponent);
    return DishdetailComponent;
}());
exports.DishdetailComponent = DishdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaGRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNoZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUc1RSx5REFBdUQ7QUFDdkQsaUVBQStEO0FBQy9ELGtFQUFxRTtBQUNyRSx1RUFBK0Q7QUFDL0QsMENBQXlEO0FBQ3pELHNEQUErRDtBQUMvRCwyREFBNkM7QUFDN0Msc0NBQW9DO0FBQ3BDLGtFQUEyRjtBQUMzRixnQ0FBK0I7QUFDL0IsMENBQThEO0FBQzlELHdDQUFvRTtBQUNwRSwrQkFBOEI7QUFDOUIsZ0NBQWtDO0FBRWxDLHVEQUF5RDtBQUN6RCw2Q0FBb0Q7QUFDcEQsNENBQTJDO0FBUTNDO0lBY0MsNkJBQW9CLFdBQXdCLEVBQVUsZUFBZ0MsRUFBVSxRQUE0QixFQUFVLEtBQXFCLEVBQVUsZ0JBQWtDLEVBQVUsWUFBZ0MsRUFBVSxLQUF1QixFQUFVLElBQVUsRUFBNkIsT0FBTztRQUF0VCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQTZCLFlBQU8sR0FBUCxPQUFPLENBQUE7UUFQMVUsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUV6QixpQkFBWSxHQUFZLEtBQUssQ0FBQztJQU8vQixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUFBLGlCQWVDO1FBYkEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2YsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9B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QWxNWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XHJcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tICcuLi9zaGFyZWQvY29tbWVudCc7XHJcbmltcG9ydCB7IERpc2hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGlzaC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRmF2b3JpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmF2b3JpdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW1lbnRNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknO1xyXG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcclxuaW1wb3J0IHsgQW5pbWF0aW9uLCBBbmltYXRpb25EZWZpbml0aW9uIH0gZnJvbSAndWkvYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhLCBTd2lwZURpcmVjdGlvbiB9IGZyb20gJ3VpL2dlc3R1cmVzJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb2xvcic7XHJcbmltcG9ydCAqIGFzIGVudW1zIGZyb20gJ3VpL2VudW1zJztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3VpL2NvcmUvdmlldyc7XHJcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XHJcbmltcG9ydCB7IEltYWdlU291cmNlLCBmcm9tVXJsIH0gZnJvbSBcImltYWdlLXNvdXJjZVwiO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2FwcC1kaXNoZGV0YWlsJyxcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9kaXNoZGV0YWlsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERpc2hkZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHRkaXNoOiBEaXNoO1xyXG5cdGNvbW1lbnQ6IENvbW1lbnQ7XHJcblx0ZXJyTWVzczogc3RyaW5nO1xyXG5cdGF2Z3N0YXJzOiBzdHJpbmc7XHJcblx0bnVtY29tbWVudHM6IG51bWJlcjtcclxuXHRmYXZvcml0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBzaG93Q29tbWVudHM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBjYXJkSW1hZ2U6IFZpZXc7XHJcbiAgY29tbWVudExpc3Q6IFZpZXc7XHJcbiAgY2FyZExheW91dDogVmlldztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkaXNoc2VydmljZTogRGlzaFNlcnZpY2UsIHByaXZhdGUgZmF2b3JpdGVzZXJ2aWNlOiBGYXZvcml0ZVNlcnZpY2UsIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBASW5qZWN0KCdCYXNlVVJMJykgcHJpdmF0ZSBiYXNlVVJMKSB7XHJcblxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXNcclxuXHRcdFx0LnBpcGUoc3dpdGNoTWFwKChwYXJhbXM6IFBhcmFtcykgPT4gdGhpcy5kaXNoc2VydmljZS5nZXREaXNoKHBhcmFtc1snaWQnXSkpKVxyXG5cdFx0XHQuc3Vic2NyaWJlKGRpc2ggPT4ge1xyXG5cdFx0XHRcdHRoaXMuZGlzaCA9IGRpc2g7XHJcbiAgICAgICAgICB0aGlzLmZhdm9yaXRlID0gdGhpcy5mYXZvcml0ZXNlcnZpY2UuaXNGYXZvcml0ZSh0aGlzLmRpc2guaWQpO1xyXG4gICAgICAgICAgdGhpcy5udW1jb21tZW50cyA9IHRoaXMuZGlzaC5jb21tZW50cy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICAgIHRoaXMuZGlzaC5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4gdG90YWwgKz0gY29tbWVudC5yYXRpbmcpO1xyXG4gICAgICAgICAgdGhpcy5hdmdzdGFycyA9ICh0b3RhbC90aGlzLm51bWNvbW1lbnRzKS50b0ZpeGVkKDIpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRlcnJtZXNzID0+IHsgdGhpcy5kaXNoID0gbnVsbDsgdGhpcy5lcnJNZXNzID0gPGFueT5lcnJtZXNzOyB9KTtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0YWRkVG9GYXZvcml0ZXMoKSB7XHJcblx0XHRpZighdGhpcy5mYXZvcml0ZSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnQWRkaW5nIHRvIEZhdm9yaXRlcycsIHRoaXMuZGlzaC5pZCk7XHJcblx0XHRcdHRoaXMuZmF2b3JpdGUgPSB0aGlzLmZhdm9yaXRlc2VydmljZS5hZGRGYXZvcml0ZSh0aGlzLmRpc2guaWQpO1xyXG5cdFx0XHRjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHkoXCJBZGRlZCBEaXNoIFwiICsgdGhpcy5kaXNoLmlkLCBcInNob3J0XCIsIFwiYm90dG9tXCIpO1xyXG5cdFx0XHR0b2FzdC5zaG93KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuICBzb2NpYWxTaGFyZSgpIHtcclxuICAgIGxldCBpbWFnZTogSW1hZ2VTb3VyY2U7XHJcblxyXG4gICAgZnJvbVVybCh0aGlzLmJhc2VVUkwgKyB0aGlzLmRpc2guaW1hZ2UpXHJcbiAgICAgLnRoZW4oKGltZzogSW1hZ2VTb3VyY2UpID0+IHtcclxuICAgICAgIGltYWdlID0gaW1nOyBcclxuICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZUltYWdlKGltYWdlLCBcIkhvdyB3b3VsZCB5b3UgbGlrZSB0byBzaGFyZSB0aGlzIGltYWdlP1wiKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKCkgPT4geyBjb25zb2xlLmxvZygnRXJyb3IgbG9hZGluZyBpbWFnZScpOyB9KTtcclxuICB9XHJcblxyXG5cdGRpc3BsYXlBY3Rpb25EaWFsb2coKSB7XHJcblxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHRpdGxlOiBcIkFjdGlvbnNcIixcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcclxuICAgICAgYWN0aW9uczogW1wiQWRkIHRvIEZhdm9yaXRlc1wiLCBcIkFkZCBjb21tZW50XCIsIFwiU29jaWFsIFNoYXJpbmdcIl1cclxuICAgIH07XHJcblxyXG4gICAgYWN0aW9uKG9wdGlvbnMpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgaWYgKHJlc3VsdCA9PT0gXCJBZGQgdG8gRmF2b3JpdGVzXCIpIHtcclxuICAgICAgICB0aGlzLmFkZFRvRmF2b3JpdGVzKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIkFkZCBjb21tZW50XCIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkIENvbW1lbnQgZnJvbSBBY3Rpb24gRGlhbG9nXCIpO1xyXG4gICAgICAgIHRoaXMuY29tbWVudE1vZGFsVmlldygpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSAnU29jaWFsIFNoYXJpbmcnKSB7XHJcbiAgICAgICAgdGhpcy5zb2NpYWxTaGFyZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBjb21tZW50TW9kYWxWaWV3KCkge1xyXG4gIFx0bGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcclxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxyXG4gICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChDb21tZW50TW9kYWxDb21wb25lbnQsIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKChyZXN1bHQ6IENvbW1lbnQpID0+IHtcclxuICAgICAgICB0aGlzLmRpc2guY29tbWVudHMucHVzaChyZXN1bHQpO1xyXG4gICAgICAgIHRoaXMubnVtY29tbWVudHMgPSB0aGlzLmRpc2guY29tbWVudHMubGVuZ3RoO1xyXG4gICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXNoLmNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQ6IENvbW1lbnQpID0+IHRvdGFsICs9IGNvbW1lbnQucmF0aW5nKTtcclxuICAgICAgICB0aGlzLmF2Z3N0YXJzID0gKHRvdGFsL3RoaXMubnVtY29tbWVudHMpLnRvRml4ZWQoMik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcblx0Z29CYWNrKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuXHR9XHJcblxyXG4gIFxyXG5cclxuICBvblN3aXBlKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkgeyAgICAgIFxyXG5cclxuICAgICAgaWYgKGFyZ3MuZGlyZWN0aW9uID09PSBTd2lwZURpcmVjdGlvbi51cCAmJiAhdGhpcy5zaG93Q29tbWVudHMgKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlVXAoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gU3dpcGVEaXJlY3Rpb24uZG93biAmJiB0aGlzLnNob3dDb21tZW50cyApIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmFuaW1hdGVEb3duKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBzaG93QW5kSGlkZUNvbW1lbnRzKCkge1xyXG4gICAgaWYgKCF0aGlzLnNob3dDb21tZW50cykge1xyXG4gICAgICB0aGlzLmFuaW1hdGVVcCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hbmltYXRlRG93bigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZVVwKCkge1xyXG4gICAgaWYgKHRoaXMuZGlzaCAmJiAhdGhpcy5zaG93Q29tbWVudHMpIHtcclxuICAgICAgdGhpcy5jYXJkSW1hZ2UgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJjYXJkSW1hZ2VcIik7XHJcbiAgICAgIHRoaXMuY2FyZExheW91dCA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcImNhcmRMYXlvdXRcIik7XHJcbiAgICAgIHRoaXMuY29tbWVudExpc3QgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJjb21tZW50TGlzdFwiKTtcclxuXHJcbiAgICAgIGxldCBkZWZpbml0aW9ucyA9IG5ldyBBcnJheTxBbmltYXRpb25EZWZpbml0aW9uPigpO1xyXG5cclxuICAgICAgbGV0IGExOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xyXG4gICAgICAgIHRhcmdldDogdGhpcy5jYXJkSW1hZ2UsXHJcbiAgICAgICAgc2NhbGU6IHsgeDogMSwgeTogMCB9LFxyXG4gICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAtMjAwIH0sXHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5cclxuICAgICAgfTtcclxuICAgICAgZGVmaW5pdGlvbnMucHVzaChhMSk7XHJcblxyXG4gICAgICBsZXQgYTI6IEFuaW1hdGlvbkRlZmluaXRpb24gPSB7XHJcbiAgICAgICAgdGFyZ2V0OiB0aGlzLmNhcmRMYXlvdXQsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCIjZmZjMTA3XCIpLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJblxyXG4gICAgICB9O1xyXG4gICAgICBkZWZpbml0aW9ucy5wdXNoKGEyKTtcclxuXHJcbiAgICAgIGxldCBhbmltYXRpb25TZXQgPSBuZXcgQW5pbWF0aW9uKGRlZmluaXRpb25zKTtcclxuICAgICAgYW5pbWF0aW9uU2V0LnBsYXkoKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2hvd0NvbW1lbnRzID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFuaW1hdGVEb3duKCkge1xyXG4gICAgaWYgKHRoaXMuZGlzaCAmJiB0aGlzLnNob3dDb21tZW50cykge1xyXG4gICAgICB0aGlzLmNhcmRJbWFnZSA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcImNhcmRJbWFnZVwiKTtcclxuICAgICAgdGhpcy5jYXJkTGF5b3V0ID0gPFZpZXc+dGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwiY2FyZExheW91dFwiKTtcclxuICAgICAgdGhpcy5jb21tZW50TGlzdCA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcImNvbW1lbnRMaXN0XCIpO1xyXG5cclxuICAgICAgdGhpcy5zaG93Q29tbWVudHMgPSBmYWxzZTtcclxuXHJcbiAgICAgIGxldCBkZWZpbml0aW9ucyA9IG5ldyBBcnJheTxBbmltYXRpb25EZWZpbml0aW9uPigpO1xyXG5cclxuICAgICAgbGV0IGExOiBBbmltYXRpb25EZWZpbml0aW9uID0ge1xyXG4gICAgICAgIHRhcmdldDogdGhpcy5jYXJkSW1hZ2UsXHJcbiAgICAgICAgc2NhbGU6IHsgeDogMSwgeTogMSB9LFxyXG4gICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5cclxuICAgICAgfTtcclxuICAgICAgZGVmaW5pdGlvbnMucHVzaChhMSk7XHJcblxyXG4gICAgICBsZXQgYTI6IEFuaW1hdGlvbkRlZmluaXRpb24gPSB7XHJcbiAgICAgICAgdGFyZ2V0OiB0aGlzLmNhcmRMYXlvdXQsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCIjZmZmZmZmXCIpLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJblxyXG4gICAgICB9O1xyXG4gICAgICBkZWZpbml0aW9ucy5wdXNoKGEyKTtcclxuXHJcbiAgICAgIGxldCBhbmltYXRpb25TZXQgPSBuZXcgQW5pbWF0aW9uKGRlZmluaXRpb25zKTtcclxuICAgICAgYW5pbWF0aW9uU2V0LnBsYXkoKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0iXX0=