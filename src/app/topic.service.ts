import { Injectable } from '@angular/core';

import { Topic } from "./topic.model";

@Injectable()
export class TopicService {

  private KEY = "topics";

  public topics: Topic[] = [
    {
      color: "Red",
      description: "One thing that you love about your job."
    },
    {
      color: "Yellow",
      description: "A life goal you are working on."
    },
    {
      color: "Green",
      description: "Your favorite book or movie."
    },
    {
      color: "Purple",
      description: "Favorite way to revive yourself during the workday.."
    },
    {
      color: "Blue",
      description: "One stressful thing about your job you wish you could improve."
    },
    {
      color: "Orange",
      description: "Your favorite food. Everyone loves food."
    },
    {
      color: "Colourful",
      description: "Any topic in the list."
    }
  ];

  constructor() { }

  get(): Topic[] {
    let topics = new Array<Topic>();
    let strTopics = localStorage.getItem(this.KEY);
    if(strTopics)
      topics = JSON.parse(strTopics);
    return topics;
  }

  public restore() : Topic[] {
    localStorage.setItem(this.KEY, JSON.stringify(this.topics))
    return this.topics;
  }

  public hasStoredTopics() : boolean {
    var topics: Topic[] = this.get();
    return topics.length ? true: false;
  }

  save(topics: Topic[]): Topic[] {
    localStorage.setItem(this.KEY, JSON.stringify(this.topics))
    return topics;
  }

}
