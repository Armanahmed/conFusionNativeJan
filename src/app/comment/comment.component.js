"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var forms_1 = require("@angular/forms");
var CommentModalComponent = /** @class */ (function () {
    function CommentModalComponent(formBuilder, params) {
        this.formBuilder = formBuilder;
        this.params = params;
        this.commentForm = this.formBuilder.group({
            author: ['', forms_1.Validators.required],
            rating: 5,
            comment: ['', forms_1.Validators.required]
        });
    }
    CommentModalComponent.prototype.ngOnInit = function () {
    };
    CommentModalComponent.prototype.onAuthorChange = function (args) {
        var textField = args.object;
        this.commentForm.patchValue({ author: textField.text });
    };
    CommentModalComponent.prototype.onRatingChange = function (args) {
        var slider = args.object;
        this.commentForm.patchValue({ rating: slider.value });
    };
    CommentModalComponent.prototype.onCommentChange = function (args) {
        var textField = args.object;
        this.commentForm.patchValue({ comment: textField.text });
    };
    CommentModalComponent.prototype.onSubmit = function () {
        this.newComment = this.commentForm.value;
        var date = new Date();
        this.newComment.date = date.toISOString();
        this.params.closeCallback(this.newComment);
    };
    CommentModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './comment.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, modal_dialog_1.ModalDialogParams])
    ], CommentModalComponent);
    return CommentModalComponent;
}());
exports.CommentModalComponent = CommentModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxrRUFBc0U7QUFDdEUsd0NBQW1FO0FBU25FO0lBS0MsK0JBQW9CLFdBQXdCLEVBQVUsTUFBeUI7UUFBM0QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUU5RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3BDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUNyQyxDQUFDLENBQUM7SUFFTixDQUFDO0lBRUQsd0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFTSw4Q0FBYyxHQUFyQixVQUFzQixJQUFJO1FBQ3JCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLDhDQUFjLEdBQXJCLFVBQXNCLElBQUk7UUFDdEIsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU0sK0NBQWUsR0FBdEIsVUFBdUIsSUFBSTtRQUN2QixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFSyx3Q0FBUSxHQUFmO1FBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUxQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQXhDVyxxQkFBcUI7UUFKakMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1NBQ3ZDLENBQUM7eUNBTWdDLG1CQUFXLEVBQWtCLGdDQUFpQjtPQUxuRSxxQkFBcUIsQ0EwQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcclxuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSAnLi4vc2hhcmVkL2NvbW1lbnQnO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd1aS90ZXh0LWZpZWxkJztcclxuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSAndWkvc2xpZGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2NvbW1lbnQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21tZW50TW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdFxyXG5cdGNvbW1lbnRGb3JtOiBGb3JtR3JvdXA7XHJcblx0bmV3Q29tbWVudDogQ29tbWVudDtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xyXG5cclxuXHRcdHRoaXMuY29tbWVudEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICBhdXRob3I6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgcmF0aW5nOiA1LFxyXG4gICAgICAgIGNvbW1lbnQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgIH0pO1x0XHJcblxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0cHVibGljIG9uQXV0aG9yQ2hhbmdlKGFyZ3MpIHtcclxuICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XHJcbiAgICAgIHRoaXMuY29tbWVudEZvcm0ucGF0Y2hWYWx1ZSh7IGF1dGhvcjogdGV4dEZpZWxkLnRleHQgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25SYXRpbmdDaGFuZ2UoYXJncykge1xyXG4gICAgICBsZXQgc2xpZGVyID0gPFNsaWRlcj5hcmdzLm9iamVjdDtcclxuICAgICAgdGhpcy5jb21tZW50Rm9ybS5wYXRjaFZhbHVlKHsgcmF0aW5nOiBzbGlkZXIudmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Db21tZW50Q2hhbmdlKGFyZ3MpIHtcclxuICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XHJcbiAgICAgIHRoaXMuY29tbWVudEZvcm0ucGF0Y2hWYWx1ZSh7IGNvbW1lbnQ6IHRleHRGaWVsZC50ZXh0IH0pO1xyXG4gIH1cclxuXHJcblx0cHVibGljIG9uU3VibWl0KCkge1xyXG5cdFx0dGhpcy5uZXdDb21tZW50ID0gdGhpcy5jb21tZW50Rm9ybS52YWx1ZTtcclxuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0dGhpcy5uZXdDb21tZW50LmRhdGUgPSBkYXRlLnRvSVNPU3RyaW5nKCk7XHJcblxyXG5cdFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh0aGlzLm5ld0NvbW1lbnQpO1xyXG5cdH1cclxuXHJcbn0iXX0=