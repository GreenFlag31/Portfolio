import { Component, OnInit } from '@angular/core';
import { description, navigation, project } from '../shared/data-type';

@Component({
  selector: 'app-eco-actions',
  templateUrl: './eco-actions.component.html',
  styleUrls: ['./eco-actions.component.css'],
})
export class EcoActionsComponent implements OnInit {
  description: description = {
    introduction: {
      title: 'EcoActions',
      img: {
        src: '../../assets/projects-img/earth.png',
        alt: 'Landing page of a project',
      },
      date: `<span style='color:black'>Sept. 2022</span>`,
      coding: {
        language1: {
          src: '../../assets/javascript.png',
          title: 'Javascript',
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
      description: `EcoActions is a single page project about all little actions we can undertake to fight climate change. If almost everybody is aware of climate change, not everybody know which steps we can undertake to make things change. It should not be necessary difficult. Actions are presented in form of challenges.`,
      goal: `The goal of this project was to practice HTML, CSS, and Javascript.`,
    },
    code: {
      live: 'https://greenflag31.github.io/EcoActions',
      github: 'https://github.com/GreenFlag31/EcoActions',
    },
  };
  project: project = {
    pros: {
      arg1: 'A deeper understanding of HTML, CSS, JS',
      arg2: 'Animations with IntersectionObserver API',
      arg3: 'Responsive dynamical pagination',
      arg4: 'Practice of modern CSS technologies such as Grid or Flexbox',
      arg5: 'Optimised Javascript code respecting the DRY principle',
    },
    cons: {
      arg1: 'Cleaner structure of the Javascript code, separating file into modules, increasing maintainability',
      arg2: 'An easier pagination system, analizing existings pagination on the market',
    },
  };
  navigation: navigation = {
    previous: {
      name: 'Food-App',
      link: '../food-app-project',
    },
    next: {
      name: 'MusicSchool',
      link: '../MusicSchool-project',
    },
  };

  constructor() {}

  ngOnInit(): void {}
}