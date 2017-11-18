import { Component, OnInit } from '@angular/core';

import { MemberService } from "../member.service";
import { Member } from "../member.model";

import { Topic } from "../topic.model";
import { TopicService } from "../topic.service";

@Component({
  selector: 'app-retro',
  templateUrl: './retro.component.html',
  styleUrls: ['./retro.component.css']
})
export class RetroComponent implements OnInit {

  public members: Member[];
  public showPickedCandy: boolean;
  public index: number = -1;
  public isPickingUp: boolean = false;

  public topics: Topic[];

  constructor(private memberService: MemberService, private topicService: TopicService) { }

  ngOnInit() {
    this.members = this.memberService.get();
    this.topics = this.topicService.get();
    this.nextMember();
  }

  undo(member) {
    member.turn = false;
    this.members = this.memberService.setStatus(member.name, false);
    this.nextMember();
  }

  completed(member: Member) {
    member.turn = false;
    this.members = this.memberService.setStatus(member.name, true);
    this.nextMember();
  }

  pickCandy() {
    this.isPickingUp = true;
    this.showPickedCandy = false;
    setTimeout(() => {
      this.isPickingUp = false;
      this.showPickedCandy = true;
      this.index = this.getRandomNumber(this.topics.length);
    }, 200)
  }

  getRandomNumber(max) {
    var random = Math.floor(Math.random() * max);
    while(random == this.index) random = Math.floor(Math.random() * max);
    return random;
  }

  nextMember() {
    let availableMembers = this.members.filter((member) => member.completed == false);
    if(availableMembers.length) {
      let index = this.getRandomNumber(availableMembers.length);
      availableMembers[index].turn = true;
    }
  }

}
