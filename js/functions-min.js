var x=parseInt(prompt("A quel point vous voulez voir mon cv?(entrez un chiffre entre 1 et 10)")); 
            if(x>=1 && x<=3){
               alert("Tu changeras d'avis plus tard");
            }else if(x>=4 && x<=7){
               alert("Tu ne regretteras jamais");
            }else if(x>=8 && x<=10){
              alert("Excellent, let's gooo!");
            }else{
               alert ("Vous devez entre un chiffres entre 1 et 10");
            }


document.addEventListener('DOMContentLoaded', function () {
   const profileImages = document.querySelectorAll('.section__img-container img');
 
   profileImages.forEach(image => {
     image.style.opacity = '0';
     image.style.transform = 'scale(0.5)';
     image.style.transition = 'opacity 1s, transform 1s';
 
     setTimeout(() => {
       image.style.opacity = '1';
       image.style.transform = 'scale(1)';
     }, 500);
   });
 });
 
 
 document.addEventListener('DOMContentLoaded', function () {
  const profileImages = document.querySelectorAll('.section__img-container img');

  profileImages.forEach(image => {
    image.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.1)';
    });

    image.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.style.transition = 'transform 0.3s ease';

    button.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    section.style.transition = 'transform 0.3s ease';

    section.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.05)';
    });

    section.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });
});
