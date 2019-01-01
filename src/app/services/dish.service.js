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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, process_httpmsg_service_1.ProcessHTTPMsgService])
    ], DishService);
    return DishService;
}());
exports.DishService = DishService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzaC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUcvRCw2Q0FBNEM7QUFDNUMscUVBQWtFO0FBR2xFLDRDQUFpRDtBQUdqRDtJQUVDLHFCQUFvQixJQUFnQixFQUFVLHFCQUE0QztRQUF0RSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUFJLENBQUM7SUFFL0YsK0JBQVMsR0FBVDtRQUNHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVMsaUJBQU8sR0FBRyxRQUFRLENBQUM7YUFDN0MsSUFBSSxDQUFDLHNCQUFVLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU8saUJBQU8sR0FBRyxTQUFTLEdBQUcsRUFBRSxDQUFDO2FBQ2pELElBQUksQ0FBQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxxQ0FBZSxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxpQkFBTyxHQUFHLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBVCxDQUFTLENBQUMsQ0FBQzthQUMxRixJQUFJLENBQUMsc0JBQVUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBakJVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FHYyxpQkFBVSxFQUFpQywrQ0FBcUI7T0FGOUUsV0FBVyxDQW1CdkI7SUFBRCxrQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XHJcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tICcuLi9zaGFyZWQvYmFzZXVybCc7XHJcbmltcG9ydCB7IFByb2Nlc3NIVFRQTXNnU2VydmljZSB9IGZyb20gJy4vcHJvY2Vzcy1odHRwbXNnLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEaXNoU2VydmljZSB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHByb2Nlc3NIVFRQTXNnU2VydmljZTogUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlKSB7IH1cclxuXHJcblx0Z2V0RGlzaGVzKCk6IE9ic2VydmFibGU8RGlzaFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEaXNoW10+KGJhc2VVUkwgKyAnZGlzaGVzJylcclxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcih0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5oYW5kbGVFcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGlzaChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEaXNoPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEaXNoPihiYXNlVVJMICsgJ2Rpc2hlcy8nICsgaWQpXHJcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IpKTtcclxuICB9XHJcblxyXG4gIGdldEZlYXR1cmVkRGlzaCgpOiBPYnNlcnZhYmxlPERpc2g+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERpc2hbXT4oYmFzZVVSTCArICdkaXNoZXM/ZmVhdHVyZWQ9dHJ1ZScpLnBpcGUobWFwKGRpc2hlcyA9PiBkaXNoZXNbMF0pKVxyXG4gICAgICAucGlwZShjYXRjaEVycm9yKHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKSk7XHJcbiAgfVxyXG5cclxufSJdfQ==