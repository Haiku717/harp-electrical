// HARP Electrical & Heat Pumps: small bits of interactivity

// Mobile menu
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
if (burger && menu) {
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Auto year in footer
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Contact form: submit in the background and show a banner
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
  const showToast = (message, ok) => {
    const toast = document.createElement('div');
    toast.className = 'toast' + (ok ? '' : ' toast--error');
    toast.setAttribute('role', 'status');
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('toast--show'));
    setTimeout(() => {
      toast.classList.remove('toast--show');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  };

  enquiryForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = enquiryForm.querySelector('button[type="submit"]');
    const original = btn ? btn.textContent : '';
    if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
    try {
      const res = await fetch(enquiryForm.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(enquiryForm),
      });
      const data = await res.json();
      if (data.success) {
        enquiryForm.reset();
        showToast('Thanks, we have got your message. We will be in touch soon.', true);
      } else {
        showToast('Something went wrong. Please call 027 785 0000.', false);
      }
    } catch (err) {
      showToast('Something went wrong. Please call 027 785 0000.', false);
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = original; }
    }
  });
}
