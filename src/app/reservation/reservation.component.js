"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ReservationComponent = /** @class */ (function () {
    function ReservationComponent(changeDetectorRef, formBuilder) {
        this.changeDetectorRef = changeDetectorRef;
        this.formBuilder = formBuilder;
        this.reservation = this.formBuilder.group({
            guests: 3,
            smoking: false,
            dateTime: ['', forms_1.Validators.required]
        });
    }
    ReservationComponent.prototype.ngOnInit = function () {
    };
    ReservationComponent.prototype.onSmokingChecked = function (args) {
        var smokingSwitch = args.object;
        if (smokingSwitch.checked) {
            this.reservation.patchValue({ smoking: true });
        }
        else {
            this.reservation.patchValue({ smoking: false });
        }
    };
    ReservationComponent.prototype.onGuestChange = function (args) {
        var textField = args.object;
        this.reservation.patchValue({ guests: textField.text });
    };
    ReservationComponent.prototype.onDateTimeChange = function (args) {
        var textField = args.object;
        this.reservation.patchValue({ dateTime: textField.text });
    };
    ReservationComponent.prototype.onSubmit = function () {
        console.log(JSON.stringify(this.reservation.value));
    };
    ReservationComponent = __decorate([
        core_1.Component({
            selector: 'app-reservation',
            moduleId: module.id,
            templateUrl: './reservation.component.html'
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, forms_1.FormBuilder])
    ], ReservationComponent);
    return ReservationComponent;
}());
exports.ReservationComponent = ReservationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzZXJ2YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXFFO0FBR3JFLHdDQUFtRTtBQVduRTtJQUlFLDhCQUFvQixpQkFBb0MsRUFBVSxXQUF3QjtRQUF0RSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN4QyxNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxLQUFLO1lBQ2QsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELCtDQUFnQixHQUFoQixVQUFpQixJQUFJO1FBQ25CLElBQUksYUFBYSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEMsSUFBSSxhQUFhLENBQUMsT0FBTyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDaEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBRUQsNENBQWEsR0FBYixVQUFjLElBQUk7UUFDaEIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBRUQsK0NBQWdCLEdBQWhCLFVBQWlCLElBQUk7UUFDbkIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQXZDVSxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7U0FDM0MsQ0FBQzt5Q0FNdUMsd0JBQWlCLEVBQXVCLG1CQUFXO09BSi9FLG9CQUFvQixDQXlDaEM7SUFBRCwyQkFBQztDQUFBLEFBekNELElBeUNDO0FBekNZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd1aS90ZXh0LWZpZWxkJztcclxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAndWkvc3dpdGNoJztcclxuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgRGlzaCB9IGZyb20gJy4uL3NoYXJlZC9kaXNoJztcclxuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdhcHAtcmVzZXJ2YXRpb24nLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3Jlc2VydmF0aW9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlc2VydmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcmVzZXJ2YXRpb246IEZvcm1Hcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7IFxyXG4gICAgdGhpcy5yZXNlcnZhdGlvbiA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICBndWVzdHM6IDMsXHJcbiAgICAgIHNtb2tpbmc6IGZhbHNlLFxyXG4gICAgICBkYXRlVGltZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBvblNtb2tpbmdDaGVja2VkKGFyZ3MpIHtcclxuICAgIGxldCBzbW9raW5nU3dpdGNoID0gPFN3aXRjaD5hcmdzLm9iamVjdDtcclxuICAgIGlmIChzbW9raW5nU3dpdGNoLmNoZWNrZWQpIHtcclxuICAgICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHsgc21va2luZzogdHJ1ZSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IHNtb2tpbmc6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25HdWVzdENoYW5nZShhcmdzKSB7XHJcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuXHJcbiAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBndWVzdHM6IHRleHRGaWVsZC50ZXh0IH0pXHJcbiAgfVxyXG5cclxuICBvbkRhdGVUaW1lQ2hhbmdlKGFyZ3MpIHtcclxuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG5cclxuICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IGRhdGVUaW1lOiB0ZXh0RmllbGQudGV4dCB9KVxyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnJlc2VydmF0aW9uLnZhbHVlKSk7XHJcbiAgfVxyXG5cclxufSJdfQ==