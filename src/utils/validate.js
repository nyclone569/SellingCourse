const REGEXP = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
    url: /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/
}

const ERROR_MESSAGE = {
    required: 'Please fill in this field.',
    regexp: 'Field not like format'
}

export const validate = (rules, forms) => {
    const errorObject = {}
    for (let name in rules) {
        for (let rule of rules[name]) {
            if (rule.required) {
                if (!forms[name]?.trim()) {
                    errorObject[name] = rule.message || ERROR_MESSAGE.required
                }
            }
            if (rule.regexp && forms[name]) {
                let regexp = rule.regexp
                if (regexp in REGEXP) {
                    regexp = REGEXP[regexp]
                } else if (!(regexp instanceof RegExp)) {
                    regexp = new RegExp()
                }
                if (!regexp.test(forms[name])) {
                    errorObject[name] = rule.message || ERROR_MESSAGE.regexp
                }
            }
        }
    }

    return errorObject
}

export const required = (message) => ({
    message,
    required: true
})
export const regexp = (pattern, message) => ({
    regexp: pattern,
    message
})