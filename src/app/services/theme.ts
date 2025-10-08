import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkModeKey = 'darkMode';

  constructor() {
    const darkMode = localStorage.getItem(this.darkModeKey);
    if (darkMode === 'true') document.body.classList.add('dark-theme');
  }

  toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem(this.darkModeKey, String(isDark));
  }

  isDark(): boolean {
    return document.body.classList.contains('dark-theme');
  }
}
