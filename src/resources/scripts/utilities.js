

// This will combine any input objects
function combineObjects() {
        let output = {}

        for (const item of arguments) {
            output = Object.assign(output, item)
        }

        return output
}

function combineClasses() {
    let output = ""
    
    for (const item of arguments) {
        if (output !== "") {
            output = output + " " + item
        }
        else {
            output = item
        }
    }
    
    return output
}

export {combineObjects, combineClasses}