import { Component, inject } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'tratamientos',
  templateUrl: './tratamientos.component.html',
  styleUrls: ['./tratamientos.component.scss'],
})
export class TratamientosComponent {
  public routingService = inject(RoutingService);
}
