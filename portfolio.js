
function changeNavBarColor() {
    const navBar = document.getElementById('const');
    const accueilLink = document.getElementById('cons');
    const parcoursLink = document.getElementById('con');
    const diplomeLink = document.getElementById('co');
  
    navBar.addEventListener('mouseover', function() {
      navBar.style.backgroundColor = 'brown';});

      accueilLink.addEventListener('mouseover', function() {
      accueilLink.style.backgroundColor = 'brown';});
      parcoursLink.addEventListener('mouseover', function() {
      parcoursLink.style.backgroundColor = 'brown';});
      diplomeLink.addEventListener('mouseover', function() {
      diplomeLink.style.backgroundColor = 'brown';

    });
    navBar.addEventListener('mouseout', function() {
      navBar.style.backgroundColor = 'brown';
      accueilLink.style.backgroundColor = 'white';
      parcoursLink.style.backgroundColor = 'white';
      diplomeLink.style.backgroundColor = 'white';
    
    
    });
      accueilLink.addEventListener('mouseout', function() {
        navBar.style.backgroundColor = 'white';
        accueilLink.style.backgroundColor = 'brown';
        parcoursLink.style.backgroundColor = 'white';
        diplomeLink.style.backgroundColor = 'white';
    
    
    });
      parcoursLink.addEventListener('mouseout', function() {
        navBar.style.backgroundColor = 'white';
        accueilLink.style.backgroundColor = 'white';
        parcoursLink.style.backgroundColor = 'brown';
        diplomeLink.style.backgroundColor = 'white';
    
    
    });
      diplomeLink.addEventListener('mouseout', function() {
        navBar.style.backgroundColor = 'white';
        accueilLink.style.backgroundColor = 'white';
        parcoursLink.style.backgroundColor = 'white';
        diplomeLink.style.backgroundColor = 'brown';
    });
  }
  
  
  function submitFormAlert() {
    const submitButton = document.querySelector('.btn');
    submitButton.addEventListener('click', function() {
      alert('Votre message a été bien envoyé!');
    });
  }
  

  changeNavBarColor();
  submitFormAlert();
  