import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.f.switch.element', () => import('./SwitchElement'));
