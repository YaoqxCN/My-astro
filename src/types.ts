export interface Post {
    data: {
      [x: string]: any;
      title: string;
      image: string;
      desc: string;
      date: string;
      badge: string;
      categories: string[];
      tags: string[];
    };
    slug: string;
  }
  
  export interface Page {
    url: {
      prev?: string;
      next?: string;
    };
    data: Post[];
    total: number;
    size: number;
    current: string;
  }
  
  export interface CardInfo {
    title: string;
    image?: string;
    date?: string;
    badge?: string;
    categories?: string[];
    tags?: string[];
    word?: string;
    time?: string;
    isBlog: boolean;
    url?: string;
  }
  
  export interface EnvelopeInfo {
    title: string;
    desc: string;
    image?: string;
    date?: string;
    badge?: string;
    categories?: string[];
    tags?: string[];
    word?: string;
    time?: string;
    isBlog: boolean;
    url: string;
  }