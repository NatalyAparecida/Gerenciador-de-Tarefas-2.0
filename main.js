$(function(){
    $("#botao").click(inserirTarefa);
});

function inserirTarefa(){
    var tabela = $(".tarefas").find("tbody");
    var campoTitulo = $(".campoTitulo").val();
    var campoObs = $(".campoObs").val();
    var campoPri = $(".campoPri").val();
    var colunaConcluir = $(".colunaConcluir").val();

    if(campoTitulo.trim() === "" || campoObs.trim() === ""){
        alert("Preencha o título e a observação antes de cadastrar a tarefa.");
        return;
    }

    var linha = funLinha(campoTitulo, campoObs, campoPri);
    linha.find(".botaoDeletar").click(deletaLinha);
    tabela.append(linha);


    linha.find(".botaoDeletar").click(deletaLinha);
    tabela.append(linha);

    
    $(".campoTitulo").val("");
    $(".campoObs").val("");

    $(".campoTitulo").focus();

    alert("Tarefa cadastrada com sucesso!");
}


function funLinha(campoTitulo, campoObs, campoPri){ // função com parametro.
    var linha = $("<tr>");
    var colunaTarefa = $("<td>").text(campoTitulo);
    var colunaObs = $("<td>").text(campoObs);
     var colunaPri = $("<td>").text(campoPri);
     var colunaConcluir = $("<td>");
     var colunaConcluir = $("<td>").html(`
<label>
    <input type="checkbox" />
    <span></span>
</label>
`);

    var colunaDelete = $("<td>");

    var bDeletar = $("<a>").addClass("botaoDeletar").attr("href","#");
    var icone = $("<i>").addClass("material-icons").text("delete");
    bDeletar.append(icone)
    colunaDelete.append(bDeletar);

    linha.append(colunaTarefa);// anexa mais codigo
    linha.append(colunaObs);
    linha.append(colunaPri);
    linha.append(colunaConcluir);
    linha.append(colunaDelete);

    return linha

}

function deletaLinha(){
    event.preventDefault();
    $(this).parent().parent().remove();

}
