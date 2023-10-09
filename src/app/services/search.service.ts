import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  search(data: string[], searchText: string): string[] {
    if (data.length === 0 || this.isEmpty(searchText)) {
      return [];
    }

    const sanitizedData = this.removeEmptyValues(data);

    return this.filterDataBySeachText(sanitizedData, searchText);
  }

  private removeEmptyValues(arr: string[]): string[] {
    return arr.filter((item) => !this.isEmpty(item));
  }

  private isEmpty(value: string): boolean {
    return value.trim().length === 0;
  }

  private toLowerCase(value: string): string {
    return value.toLowerCase();
  }

  private filterDataBySeachText(data: string[], searchText: string): string[] {
    return data.filter((item) => {
      return this.toLowerCase(item).includes(this.toLowerCase(searchText));
    });
  }
}
