import { Component } from 'angular2/core';
import { CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    FormBuilder,
    ControlGroup,
    Validators} from 'angular2/common';

@Component({
    selector: 'demo-form-with-ng-model',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    template: `
    <div class="ui raised segment">
      <h2 class="ui header">Demo Form: Product Form with NgModel</h2>
      <div class="ui info message">
        The product name is: {{ productName }}
      </div>

      <form [ngFormModel]="productForm" (ngSubmit)="onSubmit(productForm.value)" class="ui form">

        <div class="field">
          <label for="productNameInput">Product Name</label>
          <input type="text"
                 id="productNameInput"
                 placeholder="Product Name"
                 [ngFormControl]="productForm.find('productName')"
                 [(ngModel)]="productName">
        </div>

        <div *ngIf="!productForm.valid" class="ui error message">Form is invalid</div>

        <button type="submit" class="ui button">Submit</button>
      </form>
    </div>
  `
})
export class DemoFormWithNgModel {
    productForm: ControlGroup;
    productName: string;

    constructor(fb: FormBuilder) {
        this.productForm = fb.group({
            'productForm': ['', Validators.required]
        });
    }

    onSubmit(value: string): void {
        console.log('Submitted the form with value: ', value)
    }
}
