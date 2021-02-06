import { Condition, validateCondition } from './condition'; 

export type DisplayConditionGroup = { 
    required: boolean,
    condition_list: [Condition]
}

export function validateDisplayConditionGroup(arg: DisplayConditionGroup | any): arg is DisplayConditionGroup { 
    if (!arg) { 
        return false; 
    }

    const validateRequired = typeof arg.required === "boolean"; 

    function validateAllConditions(): boolean { 
        const conditionList = arg.condition_list; 
        if (!conditionList) { 
            return false;
        } else if (!Array.isArray(conditionList)) { 
            return false;
        } 

        const filteredList = conditionList.filter((x, _1, _2) => validateCondition(x)); 
        return filteredList.length === conditionList.length; 
    }
    const validateConditionList = validateAllConditions() 

    return validateRequired && validateConditionList; 
}