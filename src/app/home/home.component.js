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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUUxRCx5REFBdUQ7QUFFdkQsbUVBQWlFO0FBRWpFLDZEQUEyRDtBQUMzRCx1RUFBK0Q7QUFDL0QsZ0NBQStCO0FBRS9CLHdDQUFvRTtBQUNwRSxnQ0FBa0M7QUFTbEM7SUFlRSx1QkFBb0IsV0FBd0IsRUFBVSxnQkFBa0MsRUFBVSxhQUE0QixFQUFVLElBQVUsRUFBVSxRQUE0QixFQUE2QixPQUFPO1FBQXhNLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQTZCLFlBQU8sR0FBUCxPQUFPLENBQUE7UUFQNU4saUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFLaU0sQ0FBQztJQUVqTyxnQ0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFWQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRTthQUMvQixTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsRUFDakMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFRLE9BQU8sRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRTthQUN6QyxTQUFTLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsRUFBMUIsQ0FBMEIsRUFDaEQsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJ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QUFJLENBQUM7b0JBQ0osS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7d0JBQ3JCLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTt3QkFDNUIsUUFBUSxFQUFFLEdBQUc7d0JBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUztxQkFDdEMsQ0FBQzt5QkFDRCxJQUFJLENBQUM7d0JBQ0osS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7d0JBQzNCLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO3dCQUMzQixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQzs0QkFDdEIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzRCQUN6QixRQUFRLEVBQUUsR0FBRzs0QkFDYixLQUFLLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTO3lCQUN0QyxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFFSjtTQUVGO0lBRUgsQ0FBQztJQW5NVSxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDO1FBaUIyTCxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FBM0ssMEJBQVcsRUFBNEIsb0NBQWdCLEVBQXlCLDhCQUFhLEVBQWdCLFdBQUksRUFBb0IsOENBQWtCO09BZjdLLGFBQWEsQ0FxTXpCO0lBQUQsb0JBQUM7Q0FBQSxBQXJNRCxJQXFNQztBQXJNWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGlzaCB9IGZyb20gJy4uL3NoYXJlZC9kaXNoJztcclxuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcm9tb3Rpb24gfSBmcm9tICcuLi9zaGFyZWQvcHJvbW90aW9uJztcclxuaW1wb3J0IHsgUHJvbW90aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb21vdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGVhZGVyIH0gZnJvbSAnLi4vc2hhcmVkL2xlYWRlcic7XHJcbmltcG9ydCB7IExlYWRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sZWFkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xyXG5pbXBvcnQgeyBTd2lwZUdlc3R1cmVFdmVudERhdGEsIFN3aXBlRGlyZWN0aW9uIH0gZnJvbSAndWkvZ2VzdHVyZXMnO1xyXG5pbXBvcnQgKiBhcyBlbnVtcyBmcm9tICd1aS9lbnVtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2FwcC1ob21lJyxcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBkaXNoOiBEaXNoO1xyXG4gIHByb21vdGlvbjogUHJvbW90aW9uO1xyXG4gIGxlYWRlcjogTGVhZGVyO1xyXG4gIGRpc2hFcnJNZXNzOiBzdHJpbmc7XHJcbiAgcHJvbW9FcnJNZXNzOiBzdHJpbmc7XHJcbiAgbGVhZGVyRXJyTWVzczogc3RyaW5nO1xyXG4gIHNob3dMZWZ0Q2FyZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgc2hvd01pZGRsZUNhcmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93UmlnaHRDYXJkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgbGVmdENhcmQ6IFZpZXc7XHJcbiAgbWlkZGxlQ2FyZDogVmlldztcclxuICByaWdodENhcmQ6IFZpZXc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlzaFNlcnZpY2U6IERpc2hTZXJ2aWNlLCBwcml2YXRlIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2UsIHByaXZhdGUgbGVhZGVyU2VydmljZTogTGVhZGVyU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsIEBJbmplY3QoJ0Jhc2VVUkwnKSBwcml2YXRlIGJhc2VVUkwpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB0aGlzLmRpc2hTZXJ2aWNlLmdldEZlYXR1cmVkRGlzaCgpXHJcbiAgICAgIC5zdWJzY3JpYmUoZGlzaCA9PiB0aGlzLmRpc2ggPSBkaXNoLFxyXG4gICAgICAgIGVycm1lc3MgPT4gdGhpcy5kaXNoRXJyTWVzcyA9IDxhbnk+ZXJybWVzcyk7XHJcbiAgICB0aGlzLnByb21vdGlvblNlcnZpY2UuZ2V0RmVhdHVyZWRQcm9tb3Rpb24oKVxyXG4gICAgICAuc3Vic2NyaWJlKHByb21vdGlvbiA9PiB0aGlzLnByb21vdGlvbiA9IHByb21vdGlvbixcclxuICAgICAgICBlcnJtZXNzID0+IHRoaXMucHJvbW9FcnJNZXNzID0gPGFueT5lcnJtZXNzKTtcclxuICAgIHRoaXMubGVhZGVyU2VydmljZS5nZXRGZWF0dXJlZExlYWRlcigpXHJcbiAgICAgIC5zdWJzY3JpYmUobGVhZGVyID0+IHRoaXMubGVhZGVyID0gbGVhZGVyLFxyXG4gICAgICAgIGVycm1lc3MgPT4gdGhpcy5sZWFkZXJFcnJNZXNzID0gPGFueT5lcnJtZXNzKTtcclxuXHJcbiAgfVxyXG5cclxuICBvblN3aXBlKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkge1xyXG4gICAgaWYgKGFyZ3MuZGlyZWN0aW9uID09PSBTd2lwZURpcmVjdGlvbi5sZWZ0KSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0ZUxlZnQoKTtcclxuICAgIH0gZWxzZSBpZiAoYXJncy5kaXJlY3Rpb24gPT09IFN3aXBlRGlyZWN0aW9uLnJpZ2h0KSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0ZVJpZ2h0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhbmltYXRlTGVmdCgpIHtcclxuXHJcbiAgICBpZiAodGhpcy5kaXNoICYmIHRoaXMucHJvbW90aW9uICYmIHRoaXMubGVhZGVyKSB7XHJcbiAgICAgIHRoaXMubGVmdENhcmQgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJsZWZ0Q2FyZFwiKTtcclxuICAgICAgdGhpcy5taWRkbGVDYXJkID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwibWlkZGxlQ2FyZFwiKTtcclxuICAgICAgdGhpcy5yaWdodENhcmQgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJyaWdodENhcmRcIik7XHJcblxyXG4gICAgICBpZiAoIHRoaXMuc2hvd0xlZnRDYXJkICkge1xyXG5cclxuICAgICAgICB0aGlzLnJpZ2h0Q2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAyMDAwLCB5OiAwIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubGVmdENhcmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAtMjAwMCwgeTogMCB9LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMZWZ0Q2FyZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dNaWRkbGVDYXJkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5taWRkbGVDYXJkLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9IGVsc2UgaWYgKCB0aGlzLnNob3dNaWRkbGVDYXJkICkge1xyXG5cclxuICAgICAgICB0aGlzLmxlZnRDYXJkLmFuaW1hdGUoe1xyXG4gICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDIwMDAsIHk6IDAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5taWRkbGVDYXJkLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogLTIwMDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TWlkZGxlQ2FyZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dSaWdodENhcmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Q2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfSBlbHNlIGlmICggdGhpcy5zaG93UmlnaHRDYXJkICkge1xyXG4gICAgICBcclxuICAgICAgICB0aGlzLm1pZGRsZUNhcmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMjAwMCwgeTogMCB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJpZ2h0Q2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IC0yMDAwLCB5OiAwIH0sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1JpZ2h0Q2FyZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMZWZ0Q2FyZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdENhcmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZVJpZ2h0KCkge1xyXG5cclxuICAgIGlmICh0aGlzLmRpc2ggJiYgdGhpcy5wcm9tb3Rpb24gJiYgdGhpcy5sZWFkZXIpIHtcclxuICAgICAgdGhpcy5sZWZ0Q2FyZCA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcImxlZnRDYXJkXCIpO1xyXG4gICAgICB0aGlzLm1pZGRsZUNhcmQgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJtaWRkbGVDYXJkXCIpO1xyXG4gICAgICB0aGlzLnJpZ2h0Q2FyZCA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcInJpZ2h0Q2FyZFwiKTtcclxuXHJcbiAgICAgIGlmICggdGhpcy5zaG93TGVmdENhcmQgKSB7XHJcblxyXG4gICAgICAgIHRoaXMubWlkZGxlQ2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAtMjAwMCwgeTogMCB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxlZnRDYXJkLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMjAwMCwgeTogMCB9LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMZWZ0Q2FyZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dSaWdodENhcmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Q2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfSBlbHNlIGlmICggdGhpcy5zaG93TWlkZGxlQ2FyZCApIHtcclxuXHJcbiAgICAgICAgdGhpcy5yaWdodENhcmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogLTIwMDAsIHk6IDAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5taWRkbGVDYXJkLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMjAwMCwgeTogMCB9LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dNaWRkbGVDYXJkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0xlZnRDYXJkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0Q2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfSBlbHNlIGlmICggdGhpcy5zaG93UmlnaHRDYXJkICkge1xyXG4gICAgICBcclxuICAgICAgICB0aGlzLmxlZnRDYXJkLmFuaW1hdGUoe1xyXG4gICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IC0yMDAwLCB5OiAwIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucmlnaHRDYXJkLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMjAwMCwgeTogMCB9LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dSaWdodENhcmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93TWlkZGxlQ2FyZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWlkZGxlQ2FyZC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufSJdfQ==