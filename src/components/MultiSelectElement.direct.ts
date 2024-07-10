import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.f.multi.select.element', () => import('./MultiSelectElement'));
