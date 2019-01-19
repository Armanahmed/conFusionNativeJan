"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app = require("application");
var router_2 = require("nativescript-angular/router");
var nativescript_ui_sidedrawer_1 = require("nativescript-ui-sidedrawer");
var operators_1 = require("rxjs/operators");
var dialogs_1 = require("ui/dialogs");
var application_settings_1 = require("application-settings");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, routerExtensions) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        // Use the component constructor to inject services.
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new nativescript_ui_sidedrawer_1.SlideInOnTopTransition();
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) { return _this._activatedUrl = event.urlAfterRedirects; });
    };
    Object.defineProperty(AppComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.isComponentSelected = function (url) {
        return this._activatedUrl === url;
    };
    AppComponent.prototype.onNavItemTap = function (navItemRoute) {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
        var sideDrawer = app.getRootView();
        sideDrawer.closeDrawer();
    };
    AppComponent.prototype.displayLoginDialog = function () {
        var options = {
            title: "Login",
            message: 'Type your Login Credentials',
            userName: application_settings_1.getString("userName", ""),
            password: application_settings_1.getString("password", ""),
            okButtonText: "Login",
            cancelButtonText: "Cancel"
        };
        dialogs_1.login(options)
            .then(function (loginResult) {
            application_settings_1.setString("userName", loginResult.userName);
            application_settings_1.setString("password", loginResult.password);
        }, function () {
            console.log('Login cancelled');
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./app.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXdEO0FBQ3hELGlDQUFtQztBQUNuQyxzREFBK0Q7QUFDL0QseUVBQXlHO0FBQ3pHLDRDQUF3QztBQUN4QyxzQ0FBZ0Q7QUFDaEQsNkRBQTREO0FBTzVEO0lBSUksc0JBQW9CLE1BQWMsRUFBVSxnQkFBa0M7UUFBMUQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUUsb0RBQW9EO0lBQ3hELENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtREFBc0IsRUFBRSxDQUFDO1FBRTFELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNqQixJQUFJLENBQUMsa0JBQU0sQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUssWUFBWSxzQkFBYSxFQUE5QixDQUE4QixDQUFDLENBQUM7YUFDNUQsU0FBUyxDQUFDLFVBQUMsS0FBb0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixFQUE1QyxDQUE0QyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELHNCQUFJLDhDQUFvQjthQUF4QjtZQUNJLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsMENBQW1CLEdBQW5CLFVBQW9CLEdBQVc7UUFDM0IsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLEdBQUcsQ0FBQztJQUN0QyxDQUFDO0lBRUQsbUNBQVksR0FBWixVQUFhLFlBQW9CO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUMzQyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE1BQU07YUFDZjtTQUNKLENBQUMsQ0FBQztRQUVILElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCx5Q0FBa0IsR0FBbEI7UUFDSSxJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFFLDZCQUE2QjtZQUN0QyxRQUFRLEVBQUUsZ0NBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1lBQ25DLFFBQVEsRUFBRSxnQ0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7WUFDbkMsWUFBWSxFQUFFLE9BQU87WUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtTQUM3QixDQUFBO1FBRUQsZUFBSyxDQUFDLE9BQU8sQ0FBQzthQUNYLElBQUksQ0FBQyxVQUFDLFdBQXdCO1lBQzdCLGdDQUFTLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QyxnQ0FBUyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxFQUNEO1lBQVEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQXJEUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO3lDQUs4QixlQUFNLEVBQTRCLHlCQUFnQjtPQUpyRSxZQUFZLENBc0R4QjtJQUFELG1CQUFDO0NBQUEsQUF0REQsSUFzREM7QUF0RFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFJhZFNpZGVEcmF3ZXIsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgbG9naW4sIExvZ2luUmVzdWx0IH0gZnJvbSAndWkvZGlhbG9ncyc7XG5pbXBvcnQgeyBnZXRTdHJpbmcsIHNldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfYWN0aXZhdGVkVXJsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGVkVXJsID0gXCIvaG9tZVwiO1xuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC5waXBlKGZpbHRlcigoZXZlbnQ6IGFueSkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcbiAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHRoaXMuX2FjdGl2YXRlZFVybCA9IGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzKTtcbiAgICB9XG5cbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgaXNDb21wb25lbnRTZWxlY3RlZCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZhdGVkVXJsID09PSB1cmw7XG4gICAgfVxuXG4gICAgb25OYXZJdGVtVGFwKG5hdkl0ZW1Sb3V0ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbbmF2SXRlbVJvdXRlXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xuICAgIH1cblxuICAgIGRpc3BsYXlMb2dpbkRpYWxvZygpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJMb2dpblwiLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1R5cGUgeW91ciBMb2dpbiBDcmVkZW50aWFscycsXG4gICAgICAgICAgICB1c2VyTmFtZTogZ2V0U3RyaW5nKFwidXNlck5hbWVcIiwgXCJcIiksXG4gICAgICAgICAgICBwYXNzd29yZDogZ2V0U3RyaW5nKFwicGFzc3dvcmRcIiwgXCJcIiksXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiTG9naW5cIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZ2luKG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKGxvZ2luUmVzdWx0OiBMb2dpblJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgc2V0U3RyaW5nKFwidXNlck5hbWVcIiwgbG9naW5SZXN1bHQudXNlck5hbWUpO1xuICAgICAgICAgICAgc2V0U3RyaW5nKFwicGFzc3dvcmRcIiwgbG9naW5SZXN1bHQucGFzc3dvcmQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKCkgPT4geyBjb25zb2xlLmxvZygnTG9naW4gY2FuY2VsbGVkJyk7IFxuICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ==