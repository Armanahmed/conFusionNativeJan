"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var app = require("application");
var reservationmodal_component_1 = require("../reservationmodal/reservationmodal.component");
var ReservationComponent = /** @class */ (function () {
    function ReservationComponent(changeDetectorRef, modalService, vcRef, formBuilder) {
        this.changeDetectorRef = changeDetectorRef;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.formBuilder = formBuilder;
        this.reservation = this.formBuilder.group({
            guests: 3,
            smoking: false,
            dateTime: ['', forms_1.Validators.required]
        });
    }
    ReservationComponent.prototype.ngOnInit = function () {
    };
    ReservationComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
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
    ReservationComponent.prototype.createModalView = function (args) {
        var _this = this;
        var options = {
            viewContainerRef: this.vcRef,
            context: args,
            fullscreen: false
        };
        this.modalService.showModal(reservationmodal_component_1.ReservationModalComponent, options)
            .then(function (result) {
            if (args === "guest") {
                _this.reservation.patchValue({ guests: result });
            }
            else if (args === "date-time") {
                _this.reservation.patchValue({ dateTime: result });
            }
        });
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
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, modal_dialog_1.ModalDialogService, core_1.ViewContainerRef, forms_1.FormBuilder])
    ], ReservationComponent);
    return ReservationComponent;
}());
exports.ReservationComponent = ReservationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzZXJ2YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVGO0FBR3ZGLHdDQUFtRTtBQUNuRSxrRUFBMkY7QUFDM0YsaUNBQW1DO0FBS25DLDZGQUEyRjtBQVEzRjtJQUlFLDhCQUFvQixpQkFBb0MsRUFBVSxZQUFnQyxFQUFVLEtBQXVCLEVBQVUsV0FBd0I7UUFBakosc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDbkssSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN4QyxNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxLQUFLO1lBQ2QsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELGdEQUFpQixHQUFqQjtRQUNFLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCwrQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBSTtRQUNuQixJQUFJLGFBQWEsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hDLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQztJQUVELDRDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2hCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7SUFDekQsQ0FBQztJQUVELCtDQUFnQixHQUFoQixVQUFpQixJQUFJO1FBQ25CLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7SUFDM0QsQ0FBQztJQUVELDhDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUFwQixpQkFlQztRQWRDLElBQUksT0FBTyxHQUF1QjtZQUM5QixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztZQUM1QixPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxLQUFLO1NBQ3BCLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxzREFBeUIsRUFBRSxPQUFPLENBQUM7YUFDNUQsSUFBSSxDQUFDLFVBQUMsTUFBVztZQUNoQixJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQ3BCLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7YUFDL0M7aUJBQU0sSUFBSSxJQUFJLEtBQUssV0FBVyxFQUFFO2dCQUMvQixLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO2FBQ2pEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQTdEVSxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7U0FDM0MsQ0FBQzt5Q0FNdUMsd0JBQWlCLEVBQXdCLGlDQUFrQixFQUFpQix1QkFBZ0IsRUFBdUIsbUJBQVc7T0FKMUosb0JBQW9CLENBK0RoQztJQUFELDJCQUFDO0NBQUEsQUEvREQsSUErREM7QUEvRFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xyXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tICd1aS9zd2l0Y2gnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcblxyXG5pbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi4vc2hhcmVkL2Rpc2gnO1xyXG5pbXBvcnQgeyBEaXNoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XHJcbmltcG9ydCB7IFJlc2VydmF0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vcmVzZXJ2YXRpb25tb2RhbC9yZXNlcnZhdGlvbm1vZGFsLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdhcHAtcmVzZXJ2YXRpb24nLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3Jlc2VydmF0aW9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlc2VydmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcmVzZXJ2YXRpb246IEZvcm1Hcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7IFxyXG4gICAgdGhpcy5yZXNlcnZhdGlvbiA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICBndWVzdHM6IDMsXHJcbiAgICAgIHNtb2tpbmc6IGZhbHNlLFxyXG4gICAgICBkYXRlVGltZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gIH1cclxuXHJcbiAgb25TbW9raW5nQ2hlY2tlZChhcmdzKSB7XHJcbiAgICBsZXQgc21va2luZ1N3aXRjaCA9IDxTd2l0Y2g+YXJncy5vYmplY3Q7XHJcbiAgICBpZiAoc21va2luZ1N3aXRjaC5jaGVja2VkKSB7XHJcbiAgICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IHNtb2tpbmc6IHRydWUgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBzbW9raW5nOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uR3Vlc3RDaGFuZ2UoYXJncykge1xyXG4gICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XHJcblxyXG4gICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHsgZ3Vlc3RzOiB0ZXh0RmllbGQudGV4dCB9KVxyXG4gIH1cclxuXHJcbiAgb25EYXRlVGltZUNoYW5nZShhcmdzKSB7XHJcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuXHJcbiAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBkYXRlVGltZTogdGV4dEZpZWxkLnRleHQgfSlcclxuICB9XHJcblxyXG4gIGNyZWF0ZU1vZGFsVmlldyhhcmdzKSB7XHJcbiAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICAgICAgY29udGV4dDogYXJncyxcclxuICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoUmVzZXJ2YXRpb25Nb2RhbENvbXBvbmVudCwgb3B0aW9ucylcclxuICAgICAgLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGFyZ3MgPT09IFwiZ3Vlc3RcIikge1xyXG4gICAgICAgICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHtndWVzdHM6IHJlc3VsdH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJncyA9PT0gXCJkYXRlLXRpbWVcIikge1xyXG4gICAgICAgICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHtkYXRlVGltZTogcmVzdWx0fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KCkge1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yZXNlcnZhdGlvbi52YWx1ZSkpO1xyXG4gIH1cclxuXHJcbn0iXX0=