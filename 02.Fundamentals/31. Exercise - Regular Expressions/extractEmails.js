function extractEmails(input) {
    let pattern = /(^|\s)(?<user>[0-9A-Za-z]+([\.-])?[0-9A-Za-z]+)@(?<host>[A-za-z-]+([\.\-_][A-za-z-]+)+)(\b|\s)/gm
    let valid;
    while ((valid = pattern.exec(input)) !== null) {
        console.log(valid[0]);
    }
}

extractEmails('Please contact us at: support@github.com.')