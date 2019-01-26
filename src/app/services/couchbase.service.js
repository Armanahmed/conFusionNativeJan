"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_couchbase_1 = require("nativescript-couchbase");
var CouchbaseService = /** @class */ (function () {
    function CouchbaseService() {
        this.database = new nativescript_couchbase_1.Couchbase("confusion");
    }
    CouchbaseService.prototype.getDocument = function (docId) {
        return this.database.getDocument(docId);
    };
    CouchbaseService.prototype.createDocument = function (data, docId) {
        return this.database.createDocument(data, docId);
    };
    CouchbaseService.prototype.updateDocument = function (docId, data) {
        return this.database.updateDocument(docId, data);
    };
    CouchbaseService.prototype.deleteDocument = function (docId) {
        return this.database.deleteDocument(docId);
    };
    CouchbaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CouchbaseService);
    return CouchbaseService;
}());
exports.CouchbaseService = CouchbaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291Y2hiYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3VjaGJhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxpRUFBbUQ7QUFHbkQ7SUFJQztRQUNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQ0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSxzQ0FBVyxHQUFsQixVQUFtQixLQUFhO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLHlDQUFjLEdBQXJCLFVBQXNCLElBQVMsRUFBRSxLQUFhO1FBQzdDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSx5Q0FBYyxHQUFyQixVQUFzQixLQUFhLEVBQUUsSUFBUztRQUM3QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0seUNBQWMsR0FBckIsVUFBc0IsS0FBYTtRQUNsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUF0QlcsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7O09BQ0EsZ0JBQWdCLENBd0I1QjtJQUFELHVCQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4QlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvdWNoYmFzZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jb3VjaGJhc2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ291Y2hiYXNlU2VydmljZSB7XHJcblx0XHJcblx0cHJpdmF0ZSBkYXRhYmFzZTogYW55O1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuZGF0YWJhc2UgPSBuZXcgQ291Y2hiYXNlKFwiY29uZnVzaW9uXCIpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldERvY3VtZW50KGRvY0lkOiBzdHJpbmcpIHtcclxuXHRcdHJldHVybiB0aGlzLmRhdGFiYXNlLmdldERvY3VtZW50KGRvY0lkKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjcmVhdGVEb2N1bWVudChkYXRhOiBhbnksIGRvY0lkOiBzdHJpbmcpIHtcclxuXHRcdHJldHVybiB0aGlzLmRhdGFiYXNlLmNyZWF0ZURvY3VtZW50KGRhdGEsIGRvY0lkKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB1cGRhdGVEb2N1bWVudChkb2NJZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiB0aGlzLmRhdGFiYXNlLnVwZGF0ZURvY3VtZW50KGRvY0lkLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkZWxldGVEb2N1bWVudChkb2NJZDogc3RyaW5nKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5kYXRhYmFzZS5kZWxldGVEb2N1bWVudChkb2NJZCk7XHJcblx0fVxyXG5cclxufSJdfQ==