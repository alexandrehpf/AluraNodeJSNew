const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const nomesAtualizados = new Set(nomes);

// nomesAtualizados.push('Juliana'); // Erro
// nomesAtualizados.add('Juliana');

const listaNomesAtualizados = [...new Set(nomes)];

// console.log(nomesAtualizados);
console.log(listaNomesAtualizados);