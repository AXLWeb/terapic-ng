import { Component, inject } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'tecnicas',
  templateUrl: './tecnicas.component.html',
  styleUrls: ['./tecnicas.component.css'],
})
export class TecnicasComponent {
  public routingService = inject(RoutingService);
}
