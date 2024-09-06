document.addEventListener("DOMContentLoaded", function() {

  function showSection(targetSection) {
    const sections = document.querySelectorAll('.MainSection > div');
    sections.forEach(section => {
      section.style.display = 'none';
    });

    document.querySelector(targetSection).style.display = 'block';
  }

  document.querySelector('.about_me .blue-btn').addEventListener('click', function() {
    showSection('.who_me');
  });

  document.querySelector('.who_me .blue-btn').addEventListener('click', function() {
    showSection('.skills');
  });


  showSection('.about_me');
});
