const navLinks = document.querySelectorAll('.nav-link');
const currentUrl = window.location.href;

navLinks.forEach(link => {
  if (link.href === currentUrl) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});


function navigateToHome() {
  window.location.href = "/home.html";
}

function navigateToLogin() {
  window.location.href = "/login.html";
}


function navigateToPage() {
  window.location.href = "/newAdd.html";
}

function navigateToEnquery() {
  window.location.href = "/myEnquiry.html";
}
