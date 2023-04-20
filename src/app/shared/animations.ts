import {
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
  animation,
  useAnimation,
} from '@angular/animations';

const startStyle = animation([
  style({ position: 'relative' }),
  query(
    ':enter, :leave',
    [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ],
    { optional: true }
  ),
]);

const animateStartStyle = animation([
  query(':enter', [style({ transform: 'translateX({{startingLeft}})' })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate(
        '300ms ease-out',
        style({ transform: 'translateX({{leavingLeft}})' })
      ),
    ]),
    query(':enter', [
      animate('300ms ease-out', style({ transform: 'translateX(0)' })),
    ]),
  ]),
]);

export const routesAnimation = trigger('routeAnimations', [
  transition('food-app => eco-actions', [
    useAnimation(startStyle),

    useAnimation(animateStartStyle, {
      params: {
        startingLeft: '100%',
        leavingLeft: '-100%',
      },
    }),
  ]),
  transition('eco-actions => coffee-api', [
    useAnimation(startStyle),

    useAnimation(animateStartStyle, {
      params: {
        startingLeft: '100%',
        leavingLeft: '-100%',
      },
    }),
  ]),
  transition('coffee-api => music-school', [
    useAnimation(startStyle),

    useAnimation(animateStartStyle, {
      params: {
        startingLeft: '100%',
        leavingLeft: '-100%',
      },
    }),
  ]),
  transition('music-school => demand', [
    useAnimation(startStyle),

    useAnimation(animateStartStyle, {
      params: {
        startingLeft: '100%',
        leavingLeft: '-100%',
      },
    }),
  ]),
  transition('demand => calculator', [
    useAnimation(startStyle),

    useAnimation(animateStartStyle, {
      params: {
        startingLeft: '100%',
        leavingLeft: '-100%',
      },
    }),
  ]),
  transition('calculator => game', [
    useAnimation(startStyle),

    useAnimation(animateStartStyle, {
      params: {
        startingLeft: '100%',
        leavingLeft: '-100%',
      },
    }),
  ]),
  transition('game => this-portfolio', [
    useAnimation(startStyle),

    useAnimation(animateStartStyle, {
      params: {
        startingLeft: '100%',
        leavingLeft: '-100%',
      },
    }),
  ]),
  transition('this-portfolio => game', [
    useAnimation(startStyle),

    useAnimation(animateStartStyle, {
      params: {
        startingLeft: '-100%',
        leavingLeft: '100%',
      },
    }),
  ]),
  transition('game => calculator', [
    useAnimation(startStyle),

    useAnimation(animateStartStyle, {
      params: {
        startingLeft: '-100%',
        leavingLeft: '100%',
      },
    }),
  ]),
  transition('calculator => demand', [
    useAnimation(startStyle),

    useAnimation(animateStartStyle, {
      params: {
        startingLeft: '-100%',
        leavingLeft: '100%',
      },
    }),
  ]),
  transition('demand => music-school', [
    useAnimation(startStyle),

    useAnimation(animateStartStyle, {
      params: {
        startingLeft: '-100%',
        leavingLeft: '100%',
      },
    }),
  ]),
  transition('music-school => coffee-api', [
    useAnimation(startStyle),

    useAnimation(animateStartStyle, {
      params: {
        startingLeft: '-100%',
        leavingLeft: '100%',
      },
    }),
  ]),
  transition('coffee-api => eco-actions', [
    useAnimation(startStyle),

    useAnimation(animateStartStyle, {
      params: {
        startingLeft: '-100%',
        leavingLeft: '100%',
      },
    }),
  ]),
  transition('eco-actions => food-app', [
    useAnimation(startStyle),

    useAnimation(animateStartStyle, {
      params: {
        startingLeft: '-100%',
        leavingLeft: '100%',
      },
    }),
  ]),

  transition('* <=> *', [
    useAnimation(startStyle),

    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(':leave', [animate('400ms ease-in-out', style({ opacity: 0 }))], {
      optional: true,
    }),
    query(':enter', [animate('400ms ease-in-out', style({ opacity: 1 }))], {
      optional: true,
    }),
    query('@*', animateChild(), {
      optional: true,
    }),
  ]),
]);

const downGenericAnimation = animation([
  style({ opacity: 0, transform: 'translateY(-20%)' }),
  animate(
    '{{time}} ease-out',
    style({ opacity: 1, transform: 'translateY(0)' })
  ),
]);

export const selfPic = trigger('down', [
  transition(':enter', [
    useAnimation(downGenericAnimation, {
      params: {
        time: '0.5s',
      },
    }),
  ]),
]);

export const title = trigger('right', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-30%)' }),
    animate(
      '0.6s 0.3s ease-out',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ]),
]);
