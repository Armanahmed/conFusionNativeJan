"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
var LeaderService = /** @class */ (function () {
    function LeaderService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    LeaderService.prototype.getLeaders = function () {
        return this.http.get(baseurl_1.baseURL + 'leaders')
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    LeaderService.prototype.getLeader = function (id) {
        return this.http.get(baseurl_1.baseURL + 'leaders/' + id)
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    LeaderService.prototype.getFeaturedLeader = function () {
        return this.http.get(baseurl_1.baseURL + 'leaders?featured=true').pipe(operators_1.map(function (leaders) { return leaders[0]; }))
            .pipe(operators_1.catchError(this.processHTTPMsgService.handleError));
    };
    LeaderService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            process_httpmsg_service_1.ProcessHTTPMsgService])
    ], LeaderService);
    return LeaderService;
}());
exports.LeaderService = LeaderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsZWFkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyw0Q0FBaUQ7QUFDakQsNkNBQStEO0FBQy9ELDZDQUE0QztBQUM1QyxxRUFBa0U7QUFLbEU7SUFFRSx1QkFBb0IsSUFBZ0IsRUFDMUIscUJBQTRDO1FBRGxDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDMUIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUFJLENBQUM7SUFFM0Qsa0NBQVUsR0FBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsaUJBQU8sR0FBRyxTQUFTLENBQUM7YUFDaEQsSUFBSSxDQUFDLHNCQUFVLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxFQUFVO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVMsaUJBQU8sR0FBRyxVQUFVLEdBQUcsRUFBRSxDQUFDO2FBQ3BELElBQUksQ0FBQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLGlCQUFPLEdBQUcsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFWLENBQVUsQ0FBQyxDQUFDO2FBQzdGLElBQUksQ0FBQyxzQkFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFsQlUsYUFBYTtRQUh6QixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FHMEIsaUJBQVU7WUFDSCwrQ0FBcUI7T0FIM0MsYUFBYSxDQW1CekI7SUFBRCxvQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMZWFkZXIgfSBmcm9tICcuLi9zaGFyZWQvbGVhZGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi4vc2hhcmVkL2Jhc2V1cmwnO1xyXG5pbXBvcnQgeyBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UgfSBmcm9tICcuL3Byb2Nlc3MtaHR0cG1zZy5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExlYWRlclNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIHByb2Nlc3NIVFRQTXNnU2VydmljZTogUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlKSB7IH1cclxuXHJcbiAgZ2V0TGVhZGVycygpOiBPYnNlcnZhYmxlPExlYWRlcltdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxMZWFkZXJbXT4oYmFzZVVSTCArICdsZWFkZXJzJylcclxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcih0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5oYW5kbGVFcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGVhZGVyKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPExlYWRlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8TGVhZGVyPihiYXNlVVJMICsgJ2xlYWRlcnMvJyArIGlkKVxyXG4gICAgICAucGlwZShjYXRjaEVycm9yKHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBnZXRGZWF0dXJlZExlYWRlcigpOiBPYnNlcnZhYmxlPExlYWRlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8TGVhZGVyPihiYXNlVVJMICsgJ2xlYWRlcnM/ZmVhdHVyZWQ9dHJ1ZScpLnBpcGUobWFwKGxlYWRlcnMgPT4gbGVhZGVyc1swXSkpXHJcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IpKTtcclxuICB9XHJcbn0iXX0=