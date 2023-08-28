/** Angular Imports. */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

/** Client Services. */
import { ClientsService } from 'app/clients/clients.service';

@Component({
  selector: 'mifosx-create-self-service-user',
  templateUrl: './create-self-service-user.component.html',
  styleUrls: ['./create-self-service-user.component.scss']
})
export class CreateSelfServiceUserComponent implements OnInit {

  createSelfServiceForm: FormGroup;
  clientData: any;
  hidePasswordField = true;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private clientService: ClientsService,
              private router: Router) {
    this.route.data.subscribe((data: { clientActionData: any}) => {
      this.clientData = data.clientActionData;
    });
  }

  ngOnInit(): void {
    this.createSelfServiceUser();
    this.sendPasswordToEmailChange();
  }

  /**
   * Send Password To Email Change.
   */
  sendPasswordToEmailChange() {
    this.createSelfServiceForm.controls.sendPasswordToEmail.valueChanges.subscribe((value: any) => {
      if (value === true) {
        this.hidePasswordField = true;
        this.createSelfServiceForm.removeControl('password');
        this.createSelfServiceForm.removeControl('repeatPassword');
      } else {
        this.hidePasswordField = false;
        this.createSelfServiceForm.addControl('password', new FormControl('', [Validators.required]));
        this.createSelfServiceForm.addControl('repeatPassword', new FormControl('', [Validators.required, this.confirmPassword('password')]));
      }
    });
  }

  /**
   * Create Self User Form.
   */
  createSelfServiceUser() {
    this.createSelfServiceForm = this.formBuilder.group({
      'username': new FormControl('', [Validators.required]),
      'firstname': new FormControl(this.clientData.firstname, [Validators.required]),
      'lastname': new FormControl(this.clientData.lastname, [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'sendPasswordToEmail': new FormControl(true),
      'passwordNeverExpires': new FormControl(false),
      'status': new FormControl({value: this.clientData.subStatus.active ? 'Active' : 'Inactive', disabled: true})
    });
  }

  /**
   * Submit form.
   */
  submit() {
    if (!this.createSelfServiceForm.get('passwordNeverExpires').value) {
      this.createSelfServiceForm.removeControl('passwordNeverExpires');
    }
    const clientId = this.clientData.id.toString();
    const selfServiceForm = this.createSelfServiceForm.value;
    selfServiceForm.roles = [2],
    selfServiceForm.isSelfServiceUser = true;
    selfServiceForm.staffId = this.clientData.staffId;
    selfServiceForm.clients = [clientId];
    selfServiceForm.officeId = this.clientData.officeId;
    this.clientService.createSelfServiceUser(selfServiceForm).subscribe(() => {
      this.router.navigate(['../../general'], { relativeTo: this.route });
    });
  }

  /**
   * Confirm Change Password of Users
   * @param controlNameToCompare Form Control Name to be compared.
   */
  confirmPassword(controlNameToCompare: string): ValidatorFn {
    return (c: AbstractControl): ValidationErrors|null => {
        if (c.value == null || c.value.length === 0) {
            return null;
        }
        const controlToCompare = c.root.get(controlNameToCompare);
        if (controlToCompare) {
            const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
                c.updateValueAndValidity();
                subscription.unsubscribe();
            });
        }
        return controlToCompare && controlToCompare.value !== c.value ? {'notequal': true} : null;
    };
  }

}
