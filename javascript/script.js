let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let linksbtn = document.querySelector('.linksbtn');
let linksbtn2 = document.querySelector('.linksbtn2');
let linksbtn3 = document.querySelector('.linksbtn3');
let linksbtn4 = document.querySelector('.linksbtn4');




hamberger.addEventListener('click', function () {
    mobileNav.classList.add('open');

});

times.addEventListener('click', function () {
    mobileNav.classList.remove('open');
});

linksbtn.addEventListener('click', function () {
    mobileNav.classList.remove('open');

});

linksbtn2.addEventListener('click', function () {
    mobileNav.classList.remove('open');

});

linksbtn3.addEventListener('click', function () {
    mobileNav.classList.remove('open');

});

linksbtn4.addEventListener('click', function () {
    mobileNav.classList.remove('open');

});



window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  