import { AbstractControl, ValidatorFn } from '@angular/forms';
import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneNumberUtil = PhoneNumberUtil.getInstance();

export class PhoneValidator {
    static validPhoneByCountry = (regionCode: string = undefined): ValidatorFn => {
        return (phoneControl: AbstractControl): { [key: string]: boolean } => {
            let validNumber = false;

            try {
                const phoneNumber = phoneNumberUtil.parseAndKeepRawInput(phoneControl.value, regionCode);
                validNumber = phoneNumberUtil.isValidNumber(phoneNumber);
            } catch (e) {
                return {
                    validPhoneByCountry: true
                };
            }

            return validNumber ? null : { validPhoneByCountry: true };
        };
    }
}