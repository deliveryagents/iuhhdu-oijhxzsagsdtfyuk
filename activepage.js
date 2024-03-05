const navlinkEls = document.querySelectorAll('navlink');
const windowpathname = window.location.pathname;

navlinkEls .forEach(navlinkEls =>{
  if (navlinkEls.href.includes(windowpathname)){
    navlinkEls.classList.add('active');
  }
})