import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Topic } from "../topic.model";
import { TopicService } from "../topic.service";

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TopicListComponent implements OnInit {

  public topics: Topic[];

  constructor(
    private topicService: TopicService
  ) { }

  ngOnInit() {
    this.topics = this.topicService.get();
  }

  save(){
    this.topicService.save(this.topics);
  }

  restore() {
    this.topics = this.topicService.restore();
  }

}
