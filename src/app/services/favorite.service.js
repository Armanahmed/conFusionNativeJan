"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var couchbase_service_1 = require("./couchbase.service");
var FavoriteService = /** @class */ (function () {
    function FavoriteService(dishservice, couchbaseService) {
        this.dishservice = dishservice;
        this.couchbaseService = couchbaseService;
        this.docId = "favorites";
        this.favorites = [];
        var doc = this.couchbaseService.getDocument(this.docId);
        if (doc == null) {
            this.couchbaseService.createDocument({ "favorites": [] }, this.docId);
        }
        else {
            this.favorites = doc.favorites;
        }
    }
    FavoriteService.prototype.isFavorite = function (id) {
        return this.favorites.some(function (el) { return el === id; });
    };
    FavoriteService.prototype.addFavorite = function (id) {
        if (!this.isFavorite(id)) {
            this.favorites.push(id);
            this.couchbaseService.updateDocument(this.docId, { "favorites": this.favorites });
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
            this.couchbaseService.updateDocument(this.docId, { "favorites": this.favorites });
            return this.getFavorites();
        }
        else {
            return rxjs_1.throwError('Deleting non-existant favorite');
        }
    };
    FavoriteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dish_service_1.DishService, couchbase_service_1.CouchbaseService])
    ], FavoriteService);
    return FavoriteService;
}());
exports.FavoriteService = FavoriteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MseURBQXVEO0FBQ3ZELDZCQUE4QztBQUM5Qyw0Q0FBcUM7QUFDckMseURBQXVEO0FBR3ZEO0lBS0MseUJBQW9CLFdBQXdCLEVBQVUsZ0JBQWtDO1FBQXBFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUZ4RixVQUFLLEdBQVcsV0FBVyxDQUFDO1FBRzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRXBCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUNoQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEVBQUMsV0FBVyxFQUFFLEVBQUUsRUFBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwRTthQUFNO1lBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1NBQy9CO0lBQ0YsQ0FBQztJQUVELG9DQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLEtBQUssRUFBRSxFQUFULENBQVMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksRUFBVTtRQUNyQixJQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7U0FDaEY7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQUEsaUJBRUM7UUFEQSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFkLENBQWMsQ0FBQyxFQUF6QyxDQUF5QyxDQUFDLEVBQWhFLENBQWdFLENBQUMsQ0FBQyxDQUFDO0lBQzNILENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsRUFBVTtRQUN4QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1lBQ2hGLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzlCO2FBQ0k7WUFDRCxPQUFPLGlCQUFVLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztTQUN2RDtJQUNKLENBQUM7SUExQ1csZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQU1xQiwwQkFBVyxFQUE0QixvQ0FBZ0I7T0FMNUUsZUFBZSxDQTRDM0I7SUFBRCxzQkFBQztDQUFBLEFBNUNELElBNENDO0FBNUNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xyXG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDb3VjaGJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9jb3VjaGJhc2Uuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGYXZvcml0ZVNlcnZpY2Uge1xyXG5cdFxyXG5cdGZhdm9yaXRlczogQXJyYXk8bnVtYmVyPjtcclxuXHRkb2NJZDogc3RyaW5nID0gXCJmYXZvcml0ZXNcIjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkaXNoc2VydmljZTogRGlzaFNlcnZpY2UsIHByaXZhdGUgY291Y2hiYXNlU2VydmljZTogQ291Y2hiYXNlU2VydmljZSkge1xyXG5cdFx0dGhpcy5mYXZvcml0ZXMgPSBbXTtcclxuXHJcblx0XHRsZXQgZG9jID0gdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLmdldERvY3VtZW50KHRoaXMuZG9jSWQpO1xyXG5cdFx0aWYgKGRvYyA9PSBudWxsKSB7XHJcblx0XHRcdHRoaXMuY291Y2hiYXNlU2VydmljZS5jcmVhdGVEb2N1bWVudCh7XCJmYXZvcml0ZXNcIjogW119LCB0aGlzLmRvY0lkKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuZmF2b3JpdGVzID0gZG9jLmZhdm9yaXRlcztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlzRmF2b3JpdGUoaWQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmF2b3JpdGVzLnNvbWUoZWwgPT4gZWwgPT09IGlkKTtcclxuXHR9XHJcblxyXG5cdGFkZEZhdm9yaXRlKGlkOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdGlmKCF0aGlzLmlzRmF2b3JpdGUoaWQpKSB7XHJcblx0XHRcdHRoaXMuZmF2b3JpdGVzLnB1c2goaWQpO1xyXG5cdFx0XHR0aGlzLmNvdWNoYmFzZVNlcnZpY2UudXBkYXRlRG9jdW1lbnQodGhpcy5kb2NJZCwge1wiZmF2b3JpdGVzXCI6IHRoaXMuZmF2b3JpdGVzfSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldEZhdm9yaXRlcygpOiBPYnNlcnZhYmxlPERpc2hbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZGlzaHNlcnZpY2UuZ2V0RGlzaGVzKCkucGlwZShtYXAoZGlzaGVzID0+IGRpc2hlcy5maWx0ZXIoZGlzaCA9PiB0aGlzLmZhdm9yaXRlcy5zb21lKGVsID0+IGVsID09PSBkaXNoLmlkKSkpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZUZhdm9yaXRlKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPERpc2hbXT4ge1xyXG5cdFx0bGV0IGluZGV4ID0gdGhpcy5mYXZvcml0ZXMuaW5kZXhPZihpZCk7XHJcbiAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgIHRoaXMuZmF2b3JpdGVzLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB0aGlzLmNvdWNoYmFzZVNlcnZpY2UudXBkYXRlRG9jdW1lbnQodGhpcy5kb2NJZCwge1wiZmF2b3JpdGVzXCI6IHRoaXMuZmF2b3JpdGVzfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmF2b3JpdGVzKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcignRGVsZXRpbmcgbm9uLWV4aXN0YW50IGZhdm9yaXRlJyk7XHJcbiAgICB9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=