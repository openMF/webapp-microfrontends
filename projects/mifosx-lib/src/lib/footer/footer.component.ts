/** Angular Imports */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alert } from '@mifosx-lib/core/alert/alert.model';
import { AlertService } from '@mifosx-lib/core/alert/alert.service';
import { AuthenticationService } from '@mifosx-lib/core/authentication/authentication.service';
import { Dates } from '@mifosx-lib/core/utils/dates';
import { SettingsService } from '@mifosx-lib/settings/settings.service';
import { MifosxLibService } from '../../public-api';
import { GlobalConfigurationService } from '@fineract-lib';
import { BusinessDateManagementService } from '@fineract-lib';
/** Environment Configuration */
import { environment } from '../../environments/environment';
import { Subscription } from 'rxjs';

/**
 *  Footer component.
 */
@Component({
  selector: 'mifosx-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  /** Mifos X version. */
  versions: any = {
    mifos: environment.version,
    fineract: {
      version: '',
      hash: ''
    }
  };
  /** Mifos X hash */
  hash: string = environment.hash;
  server = '';
  /** Business Date */
  businessDate: Date = null;

  isBusinessDateEnabled = false;
  isBusinessDateDefined = false;
  /** Subscription to alerts. */
  alert$: Subscription;
  timer: any;

  displayBackEndInfo = true;

  constructor(
    private globalConfigurationService: GlobalConfigurationService,
    private businessDateManagementService: BusinessDateManagementService,
    private settingsService: SettingsService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private dateUtils: Dates,
    private mifosxLibService: MifosxLibService) {
    this.displayBackEndInfo = (environment.displayBackEndInfo === 'true');
  }

  ngOnInit() {
    if (this.displayBackEndInfo) {
      this.alert$ = this.alertService.alertEvent.subscribe((alertEvent: Alert) => {
        const alertType = alertEvent.type;
        if (alertType === SettingsService.businessDateType + ' Set Config') {
          this.isBusinessDateEnabled = (alertEvent.message === 'enabled') ? true : false;
          this.isBusinessDateDefined = false;
          if (this.isBusinessDateEnabled) {
            this.setBusinessDate();
          }
        } else if (alertType === SettingsService.businessDateType + ' Set') {
          if (this.isBusinessDateEnabled) {
            this.setBusinessDate();
          }
        } else if (alertType === 'Authentication Start') {
          this.timer = setTimeout(() => { this.getConfigurations(); }, 60000);
        }
      });
      this.getConfigurations();
      this.server = this.settingsService.server;
      this.mifosxLibService.getBackendInfo().subscribe((data: any) => {
        const buildVersion: string = data.git.build.version.split('-');
        this.versions.fineract.version = buildVersion[0];
        this.versions.fineract.hash = buildVersion[1];
      });
    }
  }

  ngOnDestroy() {
    if (this.displayBackEndInfo) {
      clearTimeout(this.timer);
    }
  }

  /**
   * Get the Configuration for Business Date
   */
  getConfigurations(): void {
    if (this.authenticationService.isAuthenticated()) {
      this.globalConfigurationService.retrieveOneByName(SettingsService.businessDateConfigName)
        .subscribe((configurationData: any) => {
          this.isBusinessDateEnabled = configurationData.enabled;
          this.settingsService.setBusinessDateConfig(configurationData.enabled);
          if (this.isBusinessDateEnabled) {
            this.setBusinessDate();
            this.timer = setTimeout(() => { this.getConfigurations(); }, 60000);
          }
        });
    } else {
      clearTimeout(this.timer);
    }
  }

  /**
   * Get the Business Date data
   */
  setBusinessDate(): void {
    this.businessDateManagementService.getBusinessDate(SettingsService.businessDateType)
      .subscribe((data: any) => {
        this.businessDate = new Date(data.date);
        this.settingsService.setBusinessDate(this.dateUtils.formatDate(this.businessDate, SettingsService.businessDateFormat));
        this.isBusinessDateDefined = true;
      });
  }
}
