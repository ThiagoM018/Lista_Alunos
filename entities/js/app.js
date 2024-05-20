const aluno = [];
var i = -1;
var id = 0;
var alunosId = document.getElementById('alunosId');
var alunosNome = document.getElementById('alunosNome');

var aprovadosNome = document.getElementById('aprovadosNome');
var aprovadosNota = document.getElementById('aprovadosNota');

function Adicionar() {

    var nome = document.getElementById('Nome').value;
    var idade = document.getElementById('Idade').value;
    var nota = document.getElementById('Nota').value;
    var matricula = document.getElementById('Matricula').value;

    if (!nome){
        alert('Nome Inválido!')
    }
    else if(!idade){
        alert('Idade Inválida!');
    }
    else if(!nota){
        alert('Nota Inválida!')
    }
    else if(!matricula){
        alert('Matricula Inválida')
    }
    else{
        
        i++;
        id++;
        aluno.push ({
            Nome : nome,
            Idade : idade,
            Nota : nota,
            Matricula : matricula
        })

        alunosId.innerHTML += `${id} <br />`;
        alunosNome.innerHTML += `${aluno[i].Nome} <br />`;

        if(aluno[i].Nota >= 7 ){
            aprovadosNome.innerHTML += `${aluno[i].Nome} <br />`;
            aprovadosNota.innerHTML += `${aluno[i].Nota} <br />`
        }

        document.getElementById('Nome').value = '';
        document.getElementById('Idade').value = '';
        document.getElementById('Nota').value = '';
        document.getElementById('Matricula').value = '';

    }

}