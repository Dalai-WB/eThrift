'use strict';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';
import { Renderer2 } from "@angular/core";
import { faXmark, faHeart} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit {
  @ViewChild('tinder') tinderContainer: ElementRef | any;

  wishlist: any[] = [];

  faXmark = faXmark;
  faHeart = faHeart;
  allCards: any;
  nope: any;
  love: any;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {

  }
  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.allCards = this.tinderContainer.nativeElement.querySelectorAll('.tinder--card');
    this.initCards();
    this.allCards.forEach((el: any) => {
      var hammertime = new Hammer(el);

      hammertime.on('pan', (event) => {
        el.classList.add('moving');
      });

      hammertime.on('pan', (event) => {
        if (event.deltaX === 0) return;
        if (event.center.x === 0 && event.center.y === 0) return;

        this.tinderContainer.nativeElement.classList.toggle('tinder_love', event.deltaX > 0);
        this.tinderContainer.nativeElement.classList.toggle('tinder_nope', event.deltaX < 0);

        var xMulti = event.deltaX * 0.03;
        var yMulti = event.deltaY / 80;
        var rotate = xMulti * yMulti;

        event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
      });

      hammertime.on('panend', (event) => {
        el.classList.remove('moving');
        this.tinderContainer.nativeElement.classList.remove('tinder_love');
        this.tinderContainer.nativeElement.classList.remove('tinder_nope');

        var moveOutWidth = document.body.clientWidth;
        var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

        event.target.classList.toggle('removed', !keep);

        if (keep) {
          event.target.style.transform = '';
        } else {
          var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
          var toX = event.deltaX > 0 ? endX : -endX;
          var endY = Math.abs(event.velocityY) * moveOutWidth;
          var toY = event.deltaY > 0 ? endY : -endY;
          var xMulti = event.deltaX * 0.03;
          var yMulti = event.deltaY / 80;
          var rotate = xMulti * yMulti;

          event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
          this.initCards();
        }
      });
    });
  }

  initCards(card?: any, index?: any) {
    var newCards = this.tinderContainer.nativeElement.querySelectorAll('.tinder--card:not(.removed)');
    console.log(newCards);

    newCards.forEach((card: any, index: any) => {
      card.style.zIndex = this.allCards.length - index;
      card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
      card.style.opacity = (10 - index) / 10;
    });

    this.tinderContainer.nativeElement.classList.add('loaded')
  }

  onNopeClick (love: any) {
    var cards = this.tinderContainer.nativeElement.querySelectorAll('.tinder--card:not(.removed)');
    var moveOutWidth = document.body.clientWidth * 1.5;

    var card = cards[0];
    card.classList.add('removed');

    if (love) {
      card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
    } else {
      card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
    }

    this.initCards();
  };

}
