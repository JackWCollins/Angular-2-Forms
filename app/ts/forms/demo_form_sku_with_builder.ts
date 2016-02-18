import { Component } from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup } from 'angular2/common';

@Component({
    selector: 'demo-form-sku-builder',
    directives: [FORM_DIRECTIVES],
    template: `
    <div class="ui raised segment">
      <h2 class="ui header">Demo Form: Sku with Form Builder</h2>
      <form [ngFormModel]="skuForm" (ngSubmit)="onSubmit(skuForm.value)" class="ui form">

        <div class="field">
          <label for="skuInput">SKU</label>
          <input type="text" id="skuInput" placeholder="SKU" ngFormControl="skuForm.controls['sku']">
        </div>

        <button type="submit" class="ui button">Submit</button>
      </form>
    </div>
  `
})
export class DemoFormSkuBuilder {
    skuForm: ControlGroup;

    constructor(fb: FormBuilder) {
        this.skuForm = fb.group({
            'sku': ['1234ABCD']
        });
    }

    onSubmit(value: string): void {
        console.log('Submitted the form with value: ', value)
    }
}
