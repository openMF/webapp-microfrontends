import { FormfieldBase } from './formfield-base';

export class SelectBase extends FormfieldBase {

  override controlType = 'select';
  options: {
    label: string,
    value: string,
    data: {}[]
  };

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'];
  }

}
