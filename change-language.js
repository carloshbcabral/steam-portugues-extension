let linhas = document.querySelectorAll("#languageTable table tbody tr");
linhas.forEach(function(objeto, indice)
{
    let coluna = objeto.querySelector("td:first-child");
    if(coluna != null)
    {
        if (coluna.innerHTML.trim() == "Português (Brasil)")
        {
            coluna.innerHTML = "Português (Simplificado)";
        }
        if (coluna.innerHTML.trim() == "Português (Portugal)")
        {
            coluna.innerHTML = "Português (Tradicional)";
        }
    }
});