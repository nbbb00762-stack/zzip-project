/**
 * Pure JavaScript implementation of the scroll animation logic using IntersectionObserver.
 * It looks for elements with a 'data-animation-target' attribute and applies the 'visible' class
 * when they enter the viewport.
 */

// Scroll animations using IntersectionObserver
function setupScrollAnimation() {
    const animationTargets = document.querySelectorAll('[data-animation-target]');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

    function handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    animationTargets.forEach(target => observer.observe(target));
}

// Simple closer-look carousel (prev/next)
function setupCloserCarousel() {
    const imgs = [
        // external image (first)
        'https://www.apple.com/v/ipad-pro/av/images/overview/ipados/hero_left__cfj9zuqxxr36_large.png',
        'https://www.apple.com/v/ipad-pro/av/images/overview/closer-look/space-black/slide_2A__fys53o1sux26_large.jpg',
        'https://www.apple.com/v/macbook-pro/av/images/overview/artificial-intelligence/ai_3rd_party__eyiaslpg07ee_large.jpg',
        'sas.png'
    ];

    let index = 0;
    const imgEl = document.getElementById('closer-image');
    const prevBtn = document.getElementById('closer-prev');
    const nextBtn = document.getElementById('closer-next');
    if (!imgEl || !prevBtn || !nextBtn) return;

    // Preload images
    imgs.forEach(src => { const i = new Image(); i.src = src; });

    function showImage(i) {
        index = (i + imgs.length) % imgs.length;
        imgEl.style.opacity = '0';
        setTimeout(() => {
            imgEl.src = imgs[index];
            imgEl.style.opacity = '1';
        }, 220);
    }

    prevBtn.addEventListener('click', () => showImage(index - 1));
    nextBtn.addEventListener('click', () => showImage(index + 1));

    // Optional: keyboard support when closer-look section is visible
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') showImage(index - 1);
        if (e.key === 'ArrowRight') showImage(index + 1);
    });
}

// Registration modal: open, validate and store a lightweight registration locally
function setupRegistrationModal() {
    const openBtn = document.getElementById('register-btn');
    const modal = document.getElementById('registration-modal');
    const closeBtn = document.getElementById('reg-close');
    const cancelBtn = document.getElementById('reg-cancel');
    const form = document.getElementById('reg-form');
    const inputName = document.getElementById('reg-name');
    const inputEmail = document.getElementById('reg-email');
    const inputPassword = document.getElementById('reg-password');
    const errorEl = document.getElementById('reg-error');
    const successEl = document.getElementById('reg-success');

    if (!openBtn || !modal || !form) return;

    function openModal() {
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
        // small delay to allow layout, then focus
        setTimeout(() => inputName && inputName.focus(), 80);
    }

    function closeModal() {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        // reset form state
        form.reset();
        if (errorEl) { errorEl.style.display = 'none'; errorEl.textContent = ''; }
        if (successEl) { successEl.style.display = 'none'; }
    }

    openBtn.addEventListener('click', (e) => { e.preventDefault(); openModal(); });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    // Close when clicking outside the modal box
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') closeModal();
    });

    function validateEmail(email) {
        // simple email regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!inputName || !inputEmail || !inputPassword) return;
        const name = inputName.value.trim();
        const email = inputEmail.value.trim();
        const pass = inputPassword.value;

        if (!name) {
            errorEl.style.display = 'block';
            errorEl.textContent = 'Аты-жөніңізді енгізіңіз';
            return;
        }
        if (!validateEmail(email)) {
            errorEl.style.display = 'block';
            errorEl.textContent = 'Жарамды электрондық пошта енгізіңіз';
            return;
        }
        if (!pass || pass.length < 6) {
            errorEl.style.display = 'block';
            errorEl.textContent = 'Құпия сөз кемінде 6 таңбадан тұруы керек';
            return;
        }

        // store lightweight registration (do NOT store passwords in plain text)
        try {
            const list = JSON.parse(localStorage.getItem('registrations') || '[]');
            list.push({ name, email, created: Date.now() });
            localStorage.setItem('registrations', JSON.stringify(list));
        } catch (err) {
            // ignore storage errors
            console.warn('LocalStorage save failed', err);
        }

        // show success
        if (errorEl) { errorEl.style.display = 'none'; }
        if (successEl) { successEl.style.display = 'block'; }

        // update button state
        openBtn.textContent = 'Тіркелді';
        openBtn.disabled = true;

        setTimeout(() => closeModal(), 1200);
    });
}

// Spotlight effect that follows the mouse
function setupSpotlightEffect() {
    const spotlight = document.getElementById('spotlight');
    if (!spotlight) return;

    document.addEventListener('mousemove', (e) => {
        // Use requestAnimationFrame for performance
        requestAnimationFrame(() => {
            spotlight.style.left = `${e.clientX}px`;
            spotlight.style.top = `${e.clientY}px`;
        });
    });
}

// Magnetic buttons effect
function setupMagneticButtons() {
    // Select buttons that should have the effect
    const magneticButtons = document.querySelectorAll('.button-pulse, #closer-prev, #closer-next');
    const strength = 40; // How strong the pull is

    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Use requestAnimationFrame for smooth animation
            requestAnimationFrame(() => {
                button.style.transform = `translate(${x / rect.width * strength}px, ${y / rect.height * strength}px)`;
                button.style.transition = 'transform 0.1s ease-out'; // Quick follow
            });
        });

        button.addEventListener('mouseleave', () => {
            requestAnimationFrame(() => {
                button.style.transform = 'translate(0,0)';
                button.style.transition = 'transform 0.3s ease-in-out'; // Slower return
            });
        });
    });
}

// Custom cursor logic
function setupCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    const follower = document.getElementById('cursor-follower');
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    const speed = 0.1; // How fast the follower catches up

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function animateFollower() {
        followerX += (mouseX - followerX) * speed;
        followerY += (mouseY - followerY) * speed;
        follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Add hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, [role="button"]');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-grow'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-grow'));
    });
}

// Phone frame parallax: reacts to cursor position with smooth lerp
function setupPhoneParallax() {
    const frame = document.querySelector('.phone-frame');
    const screenVideo = document.querySelector('.phone-screen__video');
    const frameImage = document.querySelector('.phone-frame__image');
    if (!frame || !screenVideo || !frameImage) return;

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    const strength = 20; // px max translation for screen (increased for stronger response)
    const frameStrength = 12; // px for frame image (stronger opposite movement)
    const ease = 0.16; // lerp factor (0-1) — slightly faster catch-up for snappier feel

    function onMove(e) {
        const rect = frame.getBoundingClientRect();
        mouseX = (e.clientX - rect.left) / rect.width * 2 - 1; // -1 .. 1
        mouseY = (e.clientY - rect.top) / rect.height * 2 - 1; // -1 .. 1
    }

    function onLeave() {
        mouseX = 0; mouseY = 0;
    }

    frame.addEventListener('mousemove', onMove);
    frame.addEventListener('mouseleave', onLeave);

    function animate() {
        currentX += (mouseX - currentX) * ease;
        currentY += (mouseY - currentY) * ease;

        const screenTx = currentX * strength;
        const screenTy = currentY * strength * 0.7;
        const frameTx = currentX * frameStrength * -0.35; // slight opposite for depth
        const frameTy = currentY * frameStrength * -0.2;

        // apply transforms
        screenVideo.style.transform = `translate3d(${screenTx}px, ${screenTy}px, 0) scale(1.04)`;
        frameImage.style.transform = `translate3d(${frameTx}px, ${frameTy}px, 0)`;

        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

document.addEventListener('DOMContentLoaded', () => {
    setupScrollAnimation();
    setupCloserCarousel();
    setupRegistrationModal();
    setupSpotlightEffect();
    setupMagneticButtons();
    setupCustomCursor();
    setupPhoneParallax();
});
