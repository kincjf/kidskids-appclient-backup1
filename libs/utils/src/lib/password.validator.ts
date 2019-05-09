import { FormGroup } from '@angular/forms';

export class PasswordValidator {
    static samePassword(formGroup: FormGroup) {
        const password = formGroup.controls.password.value;
        const confirmPassword = formGroup.controls.confirm_password.value;

        if (confirmPassword.length <= 0) {
            return null;
        }

        if (confirmPassword !== password) {
            formGroup.controls.confirm_password.setErrors({
                samePassword: true
            });
            return {
                samePassword: true
            };
        }

        return null;
    }
}