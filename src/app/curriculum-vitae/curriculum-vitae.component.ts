import { Component, OnInit } from '@angular/core';
import { ScrollToTopService } from '../shared/scroll-to-top.service';
import { projectData } from '../shared/data-type';
import { selfPic, title } from '../shared/animations';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css'],
  animations: [selfPic, title],
})
export class CurriculumVitaeComponent implements OnInit {
  currentYear = new Date().getFullYear();
  projectsData: projectData[] = [
    {
      img: {
        src: '../../assets/projects-img/food-app.png',
        alt: 'Image of food plate',
      },
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
      name: 'Food-App',
      date: 'March 2023',
      description: `This app lets you manage your food products. Never waste food
      again !`,
      links: {
        general: './food-app-project',
        live: 'https://my-list-a7fb0.web.app/getting-started',
        github: 'https://github.com/GreenFlag31/food-manager',
      },
    },
    {
      img: {
        src: '../../assets/projects-img/earth.png',
        alt: 'Landing page of a project',
      },
      coding: {
        language1: {
          src: '../../assets/Javascript.png',
          title: 'Javascript',
        },
        language2: {
          src: '../../assets/HTML5.png',
          title: 'HTML5',
        },
        language3: {
          src: '../../assets/CSS3.png',
          title: 'CSS3',
        },
      },
      name: 'EcoActions',
      date: 'Sept. 2022',
      description: `EcoActions is a one page project about all little actions we can undertake to fight climate change.`,
      links: {
        general: './eco-actions-project',
        live: 'https://greenflag31.github.io/EcoActions',
        github: 'https://github.com/GreenFlag31/EcoActions',
      },
    },
    {
      img: {
        src: '../../assets/projects-img/musicSchool.png',
        alt: 'Landing page of a project',
      },
      coding: {
        language1: {
          src: '../../assets/Javascript.png',
          title: 'Javascript',
        },
        language2: {
          src: '../../assets/HTML5.png',
          title: 'HTML5',
        },
        language3: {
          src: '../../assets/CSS3.png',
          title: 'CSS3',
        },
      },
      name: 'Music School',
      date: 'August 2022',
      description: `MusicSchool is a two pages project about a Music School offering lessons.`,
      links: {
        general: './music-school-project',
        live: 'https://greenflag31.github.io/Music-School',
        github: 'https://github.com/GreenFlag31/Music-School',
      },
    },
    {
      img: {
        src: '../../assets/projects-img/leasing.png',
        alt: 'Image of login page',
      },
      coding: {
        language1: {
          src: '../../assets/Javascript.png',
          title: 'Javascript',
        },
        language2: {
          src: '../../assets/HTML5.png',
          title: 'HTML5',
        },
        language3: {
          src: '../../assets/CSS3.png',
          title: 'CSS3',
        },
      },
      name: 'Demand',
      date: 'Nov. 2022',
      description: `This project is about a fictive company in the finance sector managing leasing demands.`,
      links: {
        general: './demand-project',
        live: 'https://greenflag31.github.io/demand',
        github: 'https://github.com/GreenFlag31/demand',
      },
    },
    {
      img: {
        src: '../../assets/projects-img/calculator.png',
        alt: 'Image of a calculator',
      },
      coding: {
        language1: {
          src: '../../assets/Javascript.png',
          title: 'Javascript',
        },
        language2: {
          src: '../../assets/HTML5.png',
          title: 'HTML5',
        },
        language3: {
          src: '../../assets/CSS3.png',
          title: 'CSS3',
        },
      },
      name: 'Calculator',
      date: 'Dec. 2022',
      description: `Calculator is a one page project presenting a non-scientific calculator to handle simple computations.`,
      links: {
        general: './calculator-project',
        live: 'https://greenflag31.github.io/calculator',
        github: 'https://github.com/GreenFlag31/calculator',
      },
    },
    {
      img: {
        src: '../../assets/projects-img/game.png',
        alt: 'Image of a the Chrome console',
      },
      coding: {
        language1: {
          src: '../../assets/Javascript.png',
          title: 'Javascript',
        },
        language2: {
          src: '../../assets/HTML5.png',
          title: 'HTML5',
        },
      },
      name: 'Game',
      date: 'Dec. 2022',
      description: `Game is a one page project and is meant to be played and started in the console.`,
      links: {
        general: './game-project',
        live: 'https://greenflag31.github.io/JS-game',
        github: 'https://github.com/GreenFlag31/JS-game',
      },
    },
    {
      img: {
        src: '../../assets/projects-img/developer.jpg',
        alt: 'Picture of a sunny desktop',
      },
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
      name: 'This portfolio',
      date: 'April 2023',
      description: `Want to know more information about this website ?`,
      links: {
        general: './this-portfolio',
        github: 'https://github.com/GreenFlag31/Portfolio',
      },
    },
  ];
  counter = 0;
  totalProjectsSlide = this.projectsData.length;
  numberBullets = [...Array(this.totalProjectsSlide).keys()];

  constructor(private scrollToTop: ScrollToTopService) {}

  ngOnInit() {
    console.log('test deploy 4');

    this.scrollToTop.scrollToTopWithDelay();
  }

  onPreviousProject(projects: HTMLDivElement) {
    if (this.counter <= 0) return;

    this.counter -= 1;
    const currentSlide = (this.counter / this.totalProjectsSlide) * 100;
    projects.style.transform = `translate3d(-${currentSlide}%, 0px, 0px)`;
  }

  onNextProject(projects: HTMLDivElement) {
    if (this.counter >= this.totalProjectsSlide - 1) return;

    this.counter += 1;
    const currentSlide = (this.counter / this.totalProjectsSlide) * 100;
    projects.style.transform = `translate3d(-${currentSlide}%, 0px, 0px)`;
  }
}
