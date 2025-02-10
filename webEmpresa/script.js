document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll("article");
    const header = document.querySelector("header");
    let lastScrollTop = 0;

    // Efectos avanzados en los artículos al pasar el mouse
    articles.forEach(article => {
        article.addEventListener("mouseenter", () => {
            article.style.boxShadow = "0px 15px 30px rgba(0, 0, 0, 0.8)";
            article.style.transform = "scale(1.08)";
            article.style.transition = "all 0.4s ease-in-out";
        });

        article.addEventListener("mouseleave", () => {
            article.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.4)";
            article.style.transform = "scale(1)";
        });
    });

    // Efecto de header al hacer scroll con opacidad y cambio de fondo dinámico
    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        if (scrollTop > lastScrollTop) {
            header.style.background = "rgba(20, 20, 20, 0.9)";
            header.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.5)";
            header.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out";
        } else {
            header.style.background = "rgba(30, 30, 30, 1)";
            header.style.boxShadow = "none";
        }
        lastScrollTop = scrollTop;
    });

    // Animaciones suaves al hacer scroll usando IntersectionObserver
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Botón flotante de "Ir arriba"
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerHTML = "⬆️";
    scrollTopBtn.classList.add("scroll-top");
    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.opacity = "1";
            scrollTopBtn.style.pointerEvents = "auto";
        } else {
            scrollTopBtn.style.opacity = "0";
            scrollTopBtn.style.pointerEvents = "none";
        }
    });

    // Menú de navegación hamburguesa responsive
    const menuToggle = document.createElement("div");
    menuToggle.innerHTML = "☰";
    menuToggle.classList.add("menu-toggle");
    document.body.prepend(menuToggle);

    const nav = document.querySelector("nav");
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        menuToggle.classList.toggle("open");
    });

    // Cambio automático del color de fondo con un gradiente dinámico
    const colors = [
        "linear-gradient(to right, #4facfe, #00f2fe)",
        "linear-gradient(to right, #43e97b, #38f9d7)",
        "linear-gradient(to right, #fa709a, #fee140)",
        "linear-gradient(to right, #30cfd0, #330867)",
        "linear-gradient(to right,rgb(0, 102, 255),rgb(1, 243, 191))"
    ];
    let colorIndex = 0;
    setInterval(() => {
        document.body.style.background = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 10000);

    // Animación de carga de página
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1.2s ease-in-out";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);

    // Notificación emergente después de 5 segundos
    setTimeout(() => {
        const notification = document.createElement("div");
        notification.classList.add("notification");
        notification.innerHTML = "🎉 ¡Bienvenido a nuestra web profesional!";
        document.body.appendChild(notification);
        setTimeout(() => notification.classList.add("fade"), 4000);
        setTimeout(() => notification.remove(), 5000);
    }, 5000);
});
