import { BDomComponentProvider } from 'blastdom';

export const Definition: BDomComponentProvider = {
  name: "bdom.mui.material.form",
  description: "",
  version: "0.1.0",
  author: "Aurimas Niekis <aurimas@niekis.lt>",
  url: "https://github.com/blastdom/components-mui-material-form",
  source: "framjet",
  components: {
    'mui.m.f.autocomplete': () => import('./components/AutocompleteElement'),
    'mui.m.f.textfield': () => import('./components/TextFieldElement'),
    'mui.m.f.select': () => import('./components/SelectElement'),
    'mui.m.f.multi.select': () => import('./components/MultiSelectElement'),
    'mui.m.f.radio.button.group': () => import('./components/RadioButtonGroup'),
    'mui.m.f.checkbox.button.group': () => import('./components/CheckboxButtonGroup'),
    'mui.m.f.checkbox': () => import('./components/CheckboxElement'),
    'mui.m.f.switch': () => import('./components/SwitchElement'),
    'mui.m.f.password': () => import('./components/PasswordElement'),
    'mui.m.f.date.picker': () => import('./components/DatePickerElement'),
    'mui.m.f.date.time.picker': () => import('./components/DateTimePickerElement'),
    'mui.m.f.slider': () => import('./components/SliderElement'),
    'mui.m.f.toggle.button.group': () => import('./components/ToggleButtonGroupElement'),
  },
};

export default Definition;
