import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public candies = [
    {
      color: "Red",
      talkAbout: "One thing that you love about your job."
    },
    {
      color: "Yellow",
      talkAbout: "A life goal you are working on."
    },
    {
      color: "Green",
      talkAbout: "Your favorite book or movie."
    },
    {
      color: "Purple",
      talkAbout: "Favorite way to revive yourself during the workday.."
    },
    {
      color: "Blue",
      talkAbout: "One stressful thing about your job you wish you could improve."
    },
    {
      color: "Orange",
      talkAbout: "Your favorite food. Everyone loves food."
    },
    {
      color: "Colourful",
      talkAbout: "Any topic in the list."
    }
  ];

  ngOnInit() {
    
  }
}
