import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.f.checkbox.element', () => import('./CheckboxElement'));
