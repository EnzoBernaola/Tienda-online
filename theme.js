document.addEventListener("DOMContentLoaded", () => {
    const selector = document.getElementById("theme-selector");
    const savedTheme = localStorage.getItem("theme") || "claro";
    document.documentElement.setAttribute("data-theme", savedTheme);
    selector.value = savedTheme;

    selector.addEventListener("change", () => {
        document.documentElement.setAttribute("data-theme", selector.value);
        localStorage.setItem("theme", selector.value);
    });
});