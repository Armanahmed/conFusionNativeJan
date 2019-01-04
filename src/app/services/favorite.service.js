"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var FavoriteService = /** @class */ (function () {
    function FavoriteService(dishservice) {
        this.dishservice = dishservice;
        this.favorites = [];
    }
    FavoriteService.prototype.isFavorite = function (id) {
        return this.favorites.some(function (el) { return el === id; });
    };
    FavoriteService.prototype.addFavorite = function (id) {
        if (!this.isFavorite(id)) {
            this.favorites.push(id);
        }
        return true;
    };
    FavoriteService.prototype.getFavorites = function () {
        var _this = this;
        return this.dishservice.getDishes().pipe(operators_1.map(function (dishes) { return dishes.filter(function (dish) { return _this.favorites.some(function (el) { return el === dish.id; }); }); }));
    };
    FavoriteService.prototype.deleteFavorite = function (id) {
        var index = this.favorites.indexOf(id);
        if (index >= 0) {
            this.favorites.splice(index, 1);
            return this.getFavorites();
        }
        else {
            return rxjs_1.throwError('Deleting non-existant favorite');
        }
    };
    FavoriteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dish_service_1.DishService])
    ], FavoriteService);
    return FavoriteService;
}());
exports.FavoriteService = FavoriteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MseURBQXVEO0FBQ3ZELDZCQUE4QztBQUM5Qyw0Q0FBcUM7QUFHckM7SUFJQyx5QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELG9DQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLEtBQUssRUFBRSxFQUFULENBQVMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksRUFBVTtRQUNyQixJQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVELHNDQUFZLEdBQVo7UUFBQSxpQkFFQztRQURBLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLEVBQWQsQ0FBYyxDQUFDLEVBQXpDLENBQXlDLENBQUMsRUFBaEUsQ0FBZ0UsQ0FBQyxDQUFDLENBQUM7SUFDM0gsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxFQUFVO1FBQ3hCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUM5QjthQUNJO1lBQ0QsT0FBTyxpQkFBVSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7U0FDdkQ7SUFDSixDQUFDO0lBaENXLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FLcUIsMEJBQVc7T0FKaEMsZUFBZSxDQWtDM0I7SUFBRCxzQkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xyXG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVTZXJ2aWNlIHtcclxuXHRcclxuXHRmYXZvcml0ZXM6IEFycmF5PG51bWJlcj47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlzaHNlcnZpY2U6IERpc2hTZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmZhdm9yaXRlcyA9IFtdO1xyXG5cdH1cclxuXHJcblx0aXNGYXZvcml0ZShpZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5mYXZvcml0ZXMuc29tZShlbCA9PiBlbCA9PT0gaWQpO1xyXG5cdH1cclxuXHJcblx0YWRkRmF2b3JpdGUoaWQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0aWYoIXRoaXMuaXNGYXZvcml0ZShpZCkpIHtcclxuXHRcdFx0dGhpcy5mYXZvcml0ZXMucHVzaChpZCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldEZhdm9yaXRlcygpOiBPYnNlcnZhYmxlPERpc2hbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZGlzaHNlcnZpY2UuZ2V0RGlzaGVzKCkucGlwZShtYXAoZGlzaGVzID0+IGRpc2hlcy5maWx0ZXIoZGlzaCA9PiB0aGlzLmZhdm9yaXRlcy5zb21lKGVsID0+IGVsID09PSBkaXNoLmlkKSkpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUZhdm9yaXRlKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPERpc2hbXT4ge1xyXG5cdFx0bGV0IGluZGV4ID0gdGhpcy5mYXZvcml0ZXMuaW5kZXhPZihpZCk7XHJcbiAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgIHRoaXMuZmF2b3JpdGVzLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRGYXZvcml0ZXMoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCdEZWxldGluZyBub24tZXhpc3RhbnQgZmF2b3JpdGUnKTtcclxuICAgIH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==