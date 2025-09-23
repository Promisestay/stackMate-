// File Upload Demo
const fileInput = document.getElementById('fileInput');
const fileName = document.getElementById('fileName');

fileInput.addEventListener('change', () => {
  fileName.textContent = "Selected: " + fileInput.files[0].name;
});

// Modal Logic
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');

loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
});
closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
});


// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});



 // Billing toggle functionality
        const billingToggle = document.getElementById('billingToggle');
        const monthlyPrices = document.querySelectorAll('.monthly-price');
        const yearlyPrices = document.querySelectorAll('.yearly-price');
        const monthlyPeriods = document.querySelectorAll('.monthly-period');
        const yearlyPeriods = document.querySelectorAll('.yearly-period');
        const originalPrices = document.querySelectorAll('.original-price');

        billingToggle.addEventListener('change', function() {
            const isYearly = this.checked;
            
            monthlyPrices.forEach(price => {
                price.style.display = isYearly ? 'none' : 'inline';
            });
            
            yearlyPrices.forEach(price => {
                price.style.display = isYearly ? 'inline' : 'none';
            });
            
            monthlyPeriods.forEach(period => {
                period.style.display = isYearly ? 'none' : 'inline';
            });
            
            yearlyPeriods.forEach(period => {
                period.style.display = isYearly ? 'inline' : 'none';
            });
            
            originalPrices.forEach(price => {
                price.style.display = isYearly ? 'inline' : 'none';
            });
        });

        // Plan selection function
        function selectPlan(planType) {
            const isYearly = billingToggle.checked;
            const billingType = isYearly ? 'yearly' : 'monthly';
            
            // Create a visual feedback
            const button = event.target;
            const originalText = button.textContent;
            
            button.textContent = 'Selected!';
            button.style.background = '#4CAF50';
            
            setTimeout(() => {
                button.textContent = originalText;
                if (button.classList.contains('primary')) {
                    button.style.background = '';
                }
            }, 1500);
            
            // Here you would typically redirect to a checkout page or open a modal
            console.log(`Selected plan: ${planType}, billing: ${billingType}`);
            
            // Example: Show alert (replace with your actual logic)
            alert(`You selected the ${planType.charAt(0).toUpperCase() + planType.slice(1)} plan with ${billingType} billing!`);
        }

        // Add intersection observer for animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Add some particle effects on hover (optional enhancement)
        document.querySelectorAll('.pricing-plan').forEach(plan => {
            plan.addEventListener('mouseenter', function() {
                this.style.background = 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)';
            });
            
            plan.addEventListener('mouseleave', function() {
                this.style.background = 'white';
            });
        });
    


