import { Component } from '@angular/core';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  public logoUrl: string = '/assets/images/logoterapic2022.svg';
  public logoDescription: string = 'Logo de terapic centre';
}
