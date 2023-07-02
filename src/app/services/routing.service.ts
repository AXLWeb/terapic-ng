import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  /**
   * Router declaration
   */
  public router = inject(Router);
  /**
   * Navigates to clicked page
   * @param page name
   */
  public navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
