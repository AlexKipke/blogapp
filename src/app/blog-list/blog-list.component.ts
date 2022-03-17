import { Component, Input, OnInit } from '@angular/core';
import { IBlogEntry } from '../model/blog-entry.interface';

@Component({
  selector: 'blog-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  @Input() blogList: IBlogEntry[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.blogList)
  }

}
