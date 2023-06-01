import { AbstractControl } from "@angular/forms";

// Valida se a string está completamente em minúsculo;
export function minusculoValidator(control: AbstractControl) {
    const username = control.value as string;
    if(username !== username?.toLowerCase()) {
        return { minusculo: true };
    } else
    return null;
}
