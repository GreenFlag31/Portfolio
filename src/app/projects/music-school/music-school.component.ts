import { Component, OnInit } from '@angular/core';
import { description, project, navigation } from '../../shared/data-type';
import { ScrollToTopService } from '../../shared/scroll-to-top.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-music-school',
  templateUrl: './music-school.component.html',
})
export class MusicSchoolComponent implements OnInit {
  description: description = {
    introduction: {
      title: 'Music School',
      img: {
        src: '../../assets/projects-img/musicSchool.png',
        alt: 'Landing page of a project',
      },
      date: `<span style='color:black'>August 2022</span>`,
      coding: {
        language1: {
          src: '../../assets/Javascript.png',
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
      name: 'Next project: Coffee API',
      link: '../coffee-api-project',
    },
    next: {
      name: 'Next project: Demand',
      link: '../demand-project',
    },
  };

  constructor(private scrollToTop: ScrollToTopService, private meta: Meta) {}

  ngOnInit() {
    this.meta.addTag({
      name: 'description',
      content: 'Web Developer - Manu Claeys - Portfolio - Project Music School',
    });
    this.scrollToTop.scroll();
  }
}
