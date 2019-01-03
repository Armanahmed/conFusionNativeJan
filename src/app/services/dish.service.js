"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
var operators_1 = require("rxjs/operators");
var DishService = /** @class */ (function () {
    function DishService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    DishService.prototype.getDishes = function () {
        return this.http.get(baseurl_1.baseURL + 'dishes')
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    DishService.prototype.getDish = function (id) {
        return this.http.get(baseurl_1.baseURL + 'dishes/' + id)
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    DishService.prototype.getFeaturedDish = function () {
        return this.http.get(baseurl_1.baseURL + 'dishes?featured=true').pipe(operators_1.map(function (dishes) { return dishes[0]; }))
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    DishService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, process_httpmsg_service_1.ProcessHTTPMsgService])
    ], DishService);
    return DishService;
}());
exports.DishService = DishService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUcvRCw2Q0FBNEM7QUFDNUMscUVBQWtFO0FBR2xFLDRDQUFpRDtBQUtqRDtJQUVDLHFCQUFvQixJQUFnQixFQUFVLHFCQUE0QztRQUF0RSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUFJLENBQUM7SUFFL0YsK0JBQVMsR0FBVDtRQUNHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVMsaUJBQU8sR0FBRyxRQUFRLENBQUM7YUFDN0MsSUFBSSxDQUFDLHNCQUFVLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU8saUJBQU8sR0FBRyxTQUFTLEdBQUcsRUFBRSxDQUFDO2FBQ2pELElBQUksQ0FBQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxxQ0FBZSxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTyxpQkFBTyxHQUFHLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBVCxDQUFTLENBQUMsQ0FBQzthQUN4RixJQUFJLENBQUMsc0JBQVUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBakJVLFdBQVc7UUFIdkIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBR3lCLGlCQUFVLEVBQWlDLCtDQUFxQjtPQUY5RSxXQUFXLENBbUJ2QjtJQUFELGtCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgRGlzaCB9IGZyb20gJy4uL3NoYXJlZC9kaXNoJztcclxuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4uL3NoYXJlZC9iYXNldXJsJztcclxuaW1wb3J0IHsgUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlIH0gZnJvbSAnLi9wcm9jZXNzLWh0dHBtc2cuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERpc2hTZXJ2aWNlIHtcclxuXHRcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgcHJvY2Vzc0hUVFBNc2dTZXJ2aWNlOiBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UpIHsgfVxyXG5cclxuXHRnZXREaXNoZXMoKTogT2JzZXJ2YWJsZTxEaXNoW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERpc2hbXT4oYmFzZVVSTCArICdkaXNoZXMnKVxyXG4gICAgICAucGlwZShjYXRjaEVycm9yKHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBnZXREaXNoKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERpc2g+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERpc2g+KGJhc2VVUkwgKyAnZGlzaGVzLycgKyBpZClcclxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcih0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5oYW5kbGVFcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmVhdHVyZWREaXNoKCk6IE9ic2VydmFibGU8RGlzaD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGlzaD4oYmFzZVVSTCArICdkaXNoZXM/ZmVhdHVyZWQ9dHJ1ZScpLnBpcGUobWFwKGRpc2hlcyA9PiBkaXNoZXNbMF0pKVxyXG4gICAgICAucGlwZShjYXRjaEVycm9yKHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKSk7XHJcbiAgfVxyXG5cclxufSJdfQ==