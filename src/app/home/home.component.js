"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var promotion_service_1 = require("../services/promotion.service");
var leader_service_1 = require("../services/leader.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var page_1 = require("ui/page");
var gestures_1 = require("ui/gestures");
var enums = require("ui/enums");
var app = require("application");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dishService, promotionService, leaderService, page, fonticon, baseURL) {
        this.dishService = dishService;
        this.promotionService = promotionService;
        this.leaderService = leaderService;
        this.page = page;
        this.fonticon = fonticon;
        this.baseURL = baseURL;
        this.showLeftCard = true;
        this.showMiddleCard = false;
        this.showRightCard = false;
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
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    HomeComponent.prototype.onSwipe = function (args) {
        if (args.direction === gestures_1.SwipeDirection.left) {
            this.animateLeft();
        }
        else if (args.direction === gestures_1.SwipeDirection.right) {
            this.animateRight();
        }
    };
    HomeComponent.prototype.animateLeft = function () {
        var _this = this;
        if (this.dish && this.promotion && this.leader) {
            this.leftCard = this.page.getViewById("leftCard");
            this.middleCard = this.page.getViewById("middleCard");
            this.rightCard = this.page.getViewById("rightCard");
            if (this.showLeftCard) {
                this.rightCard.animate({
                    translate: { x: 2000, y: 0 }
                })
                    .then(function () {
                    _this.leftCard.animate({
                        translate: { x: -2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showLeftCard = false;
                        _this.showMiddleCard = true;
                        _this.middleCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showMiddleCard) {
                this.leftCard.animate({
                    translate: { x: 2000, y: 0 }
                })
                    .then(function () {
                    _this.middleCard.animate({
                        translate: { x: -2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showMiddleCard = false;
                        _this.showRightCard = true;
                        _this.rightCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showRightCard) {
                this.middleCard.animate({
                    translate: { x: 2000, y: 0 }
                })
                    .then(function () {
                    _this.rightCard.animate({
                        translate: { x: -2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showRightCard = false;
                        _this.showLeftCard = true;
                        _this.leftCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
        }
    };
    HomeComponent.prototype.animateRight = function () {
        var _this = this;
        if (this.dish && this.promotion && this.leader) {
            this.leftCard = this.page.getViewById("leftCard");
            this.middleCard = this.page.getViewById("middleCard");
            this.rightCard = this.page.getViewById("rightCard");
            if (this.showLeftCard) {
                this.middleCard.animate({
                    translate: { x: -2000, y: 0 }
                })
                    .then(function () {
                    _this.leftCard.animate({
                        translate: { x: 2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showLeftCard = false;
                        _this.showRightCard = true;
                        _this.rightCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showMiddleCard) {
                this.rightCard.animate({
                    translate: { x: -2000, y: 0 }
                })
                    .then(function () {
                    _this.middleCard.animate({
                        translate: { x: 2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showMiddleCard = false;
                        _this.showLeftCard = true;
                        _this.leftCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
            else if (this.showRightCard) {
                this.leftCard.animate({
                    translate: { x: -2000, y: 0 }
                })
                    .then(function () {
                    _this.rightCard.animate({
                        translate: { x: 2000, y: 0 },
                        duration: 500,
                        curve: enums.AnimationCurve.easeInOut
                    })
                        .then(function () {
                        _this.showRightCard = false;
                        _this.showMiddleCard = true;
                        _this.middleCard.animate({
                            translate: { x: 0, y: 0 },
                            duration: 500,
                            curve: enums.AnimationCurve.easeInOut
                        });
                    });
                });
            }
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            moduleId: module.id,
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __param(5, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [dish_service_1.DishService, promotion_service_1.PromotionService, leader_service_1.LeaderService, page_1.Page, nativescript_ngx_fonticon_1.TNSFontIconService, Object])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUUxRCx5REFBdUQ7QUFFdkQsbUVBQWlFO0FBRWpFLDZEQUEyRDtBQUMzRCx1RUFBK0Q7QUFDL0QsZ0NBQStCO0FBRS9CLHdDQUFvRTtBQUNwRSxnQ0FBa0M7QUFDbEMsaUNBQW1DO0FBVW5DO0lBZUUsdUJBQW9CLFdBQXdCLEVBQVUsZ0JBQWtDLEVBQVUsYUFBNEIsRUFBVSxJQUFVLEVBQVUsUUFBNEIsRUFBNkIsT0FBTztRQUF4TSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUE2QixZQUFPLEdBQVAsT0FBTyxDQUFBO1FBUDVOLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGtCQUFhLEdBQVksS0FBSyxDQUFDO0lBS2lNLENBQUM7SUFFak8sZ0NBQVEsR0FBUjtRQUFBLGlCQVlDO1FBVkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7YUFDL0IsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLEVBQ2pDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsR0FBUSxPQUFPLEVBQS9CLENBQStCLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUU7YUFDekMsU0FBUyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLEVBQTFCLENBQTBCLEVBQ2hELFVBQUEsT0FBTyxJ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QkFBQztDQUFBLEFBMU1ELElBME1DO0FBMU1ZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xyXG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XHJcbmltcG9ydCB7IFByb21vdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9wcm9tb3Rpb24nO1xyXG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcHJvbW90aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMZWFkZXIgfSBmcm9tICcuLi9zaGFyZWQvbGVhZGVyJztcclxuaW1wb3J0IHsgTGVhZGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xlYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3VpL2NvcmUvdmlldyc7XHJcbmltcG9ydCB7IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSwgU3dpcGVEaXJlY3Rpb24gfSBmcm9tICd1aS9nZXN0dXJlcyc7XHJcbmltcG9ydCAqIGFzIGVudW1zIGZyb20gJ3VpL2VudW1zJztcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2FwcC1ob21lJyxcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBkaXNoOiBEaXNoO1xyXG4gIHByb21vdGlvbjogUHJvbW90aW9uO1xyXG4gIGxlYWRlcjogTGVhZGVyO1xyXG4gIGRpc2hFcnJNZXNzOiBzdHJpbmc7XHJcbiAgcHJvbW9FcnJNZXNzOiBzdHJpbmc7XHJcbiAgbGVhZGVyRXJyTWVzczogc3RyaW5nO1xyXG4gIHNob3dMZWZ0Q2FyZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgc2hvd01pZGRsZUNhcmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93UmlnaHRDYXJkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgbGVmdENhcmQ6IFZpZXc7XHJcbiAgbWlkZGxlQ2FyZDogVmlldztcclxuICByaWdodENhcmQ6IFZpZXc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlzaFNlcnZpY2U6IERpc2hTZXJ2aWNlLCBwcml2YXRlIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2UsIHByaXZhdGUgbGVhZGVyU2VydmljZTogTGVhZGVyU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsIEBJbmplY3QoJ0Jhc2VVUkwnKSBwcml2YXRlIGJhc2VVUkwpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB0aGlzLmRpc2hTZXJ2aWNlLmdldEZlYXR1cmVkRGlzaCgpXHJcbiAgICAgIC5zdWJzY3JpYmUoZGlzaCA9PiB0aGlzLmRpc2ggPSBkaXNoLFxyXG4gICAgICAgIGVycm1lc3MgPT4gdGhpcy5kaXNoRXJyTWVzcyA9IDxhbnk+ZXJybWVzcyk7XHJcbiAgICB0aGlzLnByb21vdGlvblNlcnZpY2UuZ2V0RmVhdHVyZWRQcm9tb3Rpb24oKVxyXG4gICAgICAuc3Vic2NyaWJlKHByb21vdGlvbiA9PiB0aGlzLnByb21vdGlvbiA9IHByb21vdGlvbixcclxuICAgICAgICBlcnJtZXNzID0+IHRoaXMucHJvbW9FcnJNZXNzID0gPGFueT5lcnJtZXNzKTtcclxuICAgIHRoaXMubGVhZGVyU2VydmljZS5nZXRGZWF0dXJlZExlYWRlcigpXHJcbiAgICAgIC5zdWJzY3JpYmUobGVhZGVyID0+IHRoaXMubGVhZGVyID0gbGVhZGVyLFxyXG4gICAgICAgIGVycm1lc3MgPT4gdGhpcy5sZWFkZXJFcnJNZXNzID0gPGFueT5lcnJtZXNzKTtcclxuXHJcbiAgfVxyXG5cclxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxuXHJcbiAgb25Td2lwZShhcmdzOiBTd2lwZUdlc3R1cmVFdmVudERhdGEpIHtcclxuICAgIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gU3dpcGVEaXJlY3Rpb24ubGVmdCkge1xyXG4gICAgICB0aGlzLmFuaW1hdGVMZWZ0KCk7XHJcbiAgICB9IGVsc2UgaWYgKGFyZ3MuZGlyZWN0aW9uID09PSBTd2lwZURpcmVjdGlvbi5yaWdodCkge1xyXG4gICAgICB0aGlzLmFuaW1hdGVSaWdodCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZUxlZnQoKSB7XHJcblxyXG4gICAgaWYgKHRoaXMuZGlzaCAmJiB0aGlzLnByb21vdGlvbiAmJiB0aGlzLmxlYWRlcikge1xyXG4gICAgICB0aGlzLmxlZnRDYXJkID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwibGVmdENhcmRcIik7XHJcbiAgICAgIHRoaXMubWlkZGxlQ2FyZCA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcIm1pZGRsZUNhcmRcIik7XHJcbiAgICAgIHRoaXMucmlnaHRDYXJkID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwicmlnaHRDYXJkXCIpO1xyXG5cclxuICAgICAgaWYgKCB0aGlzLnNob3dMZWZ0Q2FyZCApIHtcclxuXHJcbiAgICAgICAgdGhpcy5yaWdodENhcmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMjAwMCwgeTogMCB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxlZnRDYXJkLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogLTIwMDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TGVmdENhcmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93TWlkZGxlQ2FyZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWlkZGxlQ2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfSBlbHNlIGlmICggdGhpcy5zaG93TWlkZGxlQ2FyZCApIHtcclxuXHJcbiAgICAgICAgdGhpcy5sZWZ0Q2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAyMDAwLCB5OiAwIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubWlkZGxlQ2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IC0yMDAwLCB5OiAwIH0sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd01pZGRsZUNhcmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93UmlnaHRDYXJkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5yaWdodENhcmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH0gZWxzZSBpZiAoIHRoaXMuc2hvd1JpZ2h0Q2FyZCApIHtcclxuICAgICAgXHJcbiAgICAgICAgdGhpcy5taWRkbGVDYXJkLmFuaW1hdGUoe1xyXG4gICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDIwMDAsIHk6IDAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yaWdodENhcmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAtMjAwMCwgeTogMCB9LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dSaWdodENhcmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93TGVmdENhcmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRDYXJkLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGFuaW1hdGVSaWdodCgpIHtcclxuXHJcbiAgICBpZiAodGhpcy5kaXNoICYmIHRoaXMucHJvbW90aW9uICYmIHRoaXMubGVhZGVyKSB7XHJcbiAgICAgIHRoaXMubGVmdENhcmQgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJsZWZ0Q2FyZFwiKTtcclxuICAgICAgdGhpcy5taWRkbGVDYXJkID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwibWlkZGxlQ2FyZFwiKTtcclxuICAgICAgdGhpcy5yaWdodENhcmQgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJyaWdodENhcmRcIik7XHJcblxyXG4gICAgICBpZiAoIHRoaXMuc2hvd0xlZnRDYXJkICkge1xyXG5cclxuICAgICAgICB0aGlzLm1pZGRsZUNhcmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogLTIwMDAsIHk6IDAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sZWZ0Q2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDIwMDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TGVmdENhcmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93UmlnaHRDYXJkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5yaWdodENhcmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH0gZWxzZSBpZiAoIHRoaXMuc2hvd01pZGRsZUNhcmQgKSB7XHJcblxyXG4gICAgICAgIHRoaXMucmlnaHRDYXJkLmFuaW1hdGUoe1xyXG4gICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IC0yMDAwLCB5OiAwIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubWlkZGxlQ2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDIwMDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TWlkZGxlQ2FyZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMZWZ0Q2FyZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdENhcmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH0gZWxzZSBpZiAoIHRoaXMuc2hvd1JpZ2h0Q2FyZCApIHtcclxuICAgICAgXHJcbiAgICAgICAgdGhpcy5sZWZ0Q2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAtMjAwMCwgeTogMCB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJpZ2h0Q2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDIwMDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93UmlnaHRDYXJkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd01pZGRsZUNhcmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1pZGRsZUNhcmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn0iXX0=