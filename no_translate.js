document.addEventListener('DOMContentLoaded',()=> {
    for(tag of document.getElementsByTagName('pre')) {
        tag.classList.add('notranslate')
    }
}, false);
