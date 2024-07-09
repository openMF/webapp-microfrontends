import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

import { FormfieldBase } from './model/formfield-base';
import { CheckboxBase } from './model/checkbox-base';
import { DatepickerBase } from './model/datepicker-base';
import { DateTimepickerBase } from './model/datetimepicker-base';
import { InputBase } from './model/input-base';
import { SelectBase } from './model/select-base';

@Component({
  selector: 'mifosx-formfield',
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.scss']
})
export class FormfieldComponent implements OnInit {

  @Input() form: UntypedFormGroup;
  @Input() formfield: FormfieldBase;

  constructor() { }

  ngOnInit() { }

  isDatepickerBase(formfield: FormfieldBase): formfield is DatepickerBase {
    return formfield.controlType === 'datepicker';
  }

  isDateTimepickerBase(formfield: FormfieldBase): formfield is DateTimepickerBase {
    return formfield.controlType === 'datetimepicker';
  }

  isInputBase(formfield: FormfieldBase): formfield is InputBase {
    return formfield.controlType === 'input';
  }

  isSelectBase(formfield: FormfieldBase): formfield is SelectBase {
    return formfield.controlType === 'select';
  }
  
}
