import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-entry-title',
  templateUrl: './entry-title.component.html',
  styleUrls: ['./entry-title.component.scss']
})
export class EntryTitleComponent implements OnInit {

  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }
  
}