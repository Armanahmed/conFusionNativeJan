"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var app = require("application");
var page_1 = require("ui/page");
var enums = require("ui/enums");
var couchbase_service_1 = require("../services/couchbase.service");
var reservationmodal_component_1 = require("../reservationmodal/reservationmodal.component");
var ReservationComponent = /** @class */ (function () {
    function ReservationComponent(changeDetectorRef, modalService, vcRef, formBuilder, page, couchbaseService) {
        this.changeDetectorRef = changeDetectorRef;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.formBuilder = formBuilder;
        this.page = page;
        this.couchbaseService = couchbaseService;
        this.showFeedback = false;
        this.docId = "reservations";
        this.reservation = this.formBuilder.group({
            guests: 3,
            smoking: false,
            dateTime: ['', forms_1.Validators.required]
        });
        this.reservations = [];
        var doc = this.couchbaseService.getDocument(this.docId);
        if (doc == null) {
            this.couchbaseService.createDocument({ "reservations": [] }, this.docId);
        }
        else {
            this.reservations = doc.reservations;
        }
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
        this.newReservation = this.reservation.value;
        this.formView = this.page.getViewById("formView");
        this.feedbackView = this.page.getViewById("feedbackView");
        this.reservations.push(this.newReservation);
        this.couchbaseService.updateDocument(this.docId, { "reservations": this.reservations });
        console.log(JSON.stringify(this.reservations));
        this.animateSwitch();
    };
    ReservationComponent.prototype.animateSwitch = function () {
        var _this = this;
        this.formView.animate({
            scale: { x: 1, y: 0 },
            opacity: 0,
            duration: 500,
            curve: enums.AnimationCurve.easeIn
        }).then(function () {
            _this.feedbackView.animate({
                scale: { x: 0, y: 0 },
                opacity: 0,
                duration: 0
            }).then(function () {
                _this.showFeedback = true;
                _this.feedbackView.animate({
                    scale: { x: 1, y: 1 },
                    opacity: 1,
                    duration: 500,
                    curve: enums.AnimationCurve.easeOut
                });
            });
        });
    };
    ReservationComponent = __decorate([
        core_1.Component({
            selector: 'app-reservation',
            moduleId: module.id,
            templateUrl: './reservation.component.html'
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, modal_dialog_1.ModalDialogService, core_1.ViewContainerRef, forms_1.FormBuilder, page_1.Page, couchbase_service_1.CouchbaseService])
    ], ReservationComponent);
    return ReservationComponent;
}());
exports.ReservationComponent = ReservationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzZXJ2YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVGO0FBR3ZGLHdDQUFtRTtBQUNuRSxrRUFBMkY7QUFDM0YsaUNBQW1DO0FBR25DLGdDQUErQjtBQUkvQixnQ0FBa0M7QUFJbEMsbUVBQWlFO0FBQ2pFLDZGQUEyRjtBQVUzRjtJQVVFLDhCQUFvQixpQkFBb0MsRUFBVSxZQUFnQyxFQUFVLEtBQXVCLEVBQVUsV0FBd0IsRUFBVSxJQUFVLEVBQVUsZ0JBQWtDO1FBQWpOLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFMck8saUJBQVksR0FBWSxLQUFLLENBQUM7UUFHOUIsVUFBSyxHQUFXLGNBQWMsQ0FBQztRQUk3QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3hDLE1BQU0sRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLEtBQUs7WUFDZCxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDcEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFFdkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxFQUFDLGNBQWMsRUFBRSxFQUFFLEVBQUMs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QztDQUFBLEFBbkhELElBbUhDO0FBbkhZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd1aS90ZXh0LWZpZWxkJztcclxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAndWkvc3dpdGNoJztcclxuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndWkvY29yZS92aWV3JztcclxuaW1wb3J0IHsgQW5pbWF0aW9uLCBBbmltYXRpb25EZWZpbml0aW9uIH0gZnJvbSAndWkvYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhLCBTd2lwZURpcmVjdGlvbiB9IGZyb20gJ3VpL2dlc3R1cmVzJztcclxuaW1wb3J0ICogYXMgZW51bXMgZnJvbSAndWkvZW51bXMnO1xyXG5cclxuaW1wb3J0IHsgRGlzaCB9IGZyb20gJy4uL3NoYXJlZC9kaXNoJztcclxuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kaXNoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb3VjaGJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY291Y2hiYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSZXNlcnZhdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL3Jlc2VydmF0aW9ubW9kYWwvcmVzZXJ2YXRpb25tb2RhbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmVzZXJ2YXRpb24gfSBmcm9tIFwiLi4vc2hhcmVkL3Jlc2VydmF0aW9uXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdhcHAtcmVzZXJ2YXRpb24nLFxyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3Jlc2VydmF0aW9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlc2VydmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcmVzZXJ2YXRpb246IEZvcm1Hcm91cDtcclxuICBmb3JtVmlldzogVmlldztcclxuICBmZWVkYmFja1ZpZXc6IFZpZXc7XHJcbiAgc2hvd0ZlZWRiYWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgbmV3UmVzZXJ2YXRpb246IFJlc2VydmF0aW9uO1xyXG4gIHJlc2VydmF0aW9uczogQXJyYXk8UmVzZXJ2YXRpb24+O1xyXG4gIGRvY0lkOiBzdHJpbmcgPSBcInJlc2VydmF0aW9uc1wiO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBjb3VjaGJhc2VTZXJ2aWNlOiBDb3VjaGJhc2VTZXJ2aWNlKSB7IFxyXG4gICAgXHJcbiAgICB0aGlzLnJlc2VydmF0aW9uID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgIGd1ZXN0czogMyxcclxuICAgICAgc21va2luZzogZmFsc2UsXHJcbiAgICAgIGRhdGVUaW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJlc2VydmF0aW9ucyA9IFtdO1xyXG5cclxuICAgIGxldCBkb2MgPSB0aGlzLmNvdWNoYmFzZVNlcnZpY2UuZ2V0RG9jdW1lbnQodGhpcy5kb2NJZCk7XHJcbiAgICBpZiAoZG9jID09IG51bGwpIHtcclxuICAgICAgdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLmNyZWF0ZURvY3VtZW50KHtcInJlc2VydmF0aW9uc1wiOiBbXX0sIHRoaXMuZG9jSWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZXNlcnZhdGlvbnMgPSBkb2MucmVzZXJ2YXRpb25zO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgfVxyXG5cclxuICBvblNtb2tpbmdDaGVja2VkKGFyZ3MpIHtcclxuICAgIGxldCBzbW9raW5nU3dpdGNoID0gPFN3aXRjaD5hcmdzLm9iamVjdDtcclxuICAgIGlmIChzbW9raW5nU3dpdGNoLmNoZWNrZWQpIHtcclxuICAgICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHsgc21va2luZzogdHJ1ZSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IHNtb2tpbmc6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25HdWVzdENoYW5nZShhcmdzKSB7XHJcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuXHJcbiAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoeyBndWVzdHM6IHRleHRGaWVsZC50ZXh0IH0pXHJcbiAgfVxyXG5cclxuICBvbkRhdGVUaW1lQ2hhbmdlKGFyZ3MpIHtcclxuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG5cclxuICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IGRhdGVUaW1lOiB0ZXh0RmllbGQudGV4dCB9KVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTW9kYWxWaWV3KGFyZ3MpIHtcclxuICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcclxuICAgICAgICBjb250ZXh0OiBhcmdzLFxyXG4gICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChSZXNlcnZhdGlvbk1vZGFsQ29tcG9uZW50LCBvcHRpb25zKVxyXG4gICAgICAudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoYXJncyA9PT0gXCJndWVzdFwiKSB7XHJcbiAgICAgICAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoe2d1ZXN0czogcmVzdWx0fSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhcmdzID09PSBcImRhdGUtdGltZVwiKSB7XHJcbiAgICAgICAgICB0aGlzLnJlc2VydmF0aW9uLnBhdGNoVmFsdWUoe2RhdGVUaW1lOiByZXN1bHR9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoKSB7XHJcblxyXG4gICAgdGhpcy5uZXdSZXNlcnZhdGlvbiA9IHRoaXMucmVzZXJ2YXRpb24udmFsdWU7XHJcbiAgICB0aGlzLmZvcm1WaWV3ID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkPFZpZXc+KFwiZm9ybVZpZXdcIik7XHJcbiAgICB0aGlzLmZlZWRiYWNrVmlldyA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcImZlZWRiYWNrVmlld1wiKTtcclxuXHJcbiAgICB0aGlzLnJlc2VydmF0aW9ucy5wdXNoKHRoaXMubmV3UmVzZXJ2YXRpb24pO1xyXG4gICAgdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLnVwZGF0ZURvY3VtZW50KHRoaXMuZG9jSWQsIHtcInJlc2VydmF0aW9uc1wiOiB0aGlzLnJlc2VydmF0aW9uc30pO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yZXNlcnZhdGlvbnMpKTtcclxuXHJcbiAgICB0aGlzLmFuaW1hdGVTd2l0Y2goKTtcclxuXHJcbiAgfVxyXG5cclxuICBhbmltYXRlU3dpdGNoKCkgeyAgICBcclxuICAgICAgXHJcbiAgICB0aGlzLmZvcm1WaWV3LmFuaW1hdGUoe1xyXG4gICAgICBzY2FsZTogeyB4OiAxLCB5OiAwIH0sXHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5cclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZmVlZGJhY2tWaWV3LmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2NhbGU6IHt4OiAwLCB5OiAwfSxcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMFxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zaG93RmVlZGJhY2sgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5mZWVkYmFja1ZpZXcuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjYWxlOiB7eDogMSwgeTogMX0sXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlT3V0XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7ICAgICAgIFxyXG5cclxuICB9XHJcblxyXG59Il19