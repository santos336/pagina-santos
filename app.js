document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    document.querySelector(".fondo").style.background =
        `radial-gradient(circle at ${x}px ${y}px, #0a1f44, #000)`;
});