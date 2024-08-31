document.addEventListener("DOMContentLoaded", function() {
  // دالة للتنقل بين الأقسام
  function showSection(targetSection) {
    // إخفاء جميع الأقسام
    const sections = document.querySelectorAll('.MainSection > div');
    sections.forEach(section => {
      section.style.display = 'none';
    });

    // عرض القسم المستهدف
    document.querySelector(targetSection).style.display = 'block';
  }

  // عند الضغط على زر "My Skills"
  document.querySelector('.about_me .blue-btn').addEventListener('click', function() {
    showSection('.skills');
  });

  // عند الضغط على زر "Contact Me"
  document.querySelector('.skills .blue-btn').addEventListener('click', function() {
    showSection('.contact');
  });

  // عرض القسم الأول بشكل افتراضي
  showSection('.about_me');
});
