import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Comment } from '../shared/comment';
import { TextField } from 'ui/text-field';
import { Slider } from 'ui/slider';

@Component({
	moduleId: module.id,
	templateUrl: './comment.component.html'
})
export class CommentModalComponent implements OnInit {
	
	commentForm: FormGroup;
	newComment: Comment;

	constructor(private formBuilder: FormBuilder, private params: ModalDialogParams) {

		this.commentForm = this.formBuilder.group({
        author: ['', Validators.required],
        rating: 5,
        comment: ['', Validators.required]
    });	

	}

	ngOnInit() {

	}

	public onAuthorChange(args) {
      let textField = <TextField>args.object;
      this.commentForm.patchValue({ author: textField.text });
  }

  public onRatingChange(args) {
      let slider = <Slider>args.object;
      this.commentForm.patchValue({ rating: slider.value });
  }

  public onCommentChange(args) {
      let textField = <TextField>args.object;
      this.commentForm.patchValue({ comment: textField.text });
  }

	public onSubmit() {
		this.newComment = this.commentForm.value;
		const date = new Date();
		this.newComment.date = date.toISOString();

		this.params.closeCallback(this.newComment);
	}

}