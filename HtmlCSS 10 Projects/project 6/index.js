
const menuBarEl = document.getElementById("menuBar");
const menumobileEl = document.querySelector(".menu_mobile");


const onClose = () => {
    menumobileEl.classList.toggle('show_menu');
};

menuBarEl.addEventListener("click", () => {
    onClose();
});

