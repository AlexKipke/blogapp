import { Component, Input, OnInit } from '@angular/core';
import { IBlogEntry } from 'src/app/model/blog-entry.interface';

@Component({
  selector: 'blog-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss']
})
export class BlogEntryComponent implements OnInit {

  @Input() blogEntry: IBlogEntry;

  constructor() { }

  ngOnInit(): void {
    console.log(this.blogEntry);
  }

}
