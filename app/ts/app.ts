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
import {DemoFormSku} from
  './forms/demo_form_sku';

/*
 * Webpack
 */
@Component({
  selector: 'forms-demo-app',
  directives: [DemoFormSku],
  template: `
<div>
  <demo-form-sku></demo-form-sku>
</div>
  `
})
class FormsDemoApp {
}

bootstrap(FormsDemoApp);
