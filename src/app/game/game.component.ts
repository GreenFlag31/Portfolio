import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter, delay } from 'rxjs';
import { description, project, navigation } from '../shared/data-type';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit, OnDestroy {
  description: description = {
    introduction: {
      title: 'Game',
      img: {
        src: '../../assets/projects-img/game.png',
        alt: 'Image of a the Chrome console',
      },
      date: `Dec. 2022`,
      coding: {
        language1: {
          src: '../../assets/javascript.png',
          title: 'Javascript',
        },
        language2: {
          src: '../../assets/HTML5.png',
          title: 'HTML5',
        },
      },
    },
    text: {
      description: `Game is a one page project and is meant to be played and started in the console. This project is a classical paper-scissors-rock game with a touch of RPG fantasy.`,
      goal: `Part of a <a href="https://drive.google.com/drive/folders/1mSGaVybH6HzOb6r9B-cvXlPgrk_9KXtn" target=_blank>Frond-End training</a>, the purpose of this project is to focus solely on Javascript. Enrichted with questions about Javascript, this game proposes a ranking system, storing the data in the sessionStorage.`,
    },
    code: {
      live: 'https://greenflag31.github.io/JS-game',
      github: 'https://github.com/GreenFlag31/JS-game',
    },
  };
  project: project = {
    pros: {
      arg1: 'Deeper understanding of Object Oriented Programming',
      arg2: 'Code structure, files separated into modules to keep architecture well organised',
      arg3: 'Validation of user inputs',
      arg4: 'Documenting code with JsDoc',
    },
    cons: {
      arg1: 'Use of Typescript might be preferable instead of documenting the code and delivers more control',
    },
  };
  navigation: navigation = {
    previous: {
      name: 'Calculator',
      link: '../Calculator-project',
    },
    // next: {
    //   name: 'Game',
    //   link: '../Game-project',
    // },
  };

  constructor(
    private router: Router,
    private scrollToTop: ScrollToTopService
  ) {}
  subscription!: Subscription;
  ngOnInit(): void {
    this.scrollToTop.unSub();
    this.subscription = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        delay(450)
      )
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
