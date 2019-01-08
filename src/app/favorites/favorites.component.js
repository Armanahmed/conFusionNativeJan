"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var favorite_service_1 = require("../services/favorite.service");
var angular_1 = require("nativescript-ui-listview/angular");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var dialogs_1 = require("ui/dialogs");
var nativescript_toasty_1 = require("nativescript-toasty");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUU7QUFDckUsaUVBQStEO0FBRy9ELDREQUF3RTtBQUN4RSwyRUFBeUU7QUFFekUsc0NBQXFDO0FBQ3JDLDJEQUE2QztBQVE3QztJQU9DLDRCQUFvQixlQUFnQyxFQUE2QixPQUFPO1FBQXBFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUE2QixZQUFPLEdBQVAsT0FBTyxDQUFBO0lBRXhGLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRTthQUNqQyxTQUFTLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksa0NBQWUsQ0FBQyxTQUFTLENBQUMsRUFBL0MsQ0FBK0MsRUFDdkUsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCwyQ0FBYyxHQUFkLFVBQWUsRUFBVTtRQUF6QixpQkE0QkU7UUExQkQsSUFBSSxPQUFPLEdBQUc7WUFDYixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLE9BQU8sRUFBRSw2QkFBNkIsR0FBRyxFQUFFO1lBQzNDLFlBQVksRUFBRSxLQUFLO1lBQ25CLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsaUJBQWlCLEVBQUUsUUFBUTtTQUMzQixDQUFDO1FBRUYsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFlO1lBQ3JDLElBQUcsTUFBTSxFQUFFO2dCQUVWLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUV0QixLQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7cUJBQ25DLFNBQVMsQ0FBQyxVQUFBLFNBQVM7b0JBQ2xCLElBQU0sS0FBSyxHQUFHLElBQUksNEJBQU0sQ0FBQyxlQUFlLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUUsQ0FBQztvQkFDbkUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNiLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLEVBQ0QsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO2FBRXZDO2lCQUFNO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUNoQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBRUgsQ0FBQztJQUVNLDBDQUFhLEdBQXBCLFVBQXFCLElBQXVCO1FBQ3hDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxXQUFXLENBQUM7UUFFaEIsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7U0FFckI7YUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO1NBRTVCO0lBQ0wsQ0FBQztJQUVLLCtDQUFrQixHQUF6QixVQUEwQixJQUF1QjtRQUMxQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN4QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFL0IsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBTyxXQUFXLENBQUMsQ0FBQztRQUN4RCxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFPLGFBQWEsQ0FBQyxDQUFDO1FBQzNELFdBQVcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDL0MsV0FBVyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNqRCxXQUFXLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUksZ0RBQW1CLEdBQTFCLFVBQTJCLElBQXVCO0lBRWhELENBQUM7SUFFTSw2Q0FBZ0IsR0FBdkIsVUFBd0IsSUFBdUI7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUNuRSxDQUFDO0lBRU0sOENBQWlCLEdBQXhCLFVBQXlCLElBQXVCO1FBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO0lBQ25FLENBQUM7SUE5RXFCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFvQiw4QkFBb0I7aUVBQUM7SUFMckQsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN4QyxDQUFDO1FBUXNELFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQUFuQyxrQ0FBZTtPQVB4QyxrQkFBa0IsQ0FxRjlCO0lBQUQseUJBQUM7Q0FBQSxBQXJGRCxJQXFGQztBQXJGWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmF2b3JpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmF2b3JpdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldyc7XHJcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldyc7XHJcbmltcG9ydCB7IGNvbmZpcm0gfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBUb2FzdHkgfSBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3R5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYXBwLWZhdm9yaXRlcycsXHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHR0ZW1wbGF0ZVVybDogJy4vZmF2b3JpdGVzLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9mYXZvcml0ZXMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYXZvcml0ZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdFxyXG5cdGZhdm9yaXRlczogT2JzZXJ2YWJsZUFycmF5PERpc2g+O1xyXG5cdGVyck1lc3M6IHN0cmluZztcclxuXHJcblx0QFZpZXdDaGlsZCgnbXlMaXN0VmlldycpIGxpc3RWaWV3Q29tcG9uZW50OiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmYXZvcml0ZXNlcnZpY2U6IEZhdm9yaXRlU2VydmljZSwgQEluamVjdCgnQmFzZVVSTCcpIHByaXZhdGUgQmFzZVVSTCkge1xyXG5cclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5mYXZvcml0ZXNlcnZpY2UuZ2V0RmF2b3JpdGVzKClcclxuXHRcdFx0LnN1YnNjcmliZShmYXZvcml0ZXMgPT4gdGhpcy5mYXZvcml0ZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KGZhdm9yaXRlcyksXHJcblx0XHRcdGVycm1lc3MgPT4gdGhpcy5lcnJNZXNzID0gZXJybWVzcyk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVGYXZvcml0ZShpZDogbnVtYmVyKSB7XHJcblxyXG5cdFx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHRcdHRpdGxlOiBcIkNvbmZpcm0gRGVsZXRlXCIsXHJcblx0XHRcdG1lc3NhZ2U6ICdEbyB5b3Ugd2FudCB0byBkZWxldGUgRGlzaCAnICsgaWQsXHJcblx0XHRcdG9rQnV0dG9uVGV4dDogJ1llcycsXHJcblx0XHRcdGNhbmNlbEJ1dHRvblRleHQ6ICdObycsXHJcblx0XHRcdG5ldXRyYWxCdXR0b25UZXh0OiAnQ2FuY2VsJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25maXJtKG9wdGlvbnMpLnRoZW4oKHJlc3VsdDogYm9vbGVhbikgPT4ge1xyXG5cdFx0XHRpZihyZXN1bHQpIHtcclxuXHJcblx0XHRcdFx0dGhpcy5mYXZvcml0ZXMgPSBudWxsO1xyXG5cclxuXHRcdFx0XHR0aGlzLmZhdm9yaXRlc2VydmljZS5kZWxldGVGYXZvcml0ZShpZClcclxuICAgICAgIC5zdWJzY3JpYmUoZmF2b3JpdGVzID0+IHsgXHJcbiAgICAgICBcdFx0Y29uc3QgdG9hc3QgPSBuZXcgVG9hc3R5KCdEZWxldGVkIERpc2ggJyArIGlkLCAnc2hvcnQnLCAnYm90dG9tJyApO1xyXG4gICAgICAgXHRcdHRvYXN0LnNob3coKTtcclxuICAgICAgIFx0XHR0aGlzLmZhdm9yaXRlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoZmF2b3JpdGVzKTtcclxuICAgICAgIFx0fSxcclxuICAgICAgICBlcnJtZXNzID0+IHRoaXMuZXJyTWVzcyA9IGVycm1lc3MpO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnRGVsZXRlIGNhbmNlbGxlZCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTsgICAgXHJcblx0XHRcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNlbGxTd2lwaW5nKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcbiAgICAgIHZhciBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcclxuICAgICAgdmFyIGN1cnJlbnRJdGVtVmlldyA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICB2YXIgY3VycmVudFZpZXc7XHJcblxyXG4gICAgICBpZihhcmdzLmRhdGEueCA+IDIwMCkge1xyXG5cclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChhcmdzLmRhdGEueCA8IC0yMDApIHtcclxuXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG5cdHB1YmxpYyBvblN3aXBlQ2VsbFN0YXJ0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XHJcbiAgICAgICAgdmFyIHN3aXBlVmlldyA9IGFyZ3NbJ29iamVjdCddO1xyXG5cclxuICAgICAgICB2YXIgbGVmdEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oJ21hcmstdmlldycpO1xyXG4gICAgICAgIHZhciByaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oJ2RlbGV0ZS12aWV3Jyk7XHJcbiAgICAgICAgc3dpcGVMaW1pdHMubGVmdCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcclxuICAgICAgICBzd2lwZUxpbWl0cy5yaWdodCA9IHJpZ2h0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XHJcbiAgICAgICAgc3dpcGVMaW1pdHMudGhyZXNob2xkID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpLzI7XHJcbiAgICB9XHJcblxyXG5cdFx0cHVibGljIG9uU3dpcGVDZWxsRmluaXNoZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTGVmdFN3aXBlQ2xpY2soYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTGVmdCBzd2lwZSBjbGljaycpO1xyXG4gICAgICAgIHRoaXMubGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblJpZ2h0U3dpcGVDbGljayhhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlRmF2b3JpdGUoYXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQuaWQpO1xyXG4gICAgICAgIHRoaXMubGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==