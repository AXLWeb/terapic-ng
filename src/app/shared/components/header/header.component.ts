import { Component } from '@angular/core';
import { NavigationItem } from 'src/app/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public activeLink: string = '';

  public navigationItems: NavigationItem[] = [
    { label: 'Terapic', link: '#intro' },
    { label: 'Áreas de tratamiento', link: '#tratamiento' },
    { label: 'Técnicas', link: '#tecnicas' },
    { label: 'Centro', link: '#centro' },
    { label: 'Contacto', link: '#contacto' },
  ];

  public setActiveLink(link: string) {
    this.activeLink = link;
  }
}
