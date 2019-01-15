import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';
import { DishService } from '../services/dish.service';
import { FavoriteService } from '../services/favorite.service';
import { CommentModalComponent } from "../comment/comment.component";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { Toasty } from 'nativescript-toasty';
import { action } from "ui/dialogs";
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';
import { switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-dishdetail',
	moduleId: module.id,
	templateUrl: './dishdetail.component.html'
})

export class DishdetailComponent implements OnInit {

	dish: Dish;
	comment: Comment;
	errMess: string;
	avgstars: string;
	numcomments: number;
	favorite: boolean = false;

	constructor(private dishservice: DishService, private favoriteservice: FavoriteService, private fonticon: TNSFontIconService, private route: ActivatedRoute, private routerExtensions: RouterExtensions, private modalService: ModalDialogService, private vcRef: ViewContainerRef, @Inject('BaseURL') private baseURL) {

	}

	ngOnInit() {

		this.route.params
			.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
			.subscribe(dish => {
				this.dish = dish;
          this.favorite = this.favoriteservice.isFavorite(this.dish.id);
          this.numcomments = this.dish.comments.length;

          let total = 0;
          this.dish.comments.forEach(comment => total += comment.rating);
          this.avgstars = (total/this.numcomments).toFixed(2);
			},
			errmess => { this.dish = null; this.errMess = <any>errmess; });
		
	}

	addToFavorites() {
		if(!this.favorite) {
			console.log('Adding to Favorites', this.dish.id);
			this.favorite = this.favoriteservice.addFavorite(this.dish.id);
			const toast = new Toasty("Added Dish " + this.dish.id, "short", "bottom");
			toast.show();
		}
	}

	displayActionDialog() {

    let options = {
      title: "Actions",
      cancelButtonText: "Cancel",
      actions: ["Add to Favorites", "Add comment"]
    };

    action(options).then(result => {
      if (result === "Add to Favorites") {
        this.addToFavorites();
      } else if (result === "Add comment") {
          console.log("Add Comment from Action Dialog");
        this.commentModalView();
      } 
    });

  }

  commentModalView() {
  	let options: ModalDialogOptions = {
        viewContainerRef: this.vcRef,
        fullscreen: false
    };

    this.modalService.showModal(CommentModalComponent, options)
      .then((result: Comment) => {
        this.dish.comments.push(result);
        this.numcomments = this.dish.comments.length;
        let total = 0;
        this.dish.comments.forEach((comment: Comment) => total += comment.rating);
        this.avgstars = (total/this.numcomments).toFixed(2);
      });
  }

	goBack(): void {
		this.routerExtensions.back();
	}

}