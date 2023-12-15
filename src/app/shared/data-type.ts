export interface description {
  introduction: {
    title: string;
    img: {
      src: string;
      alt: string;
    };
    date: string;
    coding: {
      [language: string]: {
        [src: string]: string;
      };
    };
  };
  text: {
    description: string;
    goal: string;
  };
  code: {
    live?: string;
    github?: string;
  };
}

export interface project {
  pros: {
    [arg: string]: string;
  };
  cons: {
    [arg: string]: string;
  };
}

export interface navigation {
  previous?: {
    name: string;
    link: string;
  };
  next?: {
    name: string;
    link: string;
  };
}

export interface projectData {
  img: {
    src: string;
    alt: string;
  };
  coding: {
    [language: string]: {
      [src: string]: string;
    };
  };
  name: string;
  date: string;
  description: string;
  category?: string;
  links: {
    general: string;
    live?: string;
    github?: string;
  };
}
