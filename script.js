// Função para carregar as tarefas do LocalStorage
function carregarTarefas() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const lista = document.getElementById('listaTarefas');
    lista.innerHTML = ''; // Limpa a lista de tarefas antes de atualizá-la
    tarefas.forEach((item, index) => {
        const li = document.createElement('li');
        
        // Adiciona o nome da tarefa
        li.textContent = `${item.tarefa} (Adicionado em: ${item.dataHora})`;
        
        // Cria o botão de remoção
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerTarefa(index);

        // Adiciona o botão de remoção ao item de lista
        li.appendChild(btnRemover);
        
        // Adiciona o item de lista à lista
        lista.appendChild(li);
    });
}

// Função para adicionar uma tarefa
function adicionarTarefa() {
    const tarefaInput = document.getElementById('tarefa');
    const tarefa = tarefaInput.value.trim();
    if (tarefa) {
        const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        const dataHora = new Date().toLocaleString(); // Obtém a data e a hora atuais
        tarefas.push({ tarefa, dataHora });
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        tarefaInput.value = '';
        carregarTarefas();
    }
}

// Função para remover uma tarefa
function removerTarefa(index) {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.splice(index, 1); // Remove a tarefa com o índice especificado
    localStorage.setItem('tarefas', JSON.stringify(tarefas)); // Atualiza o localStorage
    carregarTarefas(); // Atualiza a lista visível
}

// Carregar as tarefas ao iniciar
carregarTarefas();
