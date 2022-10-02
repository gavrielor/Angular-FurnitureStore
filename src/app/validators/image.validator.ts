import { AbstractControl, ValidationErrors } from "@angular/forms";

export function imageValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;
    return (value.endsWith('.jpeg') || value.endsWith('.png') || value.endsWith('.jpg')) ? null : { imageValidator: { value: value } };
};