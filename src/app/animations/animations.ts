import {
  trigger,
  animate,
  query,
  style,
  transition,
} from '@angular/animations';

/**
 * Animation fade on component entering & leaving
 */
export const fadeAnimation = trigger('fadeAnimation', [
  transition(' * => *', [
    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(
      ':leave',
      [style({ opacity: 1 }), animate('0.5s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))],
      { optional: true }
    ),
  ]),
]);
