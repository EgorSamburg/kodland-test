document.querySelectorAll("button, a").forEach(item => {

    item.addEventListener("click", function(event){

        event.preventDefault();

    });

});