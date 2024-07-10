import {
  comp,
  ProviderDefinition
} from '@blastdom/components-generator';

export default {
  name: 'bdom.mui.material.form',
  description: '',
  version: '0.1.0',
  author: 'Aurimas Niekis <aurimas@niekis.lt>',
  url: 'https://github.com/blastdom/components-mui-material-form',
  source: 'framjet',
  options: {
    importsPrefix: '',
    componentNamePrefix: 'mui.m.f.',
  },

  generators: {
    javaComponentName: (n) => `Mui${n}`,
    componentImportStatement: (n) => `import { ${n} } from 'react-hook-form-mui';`
  },
  components: [
    comp({ name: 'AutocompleteElement', useLazyLoad: false }),
    comp({ name: 'TextFieldElement', useLazyLoad: false }),
    comp({ name: 'SelectElement', useLazyLoad: false }),
    comp({ name: 'MultiSelectElement', useLazyLoad: false }),
    comp({ name: 'RadioButtonGroup', useLazyLoad: false }),
    comp({ name: 'CheckboxButtonGroup', useLazyLoad: false }),
    comp({ name: 'CheckboxElement', useLazyLoad: false }),
    comp({ name: 'SwitchElement', useLazyLoad: false }),
    comp({ name: 'PasswordElement', useLazyLoad: false }),
    comp({ name: 'DatePickerElement', useLazyLoad: false }),
    comp({ name: 'DateTimePickerElement', useLazyLoad: false }),
    comp({ name: 'SliderElement', useLazyLoad: false }),
    comp({ name: 'ToggleButtonGroupElement', useLazyLoad: false }),
  ],
} satisfies ProviderDefinition;
