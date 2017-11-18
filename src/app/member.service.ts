import { Injectable } from '@angular/core';

import { Member } from "./member.model";

@Injectable()
export class MemberService {

  private KEY: string = "members"

  constructor() { }

  get(): Member[] {
    let members = new Array<Member>();
    let strMembers = localStorage.getItem(this.KEY);
    if(strMembers)
      members = JSON.parse(strMembers);
    return members;
  }

  add(name: string): Member[] {
    var members: Member[] = this.get();
    members.push(new Member(name));
    localStorage.setItem(this.KEY, JSON.stringify(members));
    return members;
  }

  setStatus(name: string, status: Boolean): Member[] {
    var members: Member[] = this.get();
    var member = members.find(member => {
      return member.name == name;
    });
    member.completed = status;
    localStorage.setItem(this.KEY, JSON.stringify(members));
    return members;
  }

  remove(name: string): Member[] {
    var members: Member[] = this.get();
    members = members.filter(member => {
      return member.name != name;
    });
    localStorage.setItem(this.KEY, JSON.stringify(members));
    return members;
  }

  shuffle (): Member[] {
    var members: Member[] = this.get();
    for (var i = members.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = members[i];
        members[i] = members[j];
        members[j] = temp;
    }
    localStorage.setItem(this.KEY, JSON.stringify(members));
    return members;
  }

}
