import { Component } from 'angular2/core';
import { CORE_DIRECTIVES,
         FORM_DIRECTIVES,
         FormBuilder,
         ControlGroup,
         Validators,
         AbstractControl} from 'angular2/common';

@Component({
    selector: 'demo-form-with-explicit-validations',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    template: `
    <div class="ui raised segment">
      <h2 class="ui header">Demo Form: Sku with explicity defined validations</h2>
      <form [ngFormModel]="skuForm" (ngSubmit)="onSubmit(skuForm.value)" class="ui form">

        <div class="field">
          <label for="skuInput">SKU</label>
          <input type="text" id="skuInput" placeholder="SKU" ngFormControl="skuForm.controls['sku']">
          <div *ngIf="!sku.valid" class="ui error message">SKU is invalid</div>
          <div *ngIf="sku.hasError('required')" class="ui error message">SKU is required</div>
        </div>

        <div *ngIf="!skuForm.valid" class="ui error message">Form is invalid</div>

        <button type="submit" class="ui button">Submit</button>
      </form>
    </div>
  `
})
export class DemoFormWithExplicitValidations {
    skuForm: ControlGroup;
    sku: AbstractControl;

    constructor(fb: FormBuilder) {
        this.skuForm = fb.group({
            'sku': ['', Validators.required]
        });

        this.sku = this.myForm.controls['sku'];
    }

    onSubmit(value: string): void {
        console.log('Submitted the form with value: ', value)
    }
}
