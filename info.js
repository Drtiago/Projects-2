let info1 = [
    { Titulo: "POP INSTALAÇÃO E CONF. INFOMED", Descricao: "Atualização em xx/xx/xxxx" },
    { Titulo: "POP INSTALAÇÃO KASPERSKY", Descricao: "Atualização em xx/xx/xxxx" },
    { Titulo: "POP INSTALAÇÃO PIRAMIDE", Descricao: "Atualização em xx/xx/xxxx" }
  ];
  
  function search(searchTerm) {
    // Filtrar info1 baseado no termo de busca (case-insensitive)
    const filteredInfo = info1.filter(item =>
      item.Titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Descricao.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Exibir mensagem de "Sem resultados" se a busca não encontrar nada
    if (filteredInfo.length === 0) {
      section.innerHTML = "Sem resultados";
    } else {
      // Atualizar section.innerHTML com os resultados filtrados (opcional)
      section.innerHTML = "Resultados da busca:"; // Título
      filteredInfo.forEach(item => {
        section.innerHTML += `<p>Título: ${item.Titulo}</p>`; // Exibir títulos
      });
    }
  }
  
  // Exemplo de uso (supondo que você tenha um input com id="searchBox")
  const searchBox = document.getElementById("searchBox");
  searchBox.addEventListener("keyup", () => {
    const searchTerm = searchBox.value;
    search(searchTerm);
  });
