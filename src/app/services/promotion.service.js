"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
var PromotionService = /** @class */ (function () {
    function PromotionService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    PromotionService.prototype.getPromotions = function () {
        return this.http.get(baseurl_1.baseURL + 'promotions')
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    PromotionService.prototype.getPromotion = function (id) {
        return this.http.get(baseurl_1.baseURL + 'promotions/' + id)
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    PromotionService.prototype.getFeaturedPromotion = function () {
        return this.http.get(baseurl_1.baseURL + 'promotions?featured=true').pipe(operators_1.map(function (promotions) { return promotions[0]; }))
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    PromotionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            process_httpmsg_service_1.ProcessHTTPMsgService])
    ], PromotionService);
    return PromotionService;
}());
exports.PromotionService = PromotionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9tb3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUkzQyw0Q0FBaUQ7QUFDakQsNkNBQStEO0FBQy9ELDZDQUE0QztBQUM1QyxxRUFBa0U7QUFLbEU7SUFFRSwwQkFBb0IsSUFBZ0IsRUFDMUIscUJBQTRDO1FBRGxDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDMUIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUFJLENBQUM7SUFFM0Qsd0NBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWMsaUJBQU8sR0FBRyxZQUFZLENBQUM7YUFDdEQsSUFBSSxDQUFDLHNCQUFVLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxFQUFVO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVksaUJBQU8sR0FBRyxhQUFhLEdBQUcsRUFBRSxDQUFDO2FBQzFELElBQUksQ0FBQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCwrQ0FBb0IsR0FBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLGlCQUFPLEdBQUcsMEJBQTBCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO2FBQ3pHLElBQUksQ0FBQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFsQlUsZ0JBQWdCO1FBSDVCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUcwQixpQkFBVTtZQUNILCtDQUFxQjtPQUgzQyxnQkFBZ0IsQ0FtQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByb21vdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9wcm9tb3Rpb24nO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi4vc2hhcmVkL2Jhc2V1cmwnO1xyXG5pbXBvcnQgeyBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UgfSBmcm9tICcuL3Byb2Nlc3MtaHR0cG1zZy5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb21vdGlvblNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIHByb2Nlc3NIVFRQTXNnU2VydmljZTogUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlKSB7IH1cclxuXHJcbiAgZ2V0UHJvbW90aW9ucygpOiBPYnNlcnZhYmxlPFByb21vdGlvbltdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQcm9tb3Rpb25bXT4oYmFzZVVSTCArICdwcm9tb3Rpb25zJylcclxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcih0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5oYW5kbGVFcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvbW90aW9uKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb21vdGlvbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UHJvbW90aW9uPihiYXNlVVJMICsgJ3Byb21vdGlvbnMvJyArIGlkKVxyXG4gICAgICAucGlwZShjYXRjaEVycm9yKHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBnZXRGZWF0dXJlZFByb21vdGlvbigpOiBPYnNlcnZhYmxlPFByb21vdGlvbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UHJvbW90aW9uPihiYXNlVVJMICsgJ3Byb21vdGlvbnM/ZmVhdHVyZWQ9dHJ1ZScpLnBpcGUobWFwKHByb21vdGlvbnMgPT4gcHJvbW90aW9uc1swXSkpXHJcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IpKTtcclxuICB9XHJcbn0iXX0=