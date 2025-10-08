import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html'
})
export class NavbarComponent {
  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  handleNavClick(targetId: string, event: Event) {
    event.preventDefault();
    const offcanvasEl = document.getElementById('menuLateral');
    if (offcanvasEl && offcanvasEl.classList.contains('show')) {
      // Bootstrap instancia via data API
      // @ts-ignore
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl) || new (window as any).bootstrap.Offcanvas(offcanvasEl);
      bsOffcanvas.hide();
      // pequeno delay para rolar após fechar animação
      setTimeout(() => this.scrollToId(targetId), 280);
    } else {
      this.scrollToId(targetId);
    }
  }

  private scrollToId(id: string) {
    const el = document.getElementById(id.replace('#',''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // mover foco para acessibilidade
      if (!el.hasAttribute('tabindex')) {
        el.setAttribute('tabindex', '-1');
      }
      el.focus({ preventScroll: true });
    }
  }
}
