const pizzas = [
    {
      nome: 'Pizza Margherita',
      descricao: 'Molho de tomate, mussarela, manjericão fresco e azeite de oliva.',
      preco: 'R$ 39,90',
      imagem: 'https://via.placeholder.com/280x180.png?text=Pizza+Margherita'
    },
    {
      nome: 'Pizza Calabresa',
      descricao: 'Molho de tomate, mussarela, calabresa, cebola e azeitonas.',
      preco: 'R$ 45,90',
      imagem: 'https://via.placeholder.com/280x180.png?text=Pizza+Calabresa'
    },
    {
      nome: 'Pizza Portuguesa',
      descricao: 'Molho de tomate, mussarela, presunto, ovos, azeitonas, cebola e pimentão.',
      preco: 'R$ 49,90',
      imagem: 'https://via.placeholder.com/280x180.png?text=Pizza+Portuguesa'
    },
    {
      nome: 'Pizza Quatro Queijos',
      descricao: 'Molho de tomate, mussarela, gorgonzola, parmesão e provolone.',
      preco: 'R$ 54,90',
      imagem: 'https://via.placeholder.com/280x180.png?text=Pizza+Quatro+Queijos'
    },
    {
      nome: 'Pizza Vegetariana',
      descricao: 'Molho de tomate, mussarela, brócolis, cogumelos, pimentão e tomate.',
      preco: '44,90',
      imagem: 'https://via.placeholder.com/280x180.png?text=Pizza+Vegetariana'
    }
  ];
  
  // Função para renderizar o cardápio de pizzas
  function renderMenu() {
    const pizzaList = document.getElementById('pizza-list');
    pizzaList.innerHTML = ''; // Limpa o conteúdo antes de renderizar
  
    pizzas.forEach(pizza => {
      const pizzaDiv = document.createElement('div');
      pizzaDiv.classList.add('pizza-item');
  
      pizzaDiv.innerHTML = `
        <img src="${pizza.imagem}" alt="${pizza.nome}">
        <h3>${pizza.nome}</h3>
        <p>${pizza.descricao}</p>
        <p class="price">${pizza.preco}</p>
      `;
  
      pizzaList.appendChild(pizzaDiv);
    });
  }
  
  // Chama a função para renderizar o menu ao carregar a página
  document.addEventListener('DOMContentLoaded', renderMenu);
  