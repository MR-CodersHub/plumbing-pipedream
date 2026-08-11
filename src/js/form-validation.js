document.addEventListener('DOMContentLoaded', () => {
  // Regex pattern helpers
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  // Inline error rendering helper
  function showError(inputEl, message) {
    inputEl.style.borderColor = 'var(--coral-accent)';
    inputEl.style.boxShadow = '0 0 0 3px rgba(255,90,31,0.15)';
    let errorEl = inputEl.parentElement.querySelector('.error-msg');
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.className = 'error-msg';
      errorEl.style.cssText = 'display:block;font-size:12px;color:var(--coral-accent);font-weight:600;margin-top:6px';
      inputEl.parentElement.appendChild(errorEl);
    }
    errorEl.style.display = 'block';
    errorEl.textContent = message;
  }

  function clearError(inputEl) {
    inputEl.style.borderColor = 'var(--border-color)';
    inputEl.style.boxShadow = 'none';
    const errorEl = inputEl.parentElement.querySelector('.error-msg');
    if (errorEl) {
      errorEl.style.display = 'none';
    }
  }

  // Clear inline errors on input
  document.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('input', () => clearError(input));
  });

  // ================= 1. MULTI-STEP BOOKING FORM (booking.html) =================
  const bookingApp = document.getElementById('bookingMultiStepApp');
  if (bookingApp) {
    let currentStep = 1;
    const totalSteps = 5;

    let bookingData = {
      service: 'drain-cleaning',
      issue: 'blocked-drain',
      property: 'residential',
      address: '',
      zip: '',
      date: 'Today',
      time: '08:00 AM - 10:00 AM',
      emergency: false,
      name: '',
      phone: '',
      email: '',
      notes: ''
    };

    // Parse URL params if pre-filled from service pages
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('service')) bookingData.service = urlParams.get('service');
    if (urlParams.has('issue')) bookingData.issue = urlParams.get('issue');

    const stepPanels = document.querySelectorAll('.booking-step-panel');
    const stepItems = document.querySelectorAll('.step-item');
    const prevBtn = document.getElementById('bookingPrevBtn');
    const nextBtn = document.getElementById('bookingNextBtn');

    function updateStepUI() {
      stepPanels.forEach(panel => panel.classList.remove('active'));
      stepItems.forEach((item, idx) => {
        item.classList.remove('active', 'completed');
        if (idx + 1 === currentStep) item.classList.add('active');
        if (idx + 1 < currentStep) item.classList.add('completed');
      });

      const currentPanel = document.getElementById(`bookingStep${currentStep}`);
      if (currentPanel) currentPanel.classList.add('active');

      if (prevBtn) prevBtn.style.visibility = currentStep === 1 ? 'hidden' : 'visible';
      if (nextBtn) {
        nextBtn.innerHTML = currentStep === totalSteps ? `<i class="fas fa-check-circle"></i> Confirm Booking` : `Next Step <i class="fas fa-arrow-right"></i>`;
      }

      // Update Live Cost Summary
      updateSummary();
    }

    function updateSummary() {
      const summaryService = document.getElementById('summaryService');
      const summaryProperty = document.getElementById('summaryProperty');
      const summaryCost = document.getElementById('summaryCost');
      const summaryDuration = document.getElementById('summaryDuration');

      if (summaryService) summaryService.textContent = bookingData.service.replace('-', ' ').toUpperCase();
      if (summaryProperty) summaryProperty.textContent = bookingData.property.toUpperCase();

      let basePrice = 95;
      if (bookingData.service === 'burst-pipe') basePrice = 145;
      if (bookingData.service === 'water-heater') basePrice = 120;
      if (bookingData.service === 'pipe-refitting') basePrice = 220;
      if (bookingData.property === 'commercial') basePrice = Math.round(basePrice * 1.35);
      if (bookingData.emergency) basePrice += 60;

      if (summaryCost) summaryCost.textContent = `$${basePrice} - $${basePrice + 75}`;
      if (summaryDuration) summaryDuration.textContent = bookingData.emergency ? 'Priority < 45 min arrival' : '45 - 90 mins';
    }

    // Step Option Cards Selector
    document.querySelectorAll('.option-card').forEach(card => {
      card.addEventListener('click', () => {
        const group = card.getAttribute('data-group');
        const value = card.getAttribute('data-value');

        card.parentElement.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');

        if (group) bookingData[group] = value;
        updateSummary();
      });
    });

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        // Validate Step Inputs before advancing
        if (currentStep === 2) {
          const addressInput = document.getElementById('bookingAddress');
          const zipInput = document.getElementById('bookingZip');
          let valid = true;

          if (addressInput && !addressInput.value.trim()) {
            showError(addressInput, 'Street address is required.');
            valid = false;
          }
          if (zipInput && zipInput.value.trim().length < 5) {
            showError(zipInput, 'Enter a valid 5-digit zip code.');
            valid = false;
          }
          if (!valid) return;
          bookingData.address = addressInput.value.trim();
          bookingData.zip = zipInput.value.trim();
        }

        if (currentStep === 4) {
          const nameInput = document.getElementById('bookingName');
          const phoneInput = document.getElementById('bookingPhone');
          const emailInput = document.getElementById('bookingEmail');
          let valid = true;

          if (nameInput && !nameInput.value.trim()) {
            showError(nameInput, 'Full name is required.');
            valid = false;
          }
          if (phoneInput && phoneInput.value.replace(/\D/g, '').length < 10) {
            showError(phoneInput, 'Provide a valid 10-digit phone number.');
            valid = false;
          }
          if (emailInput && !emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, 'Enter a valid email address.');
            valid = false;
          }
          if (!valid) return;

          bookingData.name = nameInput.value.trim();
          bookingData.phone = phoneInput.value.trim();
          bookingData.email = emailInput.value.trim();
        }

        if (currentStep < totalSteps) {
          currentStep++;
          updateStepUI();
        } else {
          // Final Submit Confirmation Step
          const bookingCard = document.getElementById('bookingCardMain');
          const confirmationBox = document.getElementById('bookingConfirmationBox');
          const bookingRefId = document.getElementById('bookingRefId');
          const bookingConfirmDetails = document.getElementById('bookingConfirmDetails');

          const refNum = 'PLM-2026-' + Math.floor(100000 + Math.random() * 900000);
          if (bookingRefId) bookingRefId.textContent = refNum;

          if (bookingConfirmDetails) {
            bookingConfirmDetails.innerHTML = `
              <strong>Technician Reserved for:</strong> ${bookingData.name}<br>
              <strong>Contact Hotline:</strong> ${bookingData.phone}<br>
              <strong>Service Address:</strong> ${bookingData.address}, ${bookingData.zip}<br>
              <strong>Service Category:</strong> ${bookingData.service.replace('-', ' ').toUpperCase()}<br>
              <strong>Dispatch Window:</strong> ${bookingData.date} (${bookingData.time}) ${bookingData.emergency ? '[PRIORITY EMERGENCY]' : ''}<br>
              <strong>Estimated Total:</strong> ${document.getElementById('summaryCost')?.textContent || '$145'}
            `;
          }

          if (bookingCard && confirmationBox) {
            bookingCard.style.display = 'none';
            confirmationBox.style.display = 'block';
          }
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
          currentStep--;
          updateStepUI();
        }
      });
    }

    updateStepUI();
  }

  // ================= 2. CONTACT FORM INLINE VALIDATION =================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const name = document.getElementById('contactName');
      const email = document.getElementById('contactEmail');
      const phone = document.getElementById('contactPhone');
      const message = document.getElementById('contactMessage');
      const statusBox = document.getElementById('contactFormStatus');

      if (name && !name.value.trim()) {
        showError(name, 'Full name is required.');
        isValid = false;
      }
      if (email && !emailRegex.test(email.value.trim())) {
        showError(email, 'Enter a valid email address.');
        isValid = false;
      }
      if (phone && phone.value.replace(/\D/g, '').length < 10) {
        showError(phone, 'Enter a valid 10-digit phone number.');
        isValid = false;
      }
      if (message && !message.value.trim()) {
        showError(message, 'Please provide details about your inquiry.');
        isValid = false;
      }

      if (isValid && statusBox) {
        statusBox.style.display = 'block';
        statusBox.className = 'alert-success-box';
        statusBox.innerHTML = `
          <div style="background:rgba(16,185,129,0.15);color:var(--green-success);padding:16px;border-radius:var(--radius-md);font-weight:600;display:flex;align-items:center;gap:12px">
            <i class="fas fa-check-circle" style="font-size:24px"></i>
            <div>
              <strong>Thank you, ${name.value.trim()}!</strong><br>
              Your message has been sent to our dispatch team. A representative will contact you at ${phone.value.trim()} within 15 minutes.
            </div>
          </div>
        `;
        contactForm.reset();
      }
    });
  }
});
