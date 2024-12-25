document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const age = parseInt(document.getElementById('age').value);
    
    // Validação de entrada
    if (isNaN(age) || age < 0) {
      alert("Por favor, insira uma idade válida.");
      return;
    }
  
    const ageGroup = getAgeGroup(age);
    const imageUrl = getAgeImage(ageGroup);
  
    // Exibe o resultado
    document.getElementById('age-group').textContent = `És um(a) ${ageGroup}`;
    document.getElementById('age-image').src = imageUrl;
  });
  
  function getAgeGroup(age) {
    if (age >= 0 && age <= 2) {
      return 'Bebé';
    } else if (age > 2 && age < 12) {
      return 'Criança';
    } else if (age >= 12 && age <= 16) {
      return 'Adolescente';
    } else if (age > 16 && age < 18) {
      return 'Jovem Adulto';
    } else if (age >= 18 && age < 50) {
      return 'Adulto';
    } else if (age >= 50 && age <= 65) {
      return 'Adulto de Meia Idade';
    } else if (age > 65 && age <= 99) {
      return 'Idoso';
    } else if (age >= 100 && age <= 130) {
      return 'Lendário';
    } else {
      return 'Imortal';
    }
  }
  
  function getAgeImage(ageGroup) {
    const images = {
      'Bebé': 'img/bebe.jpeg',
      'Criança': 'img/crianca.jpg',
      'Adolescente': 'img/adolescente.jpg',
      'Jovem Adulto': 'img/jovemadulto.jpg',
      'Adulto': 'img/adulto.jpg',
      'Adulto de Meia Idade': 'img/adulto_meia_idade.jpg',
      'Idoso': 'img/idoso.jpg',
      'Lendário': 'img/lendario.jpg',
      'Imortal': 'img/imortal.jpg'
    };
    return images[ageGroup] || 'img/default.jpg';  // Imagem padrão caso falhe
  }
  