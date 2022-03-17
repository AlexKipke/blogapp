import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogEntryComponent } from './blog-list/blog-entry/blog-entry.component';
import { EntryTitleComponent } from './blog-list/blog-entry/entry-title/entry-title.component';
import { EntryAuthorComponent } from './blog-list/blog-entry/entry-author/entry-author.component';
import { EntryDateComponent } from './blog-list/blog-entry/entry-date/entry-date.component';
import { EntryTextComponent } from './blog-list/blog-entry/entry-text/entry-text.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogHeaderComponent,
    BlogListComponent,
    BlogEntryComponent,
    EntryTitleComponent,
    EntryAuthorComponent,
    EntryDateComponent,
    EntryTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
