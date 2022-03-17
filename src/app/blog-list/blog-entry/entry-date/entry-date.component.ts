import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-entry-date',
  templateUrl: './entry-date.component.html',
  styleUrls: ['./entry-date.component.scss']
})
export class EntryDateComponent implements OnInit {
  
  @Input() date: string;

  constructor() { }

  ngOnInit(): void {
  }

}

