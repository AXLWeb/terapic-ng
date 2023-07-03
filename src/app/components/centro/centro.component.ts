import { Component, inject } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.scss'],
})
export class CentroComponent {
  public routingService = inject(RoutingService);
}
