window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

function acaoOutras(elemento) {
    // Aqui você pode adicionar o código para executar quando o botão é clicado.
    // 'elemento' é uma referência ao botão que foi clicado.
    alert("Botão 'Outras Ações' clicado!");
    // Por exemplo, abrir um modal, redirecionar para outra página, etc.
}

function adicionarItem() {
    var categoria = document.getElementById("dropdownButton").value;
    var quantidade = document.getElementById("quantidadeInput").value;
    
    console.log(categoria);
    console.log(quantidade);

    if(categoria !== "Selecione a produto..." && quantidade > 0) {
        var tabela = document.getElementById("tabelaPedidos").getElementsByTagName('tbody')[0];
        var novaLinha = tabela.insertRow();
        var celulaCategoria = novaLinha.insertCell(0);
        var celulaQuantidade = novaLinha.insertCell(1);

        celulaCategoria.innerHTML = categoria;
        celulaQuantidade.innerHTML = quantidade;

        // Limpa os campos após adicionar
        document.getElementById("dropdownButton").selectedIndex = 0;
        document.getElementById("quantidadeInput").value = '';
    } else {
        alert("Por favor, selecione uma categoria e insira uma quantidade válida.");
    }
}

  


