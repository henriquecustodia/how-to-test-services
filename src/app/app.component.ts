import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from './services/search.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { map, startWith } from 'rxjs';

const books = ['Refactiong', 'Clean Code', 'Domain Driven Design'];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchService = inject(SearchService);

  inputControl = new FormControl();

  foundBooks = this.inputControl.valueChanges.pipe(
    map((value) => {
      const result = this.search(value);
      
      if (result.length === 0) {
        return books;
      } else {
        return result;
      }
    }),
    startWith(books),
  );

  private search(searchText: string) {
    return this.searchService.search(books, searchText);
  }
}
