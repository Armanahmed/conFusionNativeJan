import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { Page } from 'ui/page';
import { View } from 'ui/core/view';
import { SwipeGestureEventData, SwipeDirection } from 'ui/gestures';
import * as enums from 'ui/enums';

@Component({
	selector: 'app-home',
	moduleId: module.id,
	templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  promoErrMess: string;
  leaderErrMess: string;
  showLeftCard: boolean = true;
  showMiddleCard: boolean = false;
  showRightCard: boolean = false;
  leftCard: View;
  middleCard: View;
  rightCard: View;

  constructor(private dishService: DishService, private promotionService: PromotionService, private leaderService: LeaderService, private page: Page, private fonticon: TNSFontIconService, @Inject('BaseURL') private baseURL) { }

  ngOnInit() {

    this.dishService.getFeaturedDish()
      .subscribe(dish => this.dish = dish,
        errmess => this.dishErrMess = <any>errmess);
    this.promotionService.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion,
        errmess => this.promoErrMess = <any>errmess);
    this.leaderService.getFeaturedLeader()
      .subscribe(leader => this.leader = leader,
        errmess => this.leaderErrMess = <any>errmess);

  }

  onSwipe(args: SwipeGestureEventData) {
    if (args.direction === SwipeDirection.left) {
      this.animateLeft();
    } else if (args.direction === SwipeDirection.right) {
      this.animateRight();
    }
  }

  animateLeft() {

    if (this.dish && this.promotion && this.leader) {
      this.leftCard = this.page.getViewById<View>("leftCard");
      this.middleCard = this.page.getViewById<View>("middleCard");
      this.rightCard = this.page.getViewById<View>("rightCard");

      if ( this.showLeftCard ) {

        this.rightCard.animate({
          translate: { x: 2000, y: 0 }
        })
        .then(() => {
          this.leftCard.animate({
            translate: { x: -2000, y: 0 },
            duration: 500,
            curve: enums.AnimationCurve.easeInOut
          })
          .then(() => {
            this.showLeftCard = false;
            this.showMiddleCard = true;
            this.middleCard.animate({
              translate: { x: 0, y: 0 },
              duration: 500,
              curve: enums.AnimationCurve.easeInOut
            });
          });
        });

      } else if ( this.showMiddleCard ) {

        this.leftCard.animate({
          translate: { x: 2000, y: 0 }
        })
        .then(() => {
          this.middleCard.animate({
            translate: { x: -2000, y: 0 },
            duration: 500,
            curve: enums.AnimationCurve.easeInOut
          })
          .then(() => {
            this.showMiddleCard = false;
            this.showRightCard = true;
            this.rightCard.animate({
              translate: { x: 0, y: 0 },
              duration: 500,
              curve: enums.AnimationCurve.easeInOut
            });
          });
        });

      } else if ( this.showRightCard ) {
      
        this.middleCard.animate({
          translate: { x: 2000, y: 0 }
        })
        .then(() => {
          this.rightCard.animate({
            translate: { x: -2000, y: 0 },
            duration: 500,
            curve: enums.AnimationCurve.easeInOut
          })
          .then(() => {
            this.showRightCard = false;
            this.showLeftCard = true;
            this.leftCard.animate({
              translate: { x: 0, y: 0 },
              duration: 500,
              curve: enums.AnimationCurve.easeInOut
            });
          });
        });

      }

    }

  }

  animateRight() {

    if (this.dish && this.promotion && this.leader) {
      this.leftCard = this.page.getViewById<View>("leftCard");
      this.middleCard = this.page.getViewById<View>("middleCard");
      this.rightCard = this.page.getViewById<View>("rightCard");

      if ( this.showLeftCard ) {

        this.middleCard.animate({
          translate: { x: -2000, y: 0 }
        })
        .then(() => {
          this.leftCard.animate({
            translate: { x: 2000, y: 0 },
            duration: 500,
            curve: enums.AnimationCurve.easeInOut
          })
          .then(() => {
            this.showLeftCard = false;
            this.showRightCard = true;
            this.rightCard.animate({
              translate: { x: 0, y: 0 },
              duration: 500,
              curve: enums.AnimationCurve.easeInOut
            });
          });
        });

      } else if ( this.showMiddleCard ) {

        this.rightCard.animate({
          translate: { x: -2000, y: 0 }
        })
        .then(() => {
          this.middleCard.animate({
            translate: { x: 2000, y: 0 },
            duration: 500,
            curve: enums.AnimationCurve.easeInOut
          })
          .then(() => {
            this.showMiddleCard = false;
            this.showLeftCard = true;
            this.leftCard.animate({
              translate: { x: 0, y: 0 },
              duration: 500,
              curve: enums.AnimationCurve.easeInOut
            });
          });
        });

      } else if ( this.showRightCard ) {
      
        this.leftCard.animate({
          translate: { x: -2000, y: 0 }
        })
        .then(() => {
          this.rightCard.animate({
            translate: { x: 2000, y: 0 },
            duration: 500,
            curve: enums.AnimationCurve.easeInOut
          })
          .then(() => {
            this.showRightCard = false;
            this.showMiddleCard = true;
            this.middleCard.animate({
              translate: { x: 0, y: 0 },
              duration: 500,
              curve: enums.AnimationCurve.easeInOut
            });
          });
        });

      }

    }

  }

}