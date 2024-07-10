import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.f.date.picker.element', () => import('./DatePickerElement'));
