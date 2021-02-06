import { Field, validateField } from './field'; 

export type FieldValue = { 
   source_field_id: string, 
   sourc_field_type: string, // Possible values = ["plain-text", "email-text", "single-select-dropdown", "boolean", "file"] 
   selected_value: string,  
}

export function validateFieldValue(arg: FieldValue | any): arg is FieldValue { 
    if (!arg) { 
        return false; 
    }

    const validateSelectedValue = typeof arg.selected_value === "string"; 
    const validateSourceFieldId = typeof arg.source_field_id === "string"; 
    const validateSourceFieldType = typeof arg.source_field_type === "string"; 

    return validateSelectedValue && validateSourceFieldId && validateSourceFieldType; 
}