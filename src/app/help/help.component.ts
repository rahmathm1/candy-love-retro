import { Component, OnInit } from '@angular/core';

import { TopicService } from "../topic.service";
import { Topic } from "../topic.model";

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  public topics: Topic[];

  constructor(
    private topicService: TopicService
  ) { }

  ngOnInit() {
    this.topics = this.topicService.get();
  }

}
