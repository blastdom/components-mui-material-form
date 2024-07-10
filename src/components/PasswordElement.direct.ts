import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.f.password.element', () => import('./PasswordElement'));
