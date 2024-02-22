// home.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tutorials: { title: string; image: string; }[] | undefined;

  constructor() { }

  ngOnInit() {
    this.tutorials = [
      {
        title: 'Web MH ',
        image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155051/WebMH.png',
      },
      {
        title: 'Interview Experience ',
        image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420112859/IntExp.png',
      },
      {
        title: 'GeeksforGeeks Logo ',
        image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210419113249/gfg-new-logo-min.png',
      },
      {
        title: 'GeeksforGeeks Carnival ',
        image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210418122505/132_00_00_Mailheader-min.png',
      },
      {
        title: 'Python Course ',
        image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20211028203138/GeeksforGeeks-Python-Foundation-Course-Learn-Python-from-Scratch-in-Hindi.png',
      },
    ];
  }

}
