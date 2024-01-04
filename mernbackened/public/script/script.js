
document.getElementById("sign_btn").addEventListener("click", function() {
    // Replace 'https://www.example.com' with the URL of the webpage you want to open
    window.location.href = '/register';
    
  });
  
  document.getElementById("signin_btn").addEventListener("click", function() {
    // Replace 'https://www.example.com' with the URL of the webpage you want to open
    window.location.href = '/login';
    
  });
  document.getElementById("donatenow").addEventListener("click", function() {
    // Replace 'https://www.example.com' with the URL of the webpage you want to open
    window.location.href = 'https://business.paytm.com/docs/api/create-link-api/';
    window.open(url, '_blank');
  });

  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      // Show the delayed image after 5 seconds
      document.getElementById('combined').style.display = 'block';
    }, 1000); // 5000 milliseconds = 5 seconds
  });


  
