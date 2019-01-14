"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var ReservationModalComponent = /** @class */ (function () {
    function ReservationModalComponent(params, page) {
        this.params = params;
        this.page = page;
        this.guestArray = [1, 2, 3, 4, 5, 6];
        this.isDateTime = false;
        if (params.context === "guest") {
            this.isDateTime = false;
        }
        else if (params.context === "date-time") {
            this.isDateTime = true;
        }
    }
    ReservationModalComponent.prototype.ngOnInit = function () {
        if (this.isDateTime) {
            var datePicker = this.datePickerElement.nativeElement;
            var currentdate = new Date();
            datePicker.year = currentdate.getFullYear();
            datePicker.month = currentdate.getMonth() + 1;
            datePicker.day = currentdate.getDate();
            datePicker.minDate = currentdate;
            datePicker.maxDate = new Date(2045, 4, 12);
            var timePicker = this.timePickerElement.nativeElement;
            timePicker.hour = currentdate.getHours();
            timePicker.minute = currentdate.getMinutes();
        }
    };
    ReservationModalComponent.prototype.submit = function () {
        if (this.isDateTime) {
            var datePicker = this.datePickerElement.nativeElement;
            var selectedDate = datePicker.date;
            var timePicker = this.timePickerElement.nativeElement;
            var selectedTime = timePicker.time;
            var reserveTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), selectedTime.getHours(), selectedTime.getMinutes());
            this.params.closeCallback(reserveTime.toISOString());
        }
        else {
            var picker = this.guestPickerElement.nativeElement;
            this.params.closeCallback(this.guestArray[picker.selectedIndex]);
        }
    };
    __decorate([
        core_1.ViewChild("datePicker"),
        __metadata("design:type", core_1.ElementRef)
    ], ReservationModalComponent.prototype, "datePickerElement", void 0);
    __decorate([
        core_1.ViewChild("timePicker"),
        __metadata("design:type", core_1.ElementRef)
    ], ReservationModalComponent.prototype, "timePickerElement", void 0);
    __decorate([
        core_1.ViewChild("guestPicker"),
        __metadata("design:type", core_1.ElementRef)
    ], ReservationModalComponent.prototype, "guestPickerElement", void 0);
    ReservationModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './reservationmodal.component.html'
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams, page_1.Page])
    ], ReservationModalComponent);
    return ReservationModalComponent;
}());
exports.ReservationModalComponent = ReservationModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb25tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNlcnZhdGlvbm1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxrRUFBc0U7QUFJdEUsZ0NBQStCO0FBTS9CO0lBUUMsbUNBQW9CLE1BQXlCLEVBQVUsSUFBVTtRQUE3QyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFQakUsZUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVoQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBTzNCLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDeEI7YUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBRUYsQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFFQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxVQUFVLEdBQTJCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7WUFFOUUsSUFBSSxXQUFXLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNuQyxVQUFVLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QyxVQUFVLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDM0MsVUFBVSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkMsVUFBVSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7WUFDakMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRTNDLElBQUksVUFBVSxHQUEyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDO1lBQzlFLFVBQVUsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBRWhEO0lBRUYsQ0FBQztJQUVNLDBDQUFNLEdBQWI7UUFDQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxVQUFVLEdBQTJCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7WUFDM0UsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNuQyxJQUFJLFVBQVUsR0FBMkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztZQUM5RSxJQUFJLFlBQVksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ25DLElBQUksV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsRUFBRSxZQUFZLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUU1SixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUN4RDthQUFNO1lBQ04sSUFBSSxNQUFNLEdBQWdCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUM7WUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztTQUNwRTtJQUNGLENBQUM7SUEvQ3dCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFvQixpQkFBVTt3RUFBQztJQUM3QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBb0IsaUJBQVU7d0VBQUM7SUFDN0I7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQXFCLGlCQUFVO3lFQUFDO0lBTjlDLHlCQUF5QjtRQUpyQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxtQ0FBbUM7U0FDaEQsQ0FBQzt5Q0FTMkIsZ0NBQWlCLEVBQWdCLFdBQUk7T0FSckQseUJBQXlCLENBcURyQztJQUFELGdDQUFDO0NBQUEsQUFyREQsSUFxREM7QUFyRFksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICd1aS9kYXRlLXBpY2tlcic7XHJcbmltcG9ydCB7IFRpbWVQaWNrZXIgfSBmcm9tICd1aS90aW1lLXBpY2tlcic7XHJcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tICd1aS9saXN0LXBpY2tlcic7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3Jlc2VydmF0aW9ubW9kYWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXNlcnZhdGlvbk1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRndWVzdEFycmF5ID0gWzEsIDIsIDMsIDQsIDUsIDZdO1xyXG5cdGd1ZXN0czogbnVtYmVyO1xyXG5cdGlzRGF0ZVRpbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRAVmlld0NoaWxkKFwiZGF0ZVBpY2tlclwiKSBkYXRlUGlja2VyRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwidGltZVBpY2tlclwiKSB0aW1lUGlja2VyRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwiZ3Vlc3RQaWNrZXJcIikgZ3Vlc3RQaWNrZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG5cclxuXHRcdGlmIChwYXJhbXMuY29udGV4dCA9PT0gXCJndWVzdFwiKSB7XHJcblx0XHRcdHRoaXMuaXNEYXRlVGltZSA9IGZhbHNlO1xyXG5cdFx0fSBlbHNlIGlmIChwYXJhbXMuY29udGV4dCA9PT0gXCJkYXRlLXRpbWVcIikge1xyXG5cdFx0XHR0aGlzLmlzRGF0ZVRpbWUgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cclxuXHRcdGlmICh0aGlzLmlzRGF0ZVRpbWUpIHtcclxuXHRcdFx0bGV0IGRhdGVQaWNrZXI6IERhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj50aGlzLmRhdGVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG5cdFx0XHRsZXQgY3VycmVudGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRkYXRlUGlja2VyLnllYXIgPSBjdXJyZW50ZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdFx0XHRkYXRlUGlja2VyLm1vbnRoID0gY3VycmVudGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgIGRhdGVQaWNrZXIuZGF5ID0gY3VycmVudGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICBkYXRlUGlja2VyLm1pbkRhdGUgPSBjdXJyZW50ZGF0ZTtcclxuICAgICAgZGF0ZVBpY2tlci5tYXhEYXRlID0gbmV3IERhdGUoMjA0NSwgNCwgMTIpO1xyXG5cclxuICAgICAgbGV0IHRpbWVQaWNrZXI6IFRpbWVQaWNrZXIgPSA8VGltZVBpY2tlcj50aGlzLnRpbWVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIHRpbWVQaWNrZXIuaG91ciA9IGN1cnJlbnRkYXRlLmdldEhvdXJzKCk7XHJcbiAgICAgIHRpbWVQaWNrZXIubWludXRlID0gY3VycmVudGRhdGUuZ2V0TWludXRlcygpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3VibWl0KCkge1xyXG5cdFx0aWYgKHRoaXMuaXNEYXRlVGltZSkge1xyXG5cdFx0XHRsZXQgZGF0ZVBpY2tlcjogRGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPnRoaXMuZGF0ZVBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgICAgbGV0IHNlbGVjdGVkRGF0ZSA9IGRhdGVQaWNrZXIuZGF0ZTtcclxuICAgICAgbGV0IHRpbWVQaWNrZXI6IFRpbWVQaWNrZXIgPSA8VGltZVBpY2tlcj50aGlzLnRpbWVQaWNrZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGxldCBzZWxlY3RlZFRpbWUgPSB0aW1lUGlja2VyLnRpbWU7XHJcbiAgICAgIGxldCByZXNlcnZlVGltZSA9IG5ldyBEYXRlKHNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpLCBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKSwgc2VsZWN0ZWREYXRlLmdldERhdGUoKSwgc2VsZWN0ZWRUaW1lLmdldEhvdXJzKCksIHNlbGVjdGVkVGltZS5nZXRNaW51dGVzKCkpO1xyXG5cclxuICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhyZXNlcnZlVGltZS50b0lTT1N0cmluZygpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCBwaWNrZXIgPSA8TGlzdFBpY2tlcj4gdGhpcy5ndWVzdFBpY2tlckVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh0aGlzLmd1ZXN0QXJyYXlbcGlja2VyLnNlbGVjdGVkSW5kZXhdKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59Il19