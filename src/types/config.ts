export type Config = {
   allowedRoles: string[];
   aml: string;
   balancesFetchInterval: string;
   captchaLogin: string;
   captcha_id: string;
   captcha_type: string;
   devMode: string;
   finex: string;
   gaTrackerKey: string;
   incrementalOrderBook: string;
   isDraggable: string;
   isResizable: string;
   kycSteps: string[];
   labelSwitcher: LabelSwitcher[];
   languages: string[];
   minutesBeforeWarningMessage: string;
   minutesUntilAutoLogout: string;
   msAlertDisplayTime: string;
   passwordEntropyStep: string;
   password_min_entropy: string;
   peatio_platform_currency: string;
   plugins: any[];
   rangerReconnectPeriod: string;
   roleTypes: RoleType[];
   sentryEnabled: string;
   sessionCheckInterval: string;
   showLanding: string;
   tablePageLimit: string;
   uploadMaxSize: number;
   uploadMinSize: number;
   usernameEnabled: string;
   withCredentials: string;
   wizard_step: string;
};

type LabelSwitcher = {
   label: Label[];
   name: string;
   require_doc?: string;
};

type Label = {
   email?: string;
   document?: string;
};

type RoleType = {
   key: string;
   value: string;
};
