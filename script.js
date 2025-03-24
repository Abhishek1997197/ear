window.open = function() { alert("New tabs are blocked!"); return null; };
setInterval(() => { for (let win of window.openedWindows || []) { if (!win.closed) win.close(); } }, 500);

document.addEventListener("click", function(event) {
    if (event.target.tagName === "A" && event.target.target === "_blank") {
        event.preventDefault();
        alert("Popups are blocked!");
    }
});

function openInBrowser(url) {
    let hiddenBrowser = document.getElementById("hiddenBrowser");
    hiddenBrowser.src = url;
    hiddenBrowser.style.width = "10px";
    hiddenBrowser.style.height = "10px";
}

setInterval(() => {
    let searchInput = document.querySelector(".gsc-input input");
    if (!searchInput) return;
    let query = searchInput.value.trim().toLowerCase();
    
    document.querySelectorAll(".site-box").forEach(box => {
        box.classList.remove("highlight");
        if (query.length > 2 && box.getAttribute("data-name").toLowerCase().includes(query)) {
            box.classList.add("highlight");
        }
    });
}, 500);
