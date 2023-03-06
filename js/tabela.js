let tabela = document.getElementById('tabela');

let broj_redova = 10
let broj_kolona = 10

tabela.innerHTML = "";
rezultat = "";

rezultat = `
<tr>
    <th>
        /
    </th>

`;

for(let i = 1;i<=broj_redova; i++)
{
    rezultat += `<th>${i}</th>`
}

for(let i= 1; i<=broj_redova;i++)
{
    rezultat += `<tr>`
    rezultat += `<th>${i}</th>`

    for(let j=1;j<=broj_kolona;j++)
    {
        rezultat+=`<td>${i*j}</td>`;
    }
}

rezultat += `</tr>`



tabela.innerHTML = rezultat


