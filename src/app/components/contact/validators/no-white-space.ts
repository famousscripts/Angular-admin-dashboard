
import { AbstractControl } from '@angular/forms';

export function nospaceValidator(control: AbstractControl): { [key: string]: any } | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { nowhiteSpace: {'whitespace': true }  };
}