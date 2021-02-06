import { FieldValue, validateFieldValue } from './fieldValue'; 

export type Submission = { 
    id: string, 
    form_id: string, 
    timestamp: string, 
    field_values: Array<FieldValue> 
}


export function validateSubmission(arg: Submission | any): arg is Submission { 
    if (!arg) { 
        return false; 
    }
    const validateId = typeof arg.id === "string"; 
    const validateFormId = typeof arg.form_id === "string"; 
    const timestamp = typeof arg.timestamp === "string"; 
    
    function validateAllFieldValues(): boolean { 
        const fieldValues = arg.field_values; 
        if (!fieldValues) { 
            return false;
        } else if (!Array.isArray(fieldValues)) { 
            return false;
        } 

        const filteredFieldValues = fieldValues.filter((x, _1, _2) => validateFieldValue(x)); 
        return filteredFieldValues.length === fieldValues.length; 
    }
    const validateFieldValues = validateAllFieldValues()

    return validateId && validateFormId
    && timestamp && validateFieldValues; 
}