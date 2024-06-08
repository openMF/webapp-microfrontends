import { FormfieldBase } from './formfield-base';

export class CheckboxBase extends FormfieldBase {
    override controlType = 'checkbox';

    constructor(options: any) {
        super(options);
    }

}
