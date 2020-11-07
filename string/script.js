// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
    {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
    },
    {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
    },
    {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
    },
    {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
    },
    {
    descricao: 'Recebimento do Cliente',
    valor: 'R$ 49',
    },
    ];

    let taxaTotal = 0
    let ReceTotal = 0

    transacoes.forEach((item)=>{
        const numeroLimpo = +item.valor.replace('R$', '');

        if(item.descricao.slice(0,4) ==='Taxa'){
            taxaTotal += numeroLimpo;
        }else if(item.descricao.slice(0,4) ==='Rece'){
            ReceTotal += numeroLimpo;
        }
    })

    console.log(taxaTotal)
    console.log(ReceTotal)
    


    // Retorne uma array com a lista abaixo
    const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

    const arrayTransporte = transportes.split(';')
    console.log(arrayTransporte)


    // Substitua todos os span's por a's
    const html = `<ul>
    <li><span>Sobre</span></li>
    <li><span>Produtos</span></li>
    <li><span>Contato</span></li>
    </ul>`;

    const Mudar = html.split('span')
    const Mudar2 = Mudar.join('a')
    console.log(Mudar2)

    // Retorne o último caracter da frase
    const frase = 'Melhor do ano!';
    console.log(frase.charAt(frase.length-1))


    // Retorne o total de taxas
    const transacoes2 = ['Taxa do Banco', ' TAXA DO PÃO', ' taxado mercado', 'depósito Bancário', 'TARIFA especial'];

    let TaxaTotal = 0
    transacoes2.forEach((item)=>{
        item = item.toLowerCase()
        item = item.trim();
        item = item.slice(0,4);

        if(item === 'taxa')
        taxaTotal++
    })

    console.log(taxaTotal)