/* 
 * Angular
 */
import {
  Component
} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

/* 
 * We're using Webpack to load our CSS which is why we use `require` instead of
 * `import` here
 */
require('../css/styles.css');
require('../css/semantic.min.css');
require('../images/ng-book-2-minibook.png');
require('../images/favicon-32x32.png');
require('../images/favicon.ico');

/* 
 * Our Demos
 */
import {DemoFormSku} from './forms/demo_form_sku';
import {DemoFormSkuBuilder} from "./forms/demo_form_sku_with_builder";
import {DemoFormWithExplicitValidations} from "./forms/demo_form_with_explicit_validations";
import {DemoFormWithShorthandValidations} from "./forms/demo_form_with_shorthand_validations";
import {DemoFormWithCustomValidations} from "./forms/demo_form_with_custom_validations";

/*
 * Webpack
 */
@Component({
  selector: 'forms-demo-app',
  directives: [DemoFormSku, DemoFormSkuBuilder, DemoFormWithExplicitValidations, DemoFormWithShorthandValidations, DemoFormWithCustomValidations],
  template: `
    <div>
      <demo-form-sku></demo-form-sku>
      <demo-form-sku-builder></demo-form-sku-builder>
      <demo-form-with-explicit-validations></demo-form-with-explicit-validations>
      <demo-form-with-shorthand-validations></demo-form-with-shorthand-validations>
      <demo-form-with-custom-validations></demo-form-with-custom-validations>
    </div>
  `
})
class FormsDemoApp {
}

bootstrap(FormsDemoApp);
