function editElement(ref, match, replacer) {
    let content = ref.textContent;
    let matcher = new RegExp(match, 'g');
    let replaced = content.replace(matcher, replacer);
    ref.textContent = replaced;
    
}

