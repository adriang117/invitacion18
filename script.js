document.addEventListener('DOMContentLoaded', function() {
    console.log('Invitación de Adrián cargada - 27 Diciembre 2025');
    
    
    // 1. CARRUSEL MEJORADO
    const carouselTrack = document.querySelector('.carousel-track');
    const photos = document.querySelectorAll('.photo-wrapper');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    let currentIndex = 0;
    const totalPhotos = photos.length;
    let autoSlideInterval;
    
    // Función para actualizar el carrusel
    function updateCarousel() {
        // Calcula el desplazamiento
        const translateX = -currentIndex * 100;
        carouselTrack.style.transform = `translateX(${translateX}%)`;
        
        // Actualiza los dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        // Reinicia el intervalo
        resetAutoSlide();
    }
    
    // Función para cambiar a una slide específica
    function goToSlide(index) {
        if (index >= 0 && index < totalPhotos) {
            currentIndex = index;
            updateCarousel();
        }
    }
    
    // Navegación con botones
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalPhotos) % totalPhotos;
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalPhotos;
        updateCarousel();
    });
    
    // Navegación con dots
    dots.forEach((dot) => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            goToSlide(index);
        });
    });
    
    // Función para auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalPhotos;
            updateCarousel();
        }, 2700); // Cambia cada 4 segundos
    }
    
    // Función para reiniciar el auto slide
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    // Pausar auto slide al hacer hover
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
    
    // Iniciar auto slide
    startAutoSlide();
    
    // 2. CONTADOR REGRESIVO CORREGIDO PARA 27 DICIEMBRE 2025 A LAS 13:30
    function updateCountdown() {
        // Fecha objetivo: 27 de diciembre de 2025 a las 13:30
        const targetDate = new Date(2025, 11, 27, 13, 30, 0); // Diciembre es mes 11 (0-indexed), 13:30
        const now = new Date();
        const timeLeft = targetDate.getTime() - now.getTime();
        
        const countdownMessage = document.getElementById('countdown-message');
        
        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            // Actualizar display (solo días, horas, minutos)
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            
            // Mensajes personalizados según el tiempo restante
            if (days > 30) {
                countdownMessage.textContent = '¡Queda mucho para la fiesta!';
                countdownMessage.style.color = '#a3bffa';
            } else if (days > 14) {
                countdownMessage.textContent = '¡Ya queda menos!';
                countdownMessage.style.color = '#a3bffa';
            } else if (days > 7) {
                countdownMessage.textContent = '¡La cuenta atrás está en marcha!';
                countdownMessage.style.color = '#a3bffa';
            } else if (days > 3) {
                countdownMessage.textContent = '¡Ya casi está aquí!';
                countdownMessage.style.color = '#ff9e6d';
            } else if (days > 1) {
                countdownMessage.textContent = '¡Casi llegamos!';
                countdownMessage.style.color = '#ff9e6d';
            } else if (days === 1) {
                countdownMessage.textContent = '¡MAÑANA ES EL GRAN DÍA!';
                countdownMessage.style.color = '#ffd166';
                countdownMessage.style.fontWeight = 'bold';
            } else if (days === 0 && hours > 6) {
                countdownMessage.textContent = '¡HOY ES EL DÍA! ¡Fiesta a las 13:30h!';
                countdownMessage.style.color = '#ffd166';
                countdownMessage.style.fontWeight = 'bold';
            } else if (days === 0 && hours > 3) {
                countdownMessage.textContent = '¡Ya casi empieza la fiesta!';
                countdownMessage.style.color = '#ff9e6d';
                countdownMessage.style.fontWeight = 'bold';
            } else if (days === 0 && hours > 1) {
                countdownMessage.textContent = '¡Faltan pocas horas!';
                countdownMessage.style.color = '#ff9e6d';
                countdownMessage.style.fontWeight = 'bold';
            } else if (days === 0 && hours <= 1 && minutes > 30) {
                countdownMessage.textContent = '¡Menos de una hora!';
                countdownMessage.style.color = '#ff6b6b';
                countdownMessage.style.fontWeight = 'bold';
            } else if (days === 0 && hours <= 1 && minutes <= 30) {
                countdownMessage.textContent = '¡YA EMPIEZA PRONTO!';
                countdownMessage.style.color = '#ff6b6b';
                countdownMessage.style.fontWeight = 'bold';
                countdownMessage.style.fontSize = '1.4rem';
            } else if (days === 0 && hours === 0 && minutes <= 5) {
                countdownMessage.textContent = '¡YA ESTÁ EMPEZANDO! ¡DATE PRISA!';
                countdownMessage.style.color = '#ff6b6b';
                countdownMessage.style.fontWeight = 'bold';
                countdownMessage.style.fontSize = '1.4rem';
            }
            
            // Para debug: mostrar fecha y tiempo restante en consola
            console.log(`Faltan: ${days}d ${hours}h ${minutes}m ${seconds}s para el 27/12/2025 13:30`);
            
        } else {
            // Si ya pasó la hora de la fiesta
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            countdownMessage.textContent = '¡El cumpleaños ya fue! ¡Gracias a todos por venir!';
            countdownMessage.style.color = '#ffd166';
            countdownMessage.style.fontWeight = 'bold';
        }
    }
    
    // Actualizar inmediatamente y luego cada segundo para mayor precisión
    updateCountdown();
    setInterval(updateCountdown, 1000); // Actualizar cada segundo
    
    // 3. RELOJ - SIMPLE Y FIJO A 13:30
    function setClockToPartyTime() {
        const hourHand = document.querySelector('.hour-hand');
        const minuteHand = document.querySelector('.minute-hand');
        
        // Para la hora de la fiesta (13:30)
        // En un reloj analógico:
        // - 13:30 = 1:30 (en formato 12 horas)
        // - Hora: 1.5 horas = 45 grados (cada hora son 30 grados: 1.5 * 30 = 45)
        // - Minutos: 30 minutos = 180 grados (cada minuto son 6 grados: 30 * 6 = 180)
        
        // Corregido: La manecilla de la hora también se mueve con los minutos
        // 13:30 significa que la manecilla de la hora está a medio camino entre la 1 y la 2
        const hourDeg = (1 * 30) + (30 * 0.5); // 30 grados por hora + 0.5 grados por minuto
        const minuteDeg = 30 * 6; // 30 minutos * 6 grados por minuto
        
        hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
        minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    }
    
    // Inicializar reloj
    setClockToPartyTime();
    
    // 4. EFECTOS ESPECIALES
    // Confeti al hacer clic
    document.querySelector('.confetti').addEventListener('click', function() {
        // Animación del confeti
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'bounce 2s infinite ease-in-out';
        }, 10);
        
        // Crear confeti temporal
        createConfetti();
    });
    
    function createConfetti() {
        const confettiContainer = document.querySelector('.header-section');
        const emojis = ['🎉', '🎊', '🥳', '🎁', '🎂', '✨', '🌟', '💫'];
        
        for (let i = 0; i < 12; i++) {
            const confetti = document.createElement('div');
            confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            confetti.style.position = 'absolute';
            confetti.style.fontSize = Math.random() * 20 + 15 + 'px';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-50px';
            confetti.style.zIndex = '1000';
            confetti.style.pointerEvents = 'none';
            confetti.style.opacity = '0.9';
            
            confettiContainer.appendChild(confetti);
            
            // Animación
            const animation = confetti.animate([
                { 
                    transform: 'translateY(0) rotate(0deg)', 
                    opacity: 1 
                },
                { 
                    transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 720}deg)`, 
                    opacity: 0 
                }
            ], {
                duration: 1500 + Math.random() * 1500,
                easing: 'cubic-bezier(0.1, 0.8, 0.9, 0.1)'
            });
            
            // Eliminar después de la animación
            animation.onfinish = () => confetti.remove();
        }
    }
    
    // 5. ANIMACIÓN DEL DÍA DESTACADO EN EL CALENDARIO
    const highlightDay = document.querySelector('.highlight-day');
    if (highlightDay) {
        setInterval(() => {
            highlightDay.style.transform = highlightDay.style.transform === 'scale(1.1)' 
                ? 'scale(1.15)' 
                : 'scale(1.1)';
        }, 1000);
    }
    
    // 6. VERIFICACIÓN DE FECHA (para debug)
    const targetDate = new Date(2025, 11, 27, 13, 30, 0);
    const now = new Date();
    const timeLeft = targetDate.getTime() - now.getTime();
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    
    console.log('=== DEBUG CONTADOR REGRESIVO ===');
    console.log('Fecha objetivo (27/12/2025 13:30):', targetDate.toString());
    console.log('Fecha actual:', now.toString());
    console.log(`Tiempo restante: ${daysLeft} días, ${hoursLeft} horas, ${minutesLeft} minutos`);
    console.log('Milisegundos restantes:', timeLeft);
    console.log('===============================');
    
    // 7. INICIALIZAR
    console.log('Invitación lista para la fiesta del 27 de diciembre 2025 a las 13:30! 🎉');
});