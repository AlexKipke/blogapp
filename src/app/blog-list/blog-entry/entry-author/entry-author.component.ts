import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-entry-author',
  templateUrl: './entry-author.component.html',
  styleUrls: ['./entry-author.component.scss']
})
export class EntryAuthorComponent implements OnInit {

  @Input() author: string;

  constructor() { }

  ngOnInit(): void {
  }

}
