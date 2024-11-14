import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.scss'],
  standalone: true,
  imports: [NgOptimizedImage]
})
export class CentroComponent {
  public routingService = inject(RoutingService);
}
