import { Component, OnInit } from '@angular/core';
import { description, project, navigation } from '../../shared/data-type';
import { ScrollToTopService } from '../../shared/scroll-to-top.service';
import { Meta } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared-module.module';

@Component({
  selector: 'app-demand',
  templateUrl: './js-in-practice.component.html',
  standalone: true,
  imports: [SharedModule],
})
export class JSinPractice implements OnInit {
  description: description = {
    introduction: {
      title: 'JS-in-practice',
      img: {
        src: '../../assets/projects-img/js-in-practice.webp',
        alt: 'Image of login page',
      },
      date: `<span style='color:black'>Dec. 2023</span>`,
      coding: {
        language1: {
          src: '../../assets/Angular.png',
          title: 'Angular',
        },
        language2: {
          src: '../../assets/NestJS.png',
          title: 'NestJS',
        },
        language3: {
          src: '../../assets/Mysql.png',
          title: 'Mysql',
        },
        language4: {
          src: '../../assets/HTML5.png',
          title: 'HTML5',
        },
        language5: {
          src: '../../assets/CSS3.png',
          title: 'CSS3',
        },
      },
    },
    text: {
      description: `JS in practice is an online SPA application to learn Javascript with interactive exercises and questions. This application offers the possibility to customise the online code editor, create evaluations, identify and follow your progress with statistics.`,
      goal: `One of the most challenging project so far, I've build this project from scratch with Angular, NestJS and MySQL. A own testing library has been created to validate user's code. Click on the live button to practice and improve your Javascript skills!`,
    },
    code: {
      live: 'https://js-in-practice.com',
    },
  };
  project: project = {
    pros: {
      arg1: 'Whole process of creating a complete fullstack project',
      arg2: 'All the main features of NestJS: class validators, route guards, architecture,...',
      arg3: 'Improved comprehension of Back-End',
      arg4: 'Hosting and server configuration',
      arg5: 'Implementing a mail service in an online application',
    },
    cons: {
      arg1: 'Future will tell me :)',
    },
  };
  navigation: navigation = {
    next: {
      name: 'Next project: Food-App',
      link: '../food-app-project',
    },
  };

  constructor(private scrollToTop: ScrollToTopService, private meta: Meta) {}

  ngOnInit() {
    this.meta.addTag({
      name: 'description',
      content:
        'Web Developer - Manu Claeys - Portfolio - Project JS in practice',
    });
    this.scrollToTop.scroll();
  }
}
