// Typing Effect
const texts = ['Web Developer', 'Frontend Designer', 'Problem Solver', 'Creative Thinker'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function type() {
    const currentText = texts[textIndex];
    const displayText = isDeleting 
        ? currentText.substring(0, charIndex - 1)
        : currentText.substring(0, charIndex + 1);
    
    document.getElementById('typed-text').textContent = displayText;
    charIndex = displayText.length;

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => { isDeleting = true; }, pauseTime);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

// Start typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    type();
});

// jQuery functionality
$(document).ready(function() {
    
    // Smooth Scroll for Navigation Links
    $('.nav-link').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
            // Close mobile menu after clicking
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Navbar scroll effect
    $(window).scroll(function() {
        // Change navbar style on scroll
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }

        // Show/hide scroll to top button
        if ($(this).scrollTop() > 300) {
            $('#scrollTop').addClass('show');
        } else {
            $('#scrollTop').removeClass('show');
        }
    });

    // Scroll to top button click
    $('#scrollTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // Animate sections on scroll using Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { 
        threshold: 0.1 
    });

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Animate skill bars when they come into view
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    setTimeout(() => {
                        bar.style.width = progress + '%';
                    }, 200);
                });
            }
        });
    }, { 
        threshold: 0.5 
    });

    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }

    // Animate Counter Function
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                if (target === 24) {
                    element.textContent = target + '/7';
                } else {
                    element.textContent = target + '+';
                }
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // Observe stats section for counter animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    // Only animate if not already animated (check if text is still '0')
                    if (counter.textContent === '0') {
                        animateCounter(counter);
                    }
                });
            }
        });
    }, { 
        threshold: 0.5 
    });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // Add active class to current nav item
    $(window).on('scroll', function() {
        let scrollPos = $(document).scrollTop();
        $('.nav-link').each(function() {
            let currLink = $(this);
            let refElement = $(currLink.attr("href"));
            if (refElement.length) {
                if (refElement.position().top - 100 <= scrollPos && 
                    refElement.position().top + refElement.height() > scrollPos) {
                    $('.nav-link').parent().removeClass("active");
                    currLink.parent().addClass("active");
                } else {
                    currLink.parent().removeClass("active");
                }
            }
        });
    });

    // Preloader effect (optional)
    setTimeout(function() {
        $('body').css('overflow', 'visible');
    }, 100);

    // Mobile menu close on outside click
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.navbar').length) {
            $('.navbar-collapse').collapse('hide');
        }
    });

});

// Prevent navbar from covering content
window.addEventListener('load', function() {
    if (window.location.hash) {
        const hash = window.location.hash;
        setTimeout(function() {
            window.scrollTo(0, 0);
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }, 1);
    }
});