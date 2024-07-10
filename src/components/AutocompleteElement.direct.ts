import { BDomComponentRegistry } from 'blastdom';

BDomComponentRegistry.registerLazy('mui.m.f.autocomplete.element', () => import('./AutocompleteElement'));
