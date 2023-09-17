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
  projectsData: projectData[] = [
    {
      img: {
        src: '../../assets/projects-img/food-app.jpg',
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
        src: '../../assets/projects-img/car.jpg',
        alt: 'Red 911 Porsche',
      },
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
      name: 'Roadster API',
      date: 'May 2023',
      description: `Roadster API is a REST API with authentication I have created about historical cars.`,
      links: {
        general: './roadster-api-project',
        live: 'https://historicalcars-api.com',
        github: 'https://github.com/GreenFlag31/car-api',
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
        src: '../../assets/projects-img/coffee1.jpg',
        alt: 'A coffee on a table',
      },
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
      name: 'Coffee API',
      date: 'April 2023',
      description: `Coffee API is a REST API I have created about different types of coffee.`,
      links: {
        general: './coffee-api-project',
        live: 'https://coffeeapi-doc.com',
        github: 'https://github.com/GreenFlag31/coffeeAPI',
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
      name: 'Other projects',
      date: 'Dec. 2022 -> April 2023',
      description: `Other projects regroups on a single page two projects from a training and more info about this portfolio.`,
      category: '#other-projects',
      links: {
        general: './other-projects',
      },
    },
  ];

  constructor(private scrollToTop: ScrollToTopService) {}

  log() {
    console.log('click');
  }

  ngOnInit() {
    this.scrollToTop.scrollToTopWithDelay();
  }
}
