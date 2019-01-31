"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var Email = require("nativescript-email");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(fonticon) {
        this.fonticon = fonticon;
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    ContactComponent.prototype.sendEmail = function () {
        Email.available()
            .then(function (avail) {
            if (avail) {
                Email.compose({
                    to: ['confusion@food.net'],
                    subject: '[ConFusion]: Query',
                    body: 'Dear Sir/Madam:'
                });
            }
            else {
                console.log('No Email Configured');
            }
        });
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            moduleId: module.id,
            templateUrl: './contact.component.html'
        }),
        __metadata("design:paramtypes", [nativescript_ngx_fonticon_1.TNSFontIconService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxpQ0FBbUM7QUFFbkMsdUVBQStEO0FBQy9ELDBDQUE0QztBQVE1QztJQUVFLDBCQUFvQixRQUE0QjtRQUE1QixhQUFRLEdBQVIsUUFBUSxDQUFvQjtJQUFJLENBQUM7SUFFckQsbUNBQVEsR0FBUixjQUFhLENBQUM7SUFFZCw0Q0FBaUIsR0FBakI7UUFDRSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNDLEtBQUssQ0FBQyxTQUFTLEVBQUU7YUFDZixJQUFJLENBQUMsVUFBQyxLQUFjO1lBQ3BCLElBQUksS0FBSyxFQUFFO2dCQUNWLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ2IsRUFBRSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQzFCLE9BQU8sRUFBRSxvQkFBb0I7b0JBQzdCLElBQUksRUFBRSxpQkFBaUI7aUJBQ3ZCLENBQUMsQ0FBQzthQUNIO2lCQUFNO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUNuQztRQUNGLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQXhCVSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1NBQ3ZDLENBQUM7eUNBSThCLDhDQUFrQjtPQUZyQyxnQkFBZ0IsQ0EwQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5pbXBvcnQgKiBhcyBFbWFpbCBmcm9tICduYXRpdmVzY3JpcHQtZW1haWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdhcHAtY29udGFjdCcsXHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHR0ZW1wbGF0ZVVybDogJy4vY29udGFjdC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0Q29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICB9XHJcblxyXG4gIHNlbmRFbWFpbCgpIHtcclxuICBcdEVtYWlsLmF2YWlsYWJsZSgpXHJcbiAgXHRcdC50aGVuKChhdmFpbDogYm9vbGVhbikgPT4ge1xyXG4gIFx0XHRcdGlmIChhdmFpbCkge1xyXG4gIFx0XHRcdFx0RW1haWwuY29tcG9zZSh7XHJcbiAgXHRcdFx0XHRcdHRvOiBbJ2NvbmZ1c2lvbkBmb29kLm5ldCddLFxyXG4gIFx0XHRcdFx0XHRzdWJqZWN0OiAnW0NvbkZ1c2lvbl06IFF1ZXJ5JyxcclxuICBcdFx0XHRcdFx0Ym9keTogJ0RlYXIgU2lyL01hZGFtOidcclxuICBcdFx0XHRcdH0pO1xyXG4gIFx0XHRcdH0gZWxzZSB7XHJcbiAgXHRcdFx0XHRjb25zb2xlLmxvZygnTm8gRW1haWwgQ29uZmlndXJlZCcpO1xyXG4gIFx0XHRcdH1cclxuICBcdFx0fSlcclxuICB9XHJcblxyXG59Il19