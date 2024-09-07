// dados.js (ou um arquivo similar)
const condominos = [
    { nome: 'Residencial AC', endereco: 'Ipanema/RJ = Rua Alberto de Campos, 84' },
    { nome: 'Residencial 2D', endereco: 'Catete/RJ = Rua 2 de Dezembro, 180' },
    { nome: 'Residencial SC', endereco: 'Copacabana/RJ = Rua Santa Clara, 129' },
    { nome: 'Residencial PB', endereco: 'Botafogo/RJ = Praia de Botafogo, 260' },
    // ... outros condomínios
  ];
  
  // app.js
  const inputPesquisa = document.getElementById('pesquisa');
  const resultadosPesquisa = document.getElementById('resultados-pesquisa');
  
  inputPesquisa.addEventListener('input', () => {
    const termoPesquisa = inputPesquisa.value.toLowerCase();
    const resultadosFiltrados = condominos.filter(condominio => {
      return condominio.nome.toLowerCase().includes(termoPesquisa) ||
             condominio.endereco.toLowerCase().includes(termoPesquisa);
    });
  
    // Limpa os resultados anteriores
    resultadosPesquisa.innerHTML = '';
  
    // Exibe os resultados filtrados
    resultadosFiltrados.forEach(condominio => {
      const divResultado = document.createElement('div');
      divResultado.classList.add('item-resultado');
      divResultado.innerHTML = `
        <h2>${condominio.nome}</h2>
        <p>${condominio.endereco}</p>
      `;
      resultadosPesquisa.appendChild(divResultado);
    });
  });