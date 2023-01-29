function requestValidator(input) {
    let methodVerification = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriVerification = /(^[\w.]+$)/gm
    let versionVerification = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let messageVerification = /[<>\\&'"]/gm

   
    if (!methodVerification.includes(input.method) || !input.hasOwnProperty('method')) {
        throw new Error('Invalid request header: Invalid Method');
    }
   
    if (!uriVerification.test(input.uri) || !input.hasOwnProperty('uri')) {
        throw new Error('Invalid request header: Invalid URI');
    }
    
    if (!versionVerification.includes(input.version) || !input.hasOwnProperty('version')) {
        throw new Error('Invalid request header: Invalid Version');
    }
    
    if (messageVerification.test(input.message) || input.message == undefined) {
        throw new Error('Invalid request header: Invalid Message');
    }
    
    return input
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}))

console.log(requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}))

console.log(requestValidator(obj = {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}))