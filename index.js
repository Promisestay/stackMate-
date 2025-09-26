// File Upload Demo
const fileInput = document.getElementById('fileInput');
const fileName = document.getElementById('fileName');

fileInput.addEventListener('change', () => {
  fileName.textContent = "File Successfully Added!"
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



 
  // Plan selection function
function selectPlan(planType) {
    const plans = {
        free: {
            name: 'Free Plan',
            storage: '5GB',
            price: '$0'
        },
        pro: {
            name: 'Pro Plan',
            storage: '1TB',
            price: document.querySelector('#billingToggle').checked ? '$7.99' : '$9.99'
        },
        business: {
            name: 'Business Plan',
            storage: '5TB',
            price: document.querySelector('#billingToggle').checked ? '$15.99' : '$19.99'
        }
    };

    const selectedPlan = plans[planType];
    const billingType = document.querySelector('#billingToggle').checked ? 'yearly' : 'monthly';
    
    // Show confirmation message
    alert(`You've selected the ${selectedPlan.name}!\nStorage: ${selectedPlan.storage}\nPrice: ${selectedPlan.price}/month\nBilling: ${billingType}`);
    
    // Here you would typically redirect to a signup page or process payment
    console.log(`Plan selected: ${selectedPlan.name}`);
    console.log(`Billing cycle: ${billingType}`);
    
    // Add visual feedback
    highlightSelectedPlan(planType);
}

// Function to highlight the selected plan
function highlightSelectedPlan(planType) {
    // Remove highlight from all plans
    document.querySelectorAll('.pricing-plan').forEach(plan => {
        plan.classList.remove('selected');
    });
    
    // Add highlight to selected plan
    const selectedPlanElement = document.querySelector(`[onclick="selectPlan('${planType}')"]`).closest('.pricing-plan');
    selectedPlanElement.classList.add('selected');
    
    // Remove highlight after 2 seconds
    setTimeout(() => {
        selectedPlanElement.classList.remove('selected');
    }, 2000);
}

// Billing toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const billingToggle = document.getElementById('billingToggle');
    
    if (billingToggle) {
        billingToggle.addEventListener('change', function() {
            toggleBillingPeriod(this.checked);
        });
    }
});

// Function to toggle between monthly and yearly billing
function toggleBillingPeriod(isYearly) {
    // Toggle price displays
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    const monthlyPeriods = document.querySelectorAll('.monthly-period');
    const yearlyPeriods = document.querySelectorAll('.yearly-period');
    const originalPrices = document.querySelectorAll('.original-price');
    
    if (isYearly) {
        // Show yearly prices
        monthlyPrices.forEach(price => price.style.display = 'none');
        yearlyPrices.forEach(price => price.style.display = 'inline');
        monthlyPeriods.forEach(period => period.style.display = 'none');
        yearlyPeriods.forEach(period => period.style.display = 'inline');
        originalPrices.forEach(price => price.style.display = 'inline');
    } else {
        // Show monthly prices
        monthlyPrices.forEach(price => price.style.display = 'inline');
        yearlyPrices.forEach(price => price.style.display = 'none');
        monthlyPeriods.forEach(period => period.style.display = 'inline');
        yearlyPeriods.forEach(period => period.style.display = 'none');
        originalPrices.forEach(price => price.style.display = 'none');
    }
    
    // Add animation effect
    const pricingContainer = document.querySelector('.pricing-container');
    pricingContainer.style.transform = 'scale(0.98)';
    setTimeout(() => {
        pricingContainer.style.transform = 'scale(1)';
    }, 150);
}
    