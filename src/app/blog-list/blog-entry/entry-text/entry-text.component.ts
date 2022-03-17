import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-entry-text',
  templateUrl: './entry-text.component.html',
  styleUrls: ['./entry-text.component.scss']
})
export class EntryTextComponent implements OnInit {
  
  @Input() blogText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
