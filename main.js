window.onload = ()=>{
    // Get buttons and sections
    const buttons = document.querySelectorAll(".nav-li");
    const sections = document.querySelectorAll(".content");

    // Add button event listener
    buttons.forEach(item =>{
        item.addEventListener('click', e =>{
            var target = e.target;

            // Hide all sections
            sections.forEach(item =>{
                item.classList.add('hidden');
            })
            // Unhide corresponding section
            const visible = document.querySelector(`#${target.id}-sec`);
            visible.classList.remove('hidden');
        })
    })
}

