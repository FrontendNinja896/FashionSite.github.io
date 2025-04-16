window.addEventListener("scroll", () => {
    let header = document.querySelector(".desktop");
    
    if (window.scrollY > 0) {
        header.classList.add("shadowed-header"); // Добавляем класс затемнённой шапки
    } else {
        header.classList.remove("shadowed-header"); // Убираем затемнение
    }
});