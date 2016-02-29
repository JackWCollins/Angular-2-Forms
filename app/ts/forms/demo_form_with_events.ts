import { Component } from 'angular2/core';
import { CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    FormBuilder,
    ControlGroup,
    Validators,
    AbstractControl} from 'angular2/common';

@Component({
    selector: 'demo-form-with-events',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    template: `
    <div class="ui raised segment">
      <h2 class="ui header">Demo Form: Sku with explicity defined validations</h2>
      <form [ngFormModel]="skuForm" (ngSubmit)="onSubmit(skuForm.value)" class="ui form">

        <div class="field" [class.error]="!sku.valid && sku.touched">
          <label for="skuInput">SKU</label>
          <input type="text" id="skuInput" placeholder="SKU" ngFormControl="sku">

          <div *ngIf="!sku.valid" class="ui error message">SKU is invalid</div>
          <div *ngIf="sku.hasError('required')" class="ui error message">SKU is required</div>
          <div *ngIf="sku.hasError('invalidSku')" class="ui error message">SKU must being with <tt>123</tt></div>
        </div>

        <div *ngIf="!skuForm.valid" class="ui error message">Form is invalid</div>

        <button type="submit" class="ui button">Submit</button>
      </form>
    </div>
  `
})

export class DemoFormWithEvents {
    skuForm: ControlGroup;
    sku: AbstractControl;

    constructor(fb: FormBuilder) {

        this.skuForm = fb.group({
            'sku': ['', Validators.required]
        });

        this.sku = this.skuForm.controls['sku'];

        this.sku.valueChanges.subscribe(
            (value: string) => {
                console.log('sku changed to: ', value);
            }
        );

        this.skuForm.valueChanges.subscribe(
            (form: any) => {
                console.log('form changed to: ', form);
            }
        );
    }

    onSubmit(value: string): void {
        console.log('Submitted the form with value: ', value)
    }
}
