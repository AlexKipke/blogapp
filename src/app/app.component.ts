import { Component } from '@angular/core';
import { IBlogEntry } from './model/blog-entry.interface';

@Component({
  selector: 'blog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-app';

  blogList: IBlogEntry[] = [
    {
      title: 'Title Eintrag 1',
      text: 'Das ist der Text',
      author: 'Softconcis GMBH',
      date: '15.03.2022'
    }, 
    {
      title: 'Title Eintrag 2',
      text: 'Das ist der Text 2',
      author: 'Softconcis GMBH',
      date: '16.03.2022'
    }, 
  ];
}
