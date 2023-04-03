import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { description, project, navigation } from '../shared/data-type';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  description: description = {
    introduction: {
      title: 'Calculator',
      img: {
        src: '../../assets/projects-img/calculator2.png',
        alt: 'Image of a calculator',
      },
      date: `Dec. 2022`,
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
      description: `Calculator is a one page project. This project presents a basic, non scientific calculator, to handle simple computations. Simple does not mean easy: a lot of user input validations had to be done.`,
      goal: `Part of a <a href="https://drive.google.com/drive/folders/1mSGaVybH6HzOb6r9B-cvXlPgrk_9KXtn" target=_blank>Frond-End training</a>, the purpose of this project is to handle multiple exceptions that can occur. Focus is put mainly on Javascript and the structure of the code. This project also offers a correct user experience, supporting mouse and keyboard inputs.`,
    },
    code: {
      live: 'https://greenflag31.github.io/calculator',
      github: 'https://github.com/GreenFlag31/calculator',
    },
  };
  project: project = {
    pros: {
      arg1: 'Deeper understanding of Javascript',
      arg2: 'Focus on user experience',
      arg3: 'Handle multiple exceptions, validation of user inputs',
      arg4: 'Code structure, files separated into modules to keep architecture optimal',
      arg5: 'Use of JSDoc to document code functions',
    },
    cons: {
      arg1: 'For high structured projects, use of Object Oriented Programming might be preferable',
      arg2: 'Use of Reactive Programming might be preferable to maintain variables in a flow, saving the need of manually updating them',
    },
  };
  navigation: navigation = {
    previous: {
      name: 'Previous project: Demand',
      link: '../Demand-project',
    },
    next: {
      name: 'Next project: Game',
      link: '../Game-project',
    },
  };

  constructor(private scrollToTop: ScrollToTopService) {}
  subscription!: Subscription;
  ngOnInit(): void {
    this.scrollToTop.scrollToTopProjects();
  }
}
