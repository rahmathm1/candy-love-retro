import { Component, OnInit } from '@angular/core';

import { MemberService } from "../member.service";
import { Member } from "../member.model";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  public members: Member[];
  public member: string;

  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.members = this.memberService.get();
  }

  add() {
    if(this.member.trim().length == 0) return
    this.members = this.memberService.add(this.member);
    this.member = "";
  }

  remove(name: string) {
    if(!confirm("Are you sure?")) return;
    this.members = this.memberService.remove(name);
  }

  shuffle() {
    if(!confirm("Are you sure?")) return;
    this.members = this.memberService.shuffle();
  }

}
