function matchFullName(input) {
    let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/gm;
    let validNamesArr = input.match(pattern);

    console.log(validNamesArr.join(" "));

}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")