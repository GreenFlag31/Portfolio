import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { description, project, navigation } from '../shared/data-type';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css'],
})
export class DemandComponent implements OnInit, OnDestroy {
  description: description = {
    introduction: {
      title: 'Demand',
      img: {
        src: '../../assets/projects-img/leasing.png',
        alt: 'Image of login page',
      },
      date: `<span style='color:black'>Nov. 2022</span>`,
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
      description: `Demand is a two pages application. This project is about a fictive company in the finance sector managing leasing demands. It includes a login page - without credentials - and a main page. This project allow you to search for any company in Europe.`,
      goal: `The goal of this project is to handle asynchronous data with the use of two web API's and the implementation of a drag and drop system in Javascript.`,
    },
    code: {
      live: 'https://greenflag31.github.io/demand',
      github: 'https://github.com/GreenFlag31/demand',
    },
  };
  project: project = {
    pros: {
      arg1: 'Usage of asynchronous data',
      arg2: 'Drag and drop Javascript API',
      arg3: 'Mobile first approach',
      arg4: 'More attention on user experience / user interface',
      arg5: 'Better understandinng of Object-oriented programming (OOP)',
    },
    cons: {
      arg1: 'Use of Web Cache API (store API results)',
      arg2: 'Less linear design',
      arg3: 'Use of em / rem in CSS instead of pixels',
    },
  };
  navigation: navigation = {
    previous: {
      name: 'Previous project: MusicSchool',
      link: '../MusicSchool-project',
    },
    next: {
      name: 'Next project: Calculator',
      link: '../Calculator-project',
    },
  };

  constructor(private scrollToTop: ScrollToTopService) {}
  subscription!: Subscription;
  ngOnInit(): void {
    // this.scrollToTop.unSubSubWithDelay();

    this.scrollToTop.scrollToTopProjects();
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
