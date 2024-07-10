import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.f.date.time.picker.element', () => import('./DateTimePickerElement'));
