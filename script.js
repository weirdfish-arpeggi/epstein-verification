  function confirm() {
    const modal = document.getElementById('modal');
    const success = document.getElementById('success');
    modal.style.animation = 'none';
    modal.style.transition = 'opacity 0.25s, transform 0.25s';
    modal.style.opacity = '0';
    modal.style.transform = 'scale(0.9)';
    setTimeout(() => {
      modal.style.display = 'none';
      success.style.display = 'flex';
    }, 260);
  }

  function deny() {
    history.back();
    // Fallback if there's no history
    setTimeout(() => {
      window.location.href = 'about:blank';
    }, 100);
  }