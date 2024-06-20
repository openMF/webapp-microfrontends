import { FormfieldBase } from "./formfield-base";

export class InputBase extends FormfieldBase {

  override controlType = 'input';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || 'text';
  }

}
