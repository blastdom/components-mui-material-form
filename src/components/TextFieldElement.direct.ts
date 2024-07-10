import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.f.text.field.element', () => import('./TextFieldElement'));
