"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDisplayConditionGroup = void 0;
const condition_1 = require("./condition");
function validateDisplayConditionGroup(arg) {
    if (!arg) {
        return false;
    }
    function validateAllConditions() {
        const conditionList = arg.condition_list;
        if (!conditionList) {
            return false;
        }
        else if (!Array.isArray(conditionList)) {
            return false;
        }
        const filteredList = conditionList.filter((x, _1, _2) => condition_1.validateCondition(x));
        return filteredList.length === conditionList.length;
    }
    const validateConditionList = validateAllConditions();
    return validateConditionList;
}
exports.validateDisplayConditionGroup = validateDisplayConditionGroup;
//# sourceMappingURL=displayConditionGroup.js.map