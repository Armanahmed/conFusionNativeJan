"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { Observable } from 'rxjs';
var rxjs_1 = require("rxjs");
var ProcessHTTPMsgService = /** @class */ (function () {
    function ProcessHTTPMsgService() {
    }
    ProcessHTTPMsgService.prototype.handleError = function (error) {
        var errMsg;
        if (error.error instanceof ErrorEvent) {
            errMsg = error.error.message;
        }
        else {
            errMsg = error.status + " - " + (error.statusText || '') + " " + error.message;
        }
        return rxjs_1.throwError(errMsg);
    };
    ProcessHTTPMsgService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ProcessHTTPMsgService);
    return ProcessHTTPMsgService;
}());
exports.ProcessHTTPMsgService = ProcessHTTPMsgService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzcy1odHRwbXNnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9jZXNzLWh0dHBtc2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyxxQ0FBcUM7QUFDckMsNkJBQThDO0FBRzlDO0lBRUM7SUFBZ0IsQ0FBQztJQUVWLDJDQUFXLEdBQWxCLFVBQW1CLEtBQThCO1FBQ2hELElBQUksTUFBYyxDQUFDO1FBRW5CLElBQUksS0FBSyxDQUFDLEtBQUssWUFBWSxVQUFVLEVBQUU7WUFDdEMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1NBQzdCO2FBQU07WUFDTixNQUFNLEdBQU0sS0FBSyxDQUFDLE1BQU0sWUFBTSxLQUFLLENBQUMsVUFBVSxJQUFJLEVBQUUsVUFBSSxLQUFLLENBQUMsT0FBUyxDQUFDO1NBQ3hFO1FBRUQsT0FBTyxpQkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFkVyxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTs7T0FDQSxxQkFBcUIsQ0FlakM7SUFBRCw0QkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG4vLyBpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2Nlc3NIVFRQTXNnU2VydmljZSB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKSB7IH1cclxuXHJcblx0cHVibGljIGhhbmRsZUVycm9yKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSB8IGFueSkge1xyXG5cdFx0bGV0IGVyck1zZzogc3RyaW5nO1xyXG5cclxuXHRcdGlmIChlcnJvci5lcnJvciBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcclxuXHRcdFx0ZXJyTXNnID0gZXJyb3IuZXJyb3IubWVzc2FnZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGVyck1zZyA9IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHQgfHwgJyd9ICR7ZXJyb3IubWVzc2FnZX1gO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aHJvd0Vycm9yKGVyck1zZyk7XHJcblx0fVxyXG59XHJcbiJdfQ==