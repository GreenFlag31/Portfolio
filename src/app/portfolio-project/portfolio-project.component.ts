import { Component, OnInit } from '@angular/core';
import { description, navigation, project } from '../shared/data-type';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
})
export class PortfolioProjectComponent implements OnInit {
  description: description = {
    introduction: {
      title: 'This portfolio',
      img: {
        src: '../../assets/projects-img/developer.jpg',
        alt: 'Picture of a sunny desktop',
      },
      date: `<span style='color:white'>April 2023</span>`,
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
      description: `This portfolio is a single page application (SPA) build with Angular, animated with route transitions.`,
      goal: `The goal of this website is - obviously :) - to showcase different projects I made and practice further Angular. Attention has been put towards a smooth user experience. Recommended practices by Angular are followed.`,
    },
    code: {
      github: 'https://github.com/GreenFlag31/Portfolio',
    },
  };
  project: project = {
    pros: {
      arg1: 'Further practice of Angular',
      arg2: 'Very DRY structure: reused components, variable data passed through objects like an API response',
      arg3: 'Pictures have been resized and compressed to improve loading performance',
      arg4: 'More attention on user experience / user interface',
    },
    cons: {
      arg1: 'The future will tell me :)',
    },
  };
  navigation: navigation = {
    previous: {
      name: 'Previous project: Game',
      link: '../Game-project',
    },
  };

  constructor(private scrollToTop: ScrollToTopService) {}
  ngOnInit() {
    this.scrollToTop.scrollToTopProjects();
  }
}
