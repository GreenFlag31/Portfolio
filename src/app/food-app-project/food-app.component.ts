import { Component, OnInit } from '@angular/core';
import { description, navigation, project } from '../shared/data-type';

@Component({
  selector: 'app-food-app',
  templateUrl: './food-app.component.html',
  styleUrls: ['./food-app.component.css'],
})
export class FoodAppComponent implements OnInit {
  description: description = {
    introduction: {
      title: 'Food-App',
      img: {
        src: '../../assets/projects-img/food-app.png',
        alt: 'Image of food plate',
      },
      date: 'March 2023',
      coding: {
        language1: {
          src: '../../assets/Angular.png',
          title: 'Angular',
        },
        language2: {
          src: '../../assets/Typescript.png',
          title: 'Typescript',
        },
        language3: {
          src: '../../assets/HTML5.png',
          title: 'HTML5',
        },
        language4: {
          src: '../../assets/CSS3.png',
          title: 'CSS3',
        },
      },
    },
    text: {
      description: `Food-App is a Single Page Application (SPA) in Angular that keeps track of your food products and their expiry date.
      Because it's easy to lose sight of the expiry date of what we buy, the
      purpose of this project is to reduce food waste with the help of
      notifications. Data is stored on Firebase.`,
      goal: `The goal of this project was to put into practice what I've learned from
      an <a href="https://www.udemy.com/certificate/UC-088beaaf-d8f0-4b1d-9b43-3f841191cd9b">Udemy course.`,
    },
    code: {
      live: 'https://my-list-a7fb0.web.app/getting-started',
      github: 'https://github.com/GreenFlag31/food-manager',
    },
  };
  project: project = {
    pros: {
      arg1: 'A complete view of Angular',
      arg2: 'Typescript',
      arg3: 'Usage of a backend & database, requiring http conversation',
      arg4: 'A more complex structure due to Angular architecture compared to classical projects',
      arg5: 'Functional Reactive Programming, RxJs',
    },
    cons: {
      arg1: 'A more extensive use of RxJs',
      arg2: 'A better structure, cleaner Angular architecture',
      arg3: 'Deeper view of Typescript',
    },
  };
  navigation: navigation = {
    next: {
      name: 'EcoActions',
      link: '../EcoActions-project',
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
