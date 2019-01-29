"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var favorite_service_1 = require("../services/favorite.service");
var angular_1 = require("nativescript-ui-listview/angular");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var dialogs_1 = require("ui/dialogs");
var nativescript_toasty_1 = require("nativescript-toasty");
var app = require("application");
var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(favoriteservice, BaseURL) {
        this.favoriteservice = favoriteservice;
        this.BaseURL = BaseURL;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.favoriteservice.getFavorites()
            .subscribe(function (favorites) { return _this.favorites = new observable_array_1.ObservableArray(favorites); }, function (errmess) { return _this.errMess = errmess; });
    };
    FavoritesComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    FavoritesComponent.prototype.deleteFavorite = function (id) {
        var _this = this;
        var options = {
            title: "Confirm Delete",
            message: 'Do you want to delete Dish ' + id,
            okButtonText: 'Yes',
            cancelButtonText: 'No',
            neutralButtonText: 'Cancel'
        };
        dialogs_1.confirm(options).then(function (result) {
            if (result) {
                _this.favorites = null;
                _this.favoriteservice.deleteFavorite(id)
                    .subscribe(function (favorites) {
                    var toast = new nativescript_toasty_1.Toasty('Deleted Dish ' + id, 'short', 'bottom');
                    toast.show();
                    _this.favorites = new observable_array_1.ObservableArray(favorites);
                }, function (errmess) { return _this.errMess = errmess; });
            }
            else {
                console.log('Delete cancelled');
            }
        });
    };
    FavoritesComponent.prototype.onCellSwiping = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var currentItemView = args.object;
        var currentView;
        if (args.data.x > 200) {
        }
        else if (args.data.x < -200) {
        }
    };
    FavoritesComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['object'];
        var leftItem = swipeView.getViewById('mark-view');
        var rightItem = swipeView.getViewById('delete-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    };
    FavoritesComponent.prototype.onSwipeCellFinished = function (args) {
    };
    FavoritesComponent.prototype.onLeftSwipeClick = function (args) {
        console.log('Left swipe click');
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    };
    FavoritesComponent.prototype.onRightSwipeClick = function (args) {
        this.deleteFavorite(args.object.bindingContext.id);
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    };
    __decorate([
        core_1.ViewChild('myListView'),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], FavoritesComponent.prototype, "listViewComponent", void 0);
    FavoritesComponent = __decorate([
        core_1.Component({
            selector: 'app-favorites',
            moduleId: module.id,
            templateUrl: './favorites.component.html',
            styleUrls: ['./favorites.component.css']
        }),
        __param(1, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [favorite_service_1.FavoriteService, Object])
    ], FavoritesComponent);
    return FavoritesComponent;
}());
exports.FavoritesComponent = FavoritesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUU7QUFDckUsaUVBQStEO0FBRy9ELDREQUF3RTtBQUN4RSwyRUFBeUU7QUFFekUsc0NBQXFDO0FBQ3JDLDJEQUE2QztBQUM3QyxpQ0FBbUM7QUFTbkM7SUFPQyw0QkFBb0IsZUFBZ0MsRUFBNkIsT0FBTztRQUFwRSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBNkIsWUFBTyxHQUFQLE9BQU8sQ0FBQTtJQUV4RixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUU7YUFDakMsU0FBUyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtDQUFlLENBQUMsU0FBUyxDQUFDLEVBQS9DLENBQStDLEVBQ3ZFLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQXRCLENBQXNCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsOENBQWlCLEdBQWpCO1FBQ0csSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVGLDJDQUFjLEdBQWQsVUFBZSxFQUFVO1FBQXpCLGlCQTRCRTtRQTFCRCxJQUFJLE9BQU8sR0FBRztZQUNiLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsT0FBTyxFQUFFLDZCQUE2QixHQUFHLEVBQUU7WUFDM0MsWUFBWSxFQUFFLEtBQUs7WUFDbkIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixpQkFBaUIsRUFBRSxRQUFRO1NBQzNCLENBQUM7UUFFRixpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQWU7WUFDckMsSUFBRyxNQUFNLEVBQUU7Z0JBRVYsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBRXRCLEtBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztxQkFDbkMsU0FBUyxDQUFDLFVBQUEsU0FBUztvQkFDbEIsSUFBTSxLQUFLLEdBQUcsSUFBSSw0QkFBTSxDQUFDLGVBQWUsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBRSxDQUFDO29CQUNuRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2IsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtDQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2pELENBQUMsRUFDRCxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUF0QixDQUFzQixDQUFDLENBQUM7YUFFdkM7aUJBQU07Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQ2hDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFFSCxDQUFDO0lBRU0sMENBQWEsR0FBcEIsVUFBcUIsSUFBdUI7UUFDeEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDeEMsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxJQUFJLFdBQVcsQ0FBQztRQUVoQixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtTQUVyQjthQUNJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7U0FFNUI7SUFDTCxDQUFDO0lBRUssK0NBQWtCLEdBQXpCLFVBQTBCLElBQXVCO1FBQzFDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUvQixJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFPLFdBQVcsQ0FBQyxDQUFDO1FBQ3hELElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQU8sYUFBYSxDQUFDLENBQUM7UUFDM0QsV0FBVyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMvQyxXQUFXLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2pELFdBQVcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFSSxnREFBbUIsR0FBMUIsVUFBMkIsSUFBdUI7SUFFaEQsQ0FBQztJQUVNLDZDQUFnQixHQUF2QixVQUF3QixJQUF1QjtRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO0lBQ25FLENBQUM7SUFFTSw4Q0FBaUIsR0FBeEIsVUFBeUIsSUFBdUI7UUFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLDRCQUE0QixFQUFFLENBQUM7SUFDbkUsQ0FBQztJQW5GcUI7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQW9CLDhCQUFvQjtpRUFBQztJQUxyRCxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3hDLENBQUM7UUFRc0QsV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBQW5DLGtDQUFlO09BUHhDLGtCQUFrQixDQTBGOUI7SUFBRCx5QkFBQztDQUFBLEFBMUZELElBMEZDO0FBMUZZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGYXZvcml0ZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYXZvcml0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGlzaCB9IGZyb20gJy4uL3NoYXJlZC9kaXNoJztcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3JztcclxuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3JztcclxuaW1wb3J0IHsgY29uZmlybSB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYXBwLWZhdm9yaXRlcycsXHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHR0ZW1wbGF0ZVVybDogJy4vZmF2b3JpdGVzLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9mYXZvcml0ZXMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYXZvcml0ZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdFxyXG5cdGZhdm9yaXRlczogT2JzZXJ2YWJsZUFycmF5PERpc2g+O1xyXG5cdGVyck1lc3M6IHN0cmluZztcclxuXHJcblx0QFZpZXdDaGlsZCgnbXlMaXN0VmlldycpIGxpc3RWaWV3Q29tcG9uZW50OiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmYXZvcml0ZXNlcnZpY2U6IEZhdm9yaXRlU2VydmljZSwgQEluamVjdCgnQmFzZVVSTCcpIHByaXZhdGUgQmFzZVVSTCkge1xyXG5cclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5mYXZvcml0ZXNlcnZpY2UuZ2V0RmF2b3JpdGVzKClcclxuXHRcdFx0LnN1YnNjcmliZShmYXZvcml0ZXMgPT4gdGhpcy5mYXZvcml0ZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KGZhdm9yaXRlcyksXHJcblx0XHRcdGVycm1lc3MgPT4gdGhpcy5lcnJNZXNzID0gZXJybWVzcyk7XHJcblx0fVxyXG5cclxuXHRvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxuXHJcblx0ZGVsZXRlRmF2b3JpdGUoaWQ6IG51bWJlcikge1xyXG5cclxuXHRcdGxldCBvcHRpb25zID0ge1xyXG5cdFx0XHR0aXRsZTogXCJDb25maXJtIERlbGV0ZVwiLFxyXG5cdFx0XHRtZXNzYWdlOiAnRG8geW91IHdhbnQgdG8gZGVsZXRlIERpc2ggJyArIGlkLFxyXG5cdFx0XHRva0J1dHRvblRleHQ6ICdZZXMnLFxyXG5cdFx0XHRjYW5jZWxCdXR0b25UZXh0OiAnTm8nLFxyXG5cdFx0XHRuZXV0cmFsQnV0dG9uVGV4dDogJ0NhbmNlbCdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uZmlybShvcHRpb25zKS50aGVuKChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcclxuXHRcdFx0aWYocmVzdWx0KSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuZmF2b3JpdGVzID0gbnVsbDtcclxuXHJcblx0XHRcdFx0dGhpcy5mYXZvcml0ZXNlcnZpY2UuZGVsZXRlRmF2b3JpdGUoaWQpXHJcbiAgICAgICAuc3Vic2NyaWJlKGZhdm9yaXRlcyA9PiB7IFxyXG4gICAgICAgXHRcdGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0eSgnRGVsZXRlZCBEaXNoICcgKyBpZCwgJ3Nob3J0JywgJ2JvdHRvbScgKTtcclxuICAgICAgIFx0XHR0b2FzdC5zaG93KCk7XHJcbiAgICAgICBcdFx0dGhpcy5mYXZvcml0ZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KGZhdm9yaXRlcyk7XHJcbiAgICAgICBcdH0sXHJcbiAgICAgICAgZXJybWVzcyA9PiB0aGlzLmVyck1lc3MgPSBlcnJtZXNzKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ0RlbGV0ZSBjYW5jZWxsZWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7ICAgIFxyXG5cdFx0XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DZWxsU3dpcGluZyhhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xyXG4gICAgICB2YXIgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XHJcbiAgICAgIHZhciBjdXJyZW50SXRlbVZpZXcgPSBhcmdzLm9iamVjdDtcclxuICAgICAgdmFyIGN1cnJlbnRWaWV3O1xyXG5cclxuICAgICAgaWYoYXJncy5kYXRhLnggPiAyMDApIHtcclxuXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoYXJncy5kYXRhLnggPCAtMjAwKSB7XHJcblxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuXHRwdWJsaWMgb25Td2lwZUNlbGxTdGFydGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xyXG4gICAgICAgIHZhciBzd2lwZVZpZXcgPSBhcmdzWydvYmplY3QnXTtcclxuXHJcbiAgICAgICAgdmFyIGxlZnRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkPFZpZXc+KCdtYXJrLXZpZXcnKTtcclxuICAgICAgICB2YXIgcmlnaHRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkPFZpZXc+KCdkZWxldGUtdmlldycpO1xyXG4gICAgICAgIHN3aXBlTGltaXRzLmxlZnQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XHJcbiAgICAgICAgc3dpcGVMaW1pdHMucmlnaHQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xyXG4gICAgICAgIHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKS8yO1xyXG4gICAgfVxyXG5cclxuXHRcdHB1YmxpYyBvblN3aXBlQ2VsbEZpbmlzaGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkxlZnRTd2lwZUNsaWNrKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0xlZnQgc3dpcGUgY2xpY2snKTtcclxuICAgICAgICB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25SaWdodFN3aXBlQ2xpY2soYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZUZhdm9yaXRlKGFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0LmlkKTtcclxuICAgICAgICB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuICAgIH1cclxuXHJcbn0iXX0=