function toggleImageStyle() {
    var image = document.getElementById("profileImage");

    if (image.style.borderRadius === "50px") {
        image.style.borderRadius = "10px";
        image.style.border = "2px solid rgba(0, 0, 0, 0.3)";
        showMessage("Image style changed: Rounded corners");
    } else {
        image.style.borderRadius = "50px";
        image.style.border = "none";
        showMessage("Image style changed: Circular");
    }
}

function showMessage(message) {
    var tooltip = document.createElement("div");
    tooltip.innerHTML = message;
    tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    tooltip.style.color = "white";
    tooltip.style.padding = "10px";
    tooltip.style.position = "absolute";
    tooltip.style.bottom = "20px";
    tooltip.style.left = "50%";
    tooltip.style.transform = "translateX(-50%)";
    tooltip.style.borderRadius = "5px";
    tooltip.style.zIndex = "1000";

    document.body.appendChild(tooltip);

    setTimeout(function() {
        tooltip.remove();
    }, 2000);
}