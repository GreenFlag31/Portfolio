import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter, delay } from 'rxjs';
import { description, project, navigation } from '../shared/data-type';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-music-school',
  templateUrl: './music-school.component.html',
  styleUrls: ['./music-school.component.css'],
})
export class MusicSchoolComponent implements OnInit, OnDestroy {
  description: description = {
    introduction: {
      title: 'Music School',
      img: {
        src: '../../assets/projects-img/MS2.png',
        alt: 'Landing page of a project',
      },
      date: `<span style='color:black'>August 2022</span>`,
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
      description: `MusicSchool is a two pages application and my first project. MusicSchool presents anonymized informations about a music school offering lessons. This project includes basic informations such as a Google map frame, contact and lessons informations.`,
      goal: `The goal of this project was to make a first project including HTML, CSS, and Javascript.`,
    },
    code: {
      live: 'https://greenflag31.github.io/Music-School',
      github: 'https://github.com/GreenFlag31/Music-School',
    },
  };
  project: project = {
    pros: {
      arg1: 'A deeper understanding of HTML, CSS, JS',
      arg2: 'Responsive dynamical carousel',
      arg3: 'Functional Programming',
      arg4: 'Better understanding of HTML structure',
    },
    cons: {
      arg1: 'Use of meaningful HTML semantics',
      arg2: 'Mobile first approach',
      arg3: 'HTML, CSS, JS',
    },
  };
  navigation: navigation = {
    previous: {
      name: 'Previous project: EcoActions',
      link: '../EcoActions-project',
    },
    next: {
      name: 'Next project: Demand',
      link: '../Demand-project',
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
