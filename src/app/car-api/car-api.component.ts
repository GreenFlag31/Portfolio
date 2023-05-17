import { Component, OnInit } from '@angular/core';
import { description, project, navigation } from '../shared/data-type';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-car-api',
  templateUrl: './car-api.component.html',
})
export class CarApiComponent implements OnInit {
  description: description = {
    introduction: {
      title: 'Roadster API',
      img: {
        src: '../../assets/projects-img/car.jpg',
        alt: 'Red 911 Porsche',
      },
      date: `<span style='color:black'>May 2023</span>`,
      coding: {
        language1: {
          src: '../../assets/NodeJSbg.png',
          title: 'NodeJS',
        },
        language2: {
          src: '../../assets/MongoDB.jpg',
          title: 'MongoDB',
        },
      },
    },
    text: {
      description: `Roadster API is the second API I've created in NodeJS and MongoDB. This API lets you discover more about historical cars from 1950 to 2010.`,
      goal: `The goal of this project was to make another API. The added value of this project is the authentication, implementing the necessary security measures. A website over documentation has been created aswell, implementing core features in Angular. Visit the documentation and create an account by clicking on the Live button!`,
    },
    code: {
      live: 'https://historicalcars-api.com',
      github: 'https://github.com/GreenFlag31/car-api',
    },
  };
  project: project = {
    pros: {
      arg1: 'Improved Database queries in MongoDB',
      arg2: 'Increased complexity with authentication measures and security',
      arg3: 'Practice of core Angular features in the documentation website: authentication, protected routes, ...',
      arg4: 'Improved documentation, following best practices',
    },
    cons: {
      arg1: 'Implementing Devops concepts in more complex projects, covering the whole project lifecycle',
    },
  };
  navigation: navigation = {
    previous: {
      name: 'Previous project: Food-App',
      link: '../food-app-project',
    },
    next: {
      name: 'Next project: Ecoactions',
      link: '../eco-actions-project',
    },
  };
  constructor(private scrollToTop: ScrollToTopService) {}
  ngOnInit() {
    this.scrollToTop.scroll();
  }
}
