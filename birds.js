const buttons = Array.from(document.querySelectorAll('button'));


function hide_sections(arr){
    arr.forEach(a => {
        a.classlist.add("hidden");
    });
}

function show_section(index, sections) {
    if(index !== undefined && sections !== undefined) {
        hide_sections(sections);
        sections[index].classlist.remove("hidden");
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const contentBlocks = Array.from(document.querySelectorAll('section'));
        const index = button.getAttribute('data-index');

    });
});
