/* Craque do Saber — banco de perguntas
   Para acrescentar conteúdo: crie um novo campeonato dentro da matéria certa,
   ou uma nova matéria com seu esporte. Nada mais no jogo precisa ser mexido.
   Campos de cada pergunta:
     id   identificador único (não repetir)
     p    o enunciado
     op   as alternativas
     r    índice da alternativa certa (0, 1 ou 2)
     e    explicação curta mostrada depois da resposta
*/
window.BANCO = {
  versao: "2026-09-20",
  materias: [
    {
      id: "portugues", nome: "Português", esporte: "futebol", cor: "#15803d", cor2: "#22c55e",
      campeonatos: [
        {
          id: "p11", nome: "Vamos brincar de poesia?", sub: "Capítulo 11",
          perguntas: [
            {id:"p11-1", p:"Lá na Terra do Contrário, o cachorro faz que som?", op:["Miau","Au-au","Piu-piu"], r:0, e:"Lá tudo é invertido: o cachorro mia e o gatinho late."},
            {id:"p11-2", p:"Na Terra do Contrário, quem faz au-au?", op:["O gatinho","O cachorro","A vaca"], r:0, e:"O gatinho faz au-au e o canário late. Tudo trocado!"},
            {id:"p11-3", p:"Na Terra do Contrário, no verão faz...", op:["Muito calor","Frio","Neblina"], r:1, e:"No verão faz frio, porque lá tudo é ao contrário."},
            {id:"p11-4", p:"Como são as rodas dos carros na Terra do Contrário?", op:["Redondas","Quadradas","Invisíveis"], r:1, e:"Rodas quadradas: por isso quem viaja é quem fica parado."},
            {id:"p11-5", p:"De que é feito o telhado das casas na Terra do Contrário?", op:["Pudim","Telha","Palha"], r:0, e:"Telhado de pudim, porão de sorvete e fechadura de chocolate."},
            {id:"p11-6", p:"No poema, quem entrou no bar e pediu um guaraná?", op:["A vaca","O gafanhoto","A borboleta"], r:0, e:"Uma vaca entrou num bar e pediu um guaraná."},
            {id:"p11-7", p:"Quem era o garçom do bar?", op:["Um cachorro","Um gafanhoto","Um canário"], r:1, e:"O garçom era um gafanhoto com cara de biscoito."},
            {id:"p11-8", p:"Como a vaca queria o guaraná?", op:["Quentinho","Bem geladinho","Sem canudinho"], r:1, e:"Ela quis bem geladinho, para beber de canudinho."},
            {id:"p11-9", p:"Além de leite e queijo, o que mais a vaca dá sem cobrar?", op:["Coalhada","Manteiga","Sorvete"], r:0, e:"Leite, queijo e coalhada — e ninguém paga por isso."},
            {id:"p11-10", p:"O que o gafanhoto usava como gravata?", op:["Uma flor","Uma borboleta","Uma fita"], r:1, e:"A gravata dele era uma borboleta, que saiu voando."},
            {id:"p11-11", p:"Todas as estrofes do poema \"Assim assado\" começam com...", op:["\"Era uma vez\"","\"Lá na Terra\"","\"Certo dia\""], r:0, e:"\"Era uma vez\" é a senha para entrar no mundo da imaginação."},
            {id:"p11-12", p:"Quando um texto começa com \"Era uma vez\", vem por aí...", op:["Uma história","Uma notícia","Uma receita"], r:0, e:"É assim que as histórias começam."},
            {id:"p11-13", p:"Menina que navega no sofá e voa na banheira é...", op:["Realidade","Fantasia","Notícia"], r:1, e:"Fantasia: só acontece na imaginação."},
            {id:"p11-14", p:"Cada linha de um poema se chama...", op:["Verso","Estrofe","Rima"], r:0, e:"Linha do poema = verso."},
            {id:"p11-15", p:"Um bloco de versos, separado dos outros por um espaço, é...", op:["Rima","Estrofe","Título"], r:1, e:"Vários versos juntos formam uma estrofe."},
            {id:"p11-16", p:"Canudinho e geladinho terminam com o mesmo som. Isso é...", op:["Rima","Verso","Sílaba"], r:0, e:"Palavras que terminam com o mesmo som rimam."},
            {id:"p11-17", p:"Qual é o diminutivo de COPO?", op:["Copão","Copinho","Copa"], r:1, e:"Diminutivo quer dizer pequeno: copinho."},
            {id:"p11-18", p:"Qual é o diminutivo de GRAVATA?", op:["Gravatinha","Gravatão","Gravataria"], r:0, e:"Gravata pequena é gravatinha."},
            {id:"p11-19", p:"Qual destas palavras se escreve com LH?", op:["Cachorro","Coalhada","Canudinho"], r:1, e:"Coa-LH-ada. Cachorro tem CH e canudinho tem NH."},
            {id:"p11-20", p:"Qual destas palavras se escreve com NH?", op:["Canudinho","Chuveiro","Telhado"], r:0, e:"Canudi-NH-o. Chuveiro tem CH e telhado tem LH."},
            {id:"p11-21", p:"Como se separam as sílabas de CACHORRO?", op:["Ca-chor-ro","Cac-hor-ro","Cach-or-ro"], r:0, e:"O CH nunca se separa: ca-chor-ro."},
            {id:"p11-22", p:"Como se separam as sílabas de COALHADA?", op:["Co-al-ha-da","Co-a-lha-da","Coa-lha-da"], r:1, e:"O LH anda sempre junto: co-a-lha-da."},
            {id:"p11-23", p:"Qual destas palavras tem CH?", op:["Abelha","Mochila","Aranha"], r:1, e:"Mo-CH-ila. Abelha tem LH e aranha tem NH."},
            {id:"p11-24", p:"No poema, CANUDINHO quer dizer...", op:["Um canudo pequeno","Um canudo enorme","Um copo"], r:0, e:"O -inho indica coisa pequena."}
          ]
        },
        {
          id: "p12", nome: "Criança na cozinha?", sub: "Capítulo 12",
          perguntas: [
            {id:"p12-1", p:"Quem escreveu o texto \"Criança na cozinha?\"", op:["A psicóloga Rosely Sayão","A Clara","O Thi"], r:0, e:"Rosely Sayão é psicóloga e escreveu dando a opinião dela."},
            {id:"p12-2", p:"Para a autora, criança deve cozinhar?", op:["Sim","Não","Só depois dos 12 anos"], r:0, e:"Ela diz que criança na cozinha é o máximo."},
            {id:"p12-3", p:"Fazer uma comidinha para outra pessoa é, para a autora, parecido com...", op:["Um castigo","Um carinho","Uma obrigação"], r:1, e:"Cozinhar para alguém é mais ou menos como fazer um carinho nela."},
            {id:"p12-4", p:"Texto em que a pessoa diz o que pensa sobre um assunto chama-se...", op:["Texto de opinião","Receita","Poema"], r:0, e:"É o texto de opinião."},
            {id:"p12-5", p:"Segundo o texto, até a criança ter prática ela precisa...", op:["De um adulto por perto","Ficar sozinha","De um livro de receitas"], r:0, e:"Um adulto fica ao lado até a criança pegar prática."},
            {id:"p12-6", p:"Por que muitos pais não deixam o filho cozinhar?", op:["Medo da faca e do fogão","Porque é caro","Porque é proibido"], r:0, e:"Medo de corte, de queimadura — e da bagunça."},
            {id:"p12-7", p:"A autora aposta que a criança conhece mais nomes de...", op:["Verduras","Jogos de video game","Frutas"], r:1, e:"É o desafio do texto: mais jogos do que legumes."},
            {id:"p12-8", p:"Quantos anos tem o Thi?", op:["7 anos","8 anos","10 anos"], r:0, e:"Thi tem 7 anos e ajuda a avó."},
            {id:"p12-9", p:"Qual é o prato preferido do Thi?", op:["Bife com fritas","Lasanha à bolonhesa","Salada de frutas"], r:1, e:"Lasanha à bolonhesa, com uma cenourinha crocante."},
            {id:"p12-10", p:"Quem come verduras e legumes desde bebê?", op:["Isaac","Thi","Mel"], r:0, e:"O Isaac: brócolis, chuchu, beterraba, couve-flor."},
            {id:"p12-11", p:"Quem acha complicado cortar, separar e juntar os ingredientes?", op:["Thi","Isaac","Mel"], r:2, e:"A Melina, a Mel."},
            {id:"p12-12", p:"No texto, \"não fazer feio\" quer dizer...", op:["Não passar vergonha","Não sujar a cozinha","Não gostar do prato"], r:0, e:"O próprio texto explica: ficar com vergonha."},
            {id:"p12-13", p:"O que traz um texto de perfil?", op:["Nome, idade e o que a pessoa gosta","Só o nome","Uma receita"], r:0, e:"Apresentação, respostas e alguma curiosidade."},
            {id:"p12-14", p:"Na palavra PRATO, onde está o R?", op:["No meio da sílaba","No fim da palavra","Sozinho"], r:0, e:"PRA-TO: o R fica no meio da sílaba, junto do P."},
            {id:"p12-15", p:"Em qual destas palavras o L está no meio da sílaba?", op:["Feijão","Floresta","Cozinha"], r:1, e:"FLO-RES-TA: o L está junto do F."},
            {id:"p12-16", p:"PANO com L depois do P fica...", op:["Palno","Plano","Panlo"], r:1, e:"P + L = PLA. Vira plano."},
            {id:"p12-17", p:"CARA com L depois do C fica...", op:["Clara","Calra","Carla"], r:0, e:"C + L = CLA. Vira Clara."},
            {id:"p12-18", p:"Em qual palavra o X tem som de CH?", op:["Táxi","Xícara","Exemplo"], r:1, e:"Xícara e peixe: o X soa como CH."},
            {id:"p12-19", p:"Em qual palavra o X tem som de Z?", op:["Exemplo","Xícara","Peixe"], r:0, e:"Exemplo se lê \"ezemplo\"."},
            {id:"p12-20", p:"O X de TÁXI tem o som de...", op:["CH","KS","Z"], r:1, e:"Tá-KS-i. O mesmo som de \"táxi\"."},
            {id:"p12-21", p:"Na cantiga, o caranguejo só é peixe quando...", op:["Na enchente da maré","No rio","Nunca"], r:0, e:"\"Caranguejo só é peixe na enchente da maré.\""},
            {id:"p12-22", p:"Para que serve a pirâmide alimentar?", op:["Mostrar quanto comer de cada alimento","Ensinar receitas","Mostrar preços"], r:0, e:"Ela indica as porções de cada grupo por dia."},
            {id:"p12-23", p:"Quantas refeições por dia o texto recomenda?", op:["3","6","10"], r:1, e:"Café, almoço, jantar e 3 lanches: 6 no total."},
            {id:"p12-24", p:"O que dá energia para o corpo fazer as atividades do dia?", op:["Os alimentos","O sono","A televisão"], r:0, e:"A alimentação dá energia e mantém a gente forte."}
          ]
        },
        {
          id: "p13", nome: "História da vida real", sub: "Capítulo 13",
          perguntas: [
            {id:"p13-1", p:"Em que estado mora o menino Dó?", op:["No Ceará","No Rio de Janeiro","Em São Paulo"], r:0, e:"Nova Olinda, no sertão do Cariri, no Ceará."},
            {id:"p13-2", p:"Como são chamados os meninos no Cariri cearense?", op:["Craques","Cabinhas","Vaqueiros"], r:1, e:"Cabinhas — de \"caba\", que é menino no falar sertanejo."},
            {id:"p13-3", p:"Qual é a diversão dos meninos na reportagem?", op:["Apostar corrida de jumento","Jogar bola","Nadar no rio"], r:0, e:"Eles procuram jumentos no mato e apostam corrida."},
            {id:"p13-4", p:"Andar no lombo do animal é o mesmo que...", op:["Puxar o animal","Estar montado no animal","Andar do lado dele"], r:1, e:"Lombo é as costas do animal: estar montado."},
            {id:"p13-5", p:"Quem perde a corrida tem que...", op:["Voltar puxando o jumento","Pagar uma prenda","Correr de novo"], r:0, e:"Perdeu, volta para casa a pé, puxando o jumento."},
            {id:"p13-6", p:"O jumento do Dó obedece a comandos. Ele faz o quê?", op:["Só corre","Senta, deita, anda, corre e pula","Nada e voa"], r:1, e:"Dó amansou o jumento desde filhote."},
            {id:"p13-7", p:"Do que o Dó gosta mais no jumento?", op:["Quando ele dá pulos","Quando ele dorme","Quando ele come"], r:0, e:"\"Gosto mais quando o jumento dá pulos.\""},
            {id:"p13-8", p:"Um texto que conta um fato da vida real e sai no jornal é...", op:["Uma reportagem","Um conto","Um poema"], r:0, e:"Reportagem conta história da vida real."},
            {id:"p13-9", p:"A história do Dó é...", op:["Inventada","Da vida real","Um conto de fadas"], r:1, e:"Aconteceu de verdade e virou reportagem."},
            {id:"p13-10", p:"Qual é o nome científico do jumento?", op:["Equus asinus","Canis lupus","Felis catus"], r:0, e:"Equus asinus."},
            {id:"p13-11", p:"O jumento também pode ser chamado de...", op:["Asno-doméstico","Potro","Novilho"], r:0, e:"Muda o nome conforme a região."},
            {id:"p13-12", p:"O que as pessoas acham que é teimosia do jumento, na verdade é...", op:["Preguiça","Sensação de perigo","Fome"], r:1, e:"Ele tem um enorme senso de sobrevivência."},
            {id:"p13-13", p:"Quando sente perigo, o jumento...", op:["Empaca","Sai correndo","Late"], r:0, e:"Empaca ao menor sinal de alerta."},
            {id:"p13-14", p:"Qual destas é qualidade do CAVALO?", op:["Resistência","Velocidade","Teimosia"], r:1, e:"Cavalo: agilidade e velocidade."},
            {id:"p13-15", p:"Qual destas é qualidade do JUMENTO?", op:["Resistência","Velocidade","Agilidade"], r:0, e:"Jumento: força e resistência fora do comum."},
            {id:"p13-16", p:"Quem pintou a tela do burrinho correndo?", op:["Anita Malfatti","Tarsila do Amaral","Portinari"], r:0, e:"Foi a primeira obra de Anita Malfatti."},
            {id:"p13-17", p:"Anita assinou a tela com o apelido de família...", op:["Babynha","Nita","Malfa"], r:0, e:"\"Babynha\" é a assinatura da tela."},
            {id:"p13-18", p:"Quantos anos Anita tinha quando pintou essa tela?", op:["15","20","30"], r:1, e:"Ela tinha apenas 20 anos."},
            {id:"p13-19", p:"Qual é o aumentativo de GATO?", op:["Gatinho","Gatão","Gatuno"], r:1, e:"O ÃO aumenta: gatão."},
            {id:"p13-20", p:"Qual é o aumentativo de BLUSA?", op:["Blusinha","Blusão","Blusada"], r:1, e:"Blusa grande é blusão."},
            {id:"p13-21", p:"\"Meu pai é um paizão\" quer dizer que ele é...", op:["Um pai muito bom","Um pai muito alto","Um pai gordo"], r:0, e:"Aqui o ÃO reforça a qualidade, não o tamanho."},
            {id:"p13-22", p:"Qual destas palavras com ÃO NÃO é aumentativo?", op:["Peixão","Gatão","Caminhão"], r:2, e:"Caminhão não é um caminho grande: é outro objeto."},
            {id:"p13-23", p:"CAMINHO com ÃO vira CAMINHÃO, que é...", op:["Um veículo","Um caminho grande","Uma estrada"], r:0, e:"O ÃO mudou o significado da palavra."},
            {id:"p13-24", p:"Segundo o texto, o jumento sempre foi fundamental para...", op:["Os trabalhos pesados do campo","Correr no circo","Guardar a casa"], r:0, e:"Ele carrega carga e puxa arado: animal de carga e de tração."}
          ]
        }
      ]
    },
    {
      id: "matematica", nome: "Matemática", esporte: "basquete", cor: "#c2410c", cor2: "#fb923c",
      campeonatos: [
        {
          id: "m01", nome: "Números até 100", sub: "Contar, comparar e juntar",
          perguntas: [
            {id:"m01-1", p:"Quanto é 7 + 5?", op:["11","12","13"], r:1, e:"7 + 5 = 12. Conte 5 depois do 7: 8, 9, 10, 11, 12."},
            {id:"m01-2", p:"Quanto é 15 - 6?", op:["9","8","11"], r:0, e:"15 - 6 = 9."},
            {id:"m01-3", p:"Qual número é MAIOR?", op:["48","84","18"], r:1, e:"84 tem 8 dezenas; 48 tem só 4 e 18 tem 1."},
            {id:"m01-4", p:"O número 36 tem quantas dezenas?", op:["3 dezenas e 6 unidades","6 dezenas e 3 unidades","36 dezenas"], r:0, e:"No 36, o 3 vale 30 e o 6 vale 6."},
            {id:"m01-5", p:"Qual é o número que vem depois do 79?", op:["78","80","90"], r:1, e:"Depois do 79 vem o 80."},
            {id:"m01-6", p:"Complete a sequência: 2, 4, 6, 8, ...", op:["9","10","12"], r:1, e:"Está pulando de 2 em 2: depois do 8 vem o 10."},
            {id:"m01-7", p:"Qual destes números é PAR?", op:["7","13","14"], r:2, e:"Números pares terminam em 0, 2, 4, 6 ou 8."},
            {id:"m01-8", p:"Quanto é o dobro de 8?", op:["16","10","4"], r:0, e:"O dobro é duas vezes: 8 + 8 = 16."},
            {id:"m01-9", p:"Qual é a metade de 10?", op:["20","5","2"], r:1, e:"Metade é dividir em duas partes iguais: 5 e 5."},
            {id:"m01-10", p:"Tenho 20 figurinhas e dou 7. Com quantas fico?", op:["13","12","27"], r:0, e:"20 - 7 = 13."},
            {id:"m01-11", p:"Quanto é 10 + 10 + 10?", op:["30","20","110"], r:0, e:"Três dezenas formam 30."},
            {id:"m01-12", p:"Quantos lados tem um triângulo?", op:["3","4","5"], r:0, e:"Tri quer dizer três."},
            {id:"m01-13", p:"Qual figura tem 4 lados iguais?", op:["Quadrado","Triângulo","Círculo"], r:0, e:"O quadrado tem os 4 lados do mesmo tamanho."},
            {id:"m01-14", p:"Quantos minutos tem uma hora?", op:["30","60","100"], r:1, e:"Uma hora tem 60 minutos."},
            {id:"m01-15", p:"Quantos dias tem uma semana?", op:["5","7","10"], r:1, e:"Sete dias, de domingo a sábado."},
            {id:"m01-16", p:"Duas moedas de 50 centavos formam quanto?", op:["1 real","50 centavos","2 reais"], r:0, e:"50 + 50 = 100 centavos, que é 1 real."},
            {id:"m01-17", p:"Quanto é 9 + 9?", op:["18","19","17"], r:0, e:"9 + 9 = 18."},
            {id:"m01-18", p:"Numa cesta de basquete valendo 2 pontos, 3 cestas dão quantos pontos?", op:["5","6","9"], r:1, e:"3 vezes 2 = 6 pontos."},
            {id:"m01-19", p:"Qual é o antecessor do 40? (o que vem antes)", op:["41","39","30"], r:1, e:"Antes do 40 vem o 39."},
            {id:"m01-20", p:"Quanto é 100 - 50?", op:["50","40","150"], r:0, e:"Metade de 100 é 50."}
          ]
        }
      ]
    },
    {
      id: "ciencias", nome: "Ciências", esporte: "vôlei", cor: "#0e7490", cor2: "#22d3ee",
      campeonatos: [
        {
          id: "c01", nome: "Seres vivos e o corpo", sub: "Plantas, animais e saúde",
          perguntas: [
            {id:"c01-1", p:"Qual parte da planta fica embaixo da terra e segura a planta?", op:["A raiz","A folha","A flor"], r:0, e:"A raiz segura a planta e busca água no solo."},
            {id:"c01-2", p:"Do que a planta precisa para crescer?", op:["Água, luz do sol e ar","Só de água","Só de terra"], r:0, e:"Água, luz e ar — por isso plantinha no escuro não vai bem."},
            {id:"c01-3", p:"Qual destes NÃO é um ser vivo?", op:["A pedra","O cachorro","A árvore"], r:0, e:"Ser vivo nasce, cresce e morre. Pedra não faz nada disso."},
            {id:"c01-4", p:"Animais que mamam quando são bebês são chamados de...", op:["Mamíferos","Aves","Peixes"], r:0, e:"Cachorro, gato, vaca e até você são mamíferos."},
            {id:"c01-5", p:"Que animal põe ovo e tem penas?", op:["A galinha","O jumento","O peixe"], r:0, e:"Aves têm penas, bico e põem ovos."},
            {id:"c01-6", p:"Com qual sentido sentimos o cheiro das coisas?", op:["Olfato","Paladar","Tato"], r:0, e:"O olfato é o sentido do nariz."},
            {id:"c01-7", p:"Usamos a língua para sentir o...", op:["Sabor","Cheiro","Som"], r:0, e:"O paladar é o sentido do gosto."},
            {id:"c01-8", p:"Quando a água fica muito gelada, ela vira...", op:["Gelo","Vapor","Areia"], r:0, e:"No congelador a água vira gelo, que é sólido."},
            {id:"c01-9", p:"Quando a água ferve, sai uma fumacinha que é o...", op:["Vapor","Gelo","Óleo"], r:0, e:"A água quente evapora e vira vapor."},
            {id:"c01-10", p:"Por que existe o dia e a noite?", op:["Porque a Terra gira","Porque o Sol dorme","Porque a Lua empurra o Sol"], r:0, e:"A Terra gira; o lado virado para o Sol fica de dia."},
            {id:"c01-11", p:"Qual destes alimentos é mais saudável para comer todo dia?", op:["Frutas e verduras","Refrigerante","Bala"], r:0, e:"Frutas e verduras dão vitaminas."},
            {id:"c01-12", p:"Por que devemos lavar as mãos antes de comer?", op:["Para tirar os micróbios","Para ficar com a mão molhada","Porque a comida gosta"], r:0, e:"Lavar as mãos tira germes que dão doença."},
            {id:"c01-13", p:"Quantos dentes de leite a gente troca na infância?", op:["Todos eles","Nenhum","Só um"], r:0, e:"Os dentes de leite caem e nascem os permanentes."},
            {id:"c01-14", p:"Para que servem os pulmões?", op:["Para respirar","Para comer","Para pensar"], r:0, e:"Os pulmões pegam o ar que a gente respira."},
            {id:"c01-15", p:"Que órgão bombeia o sangue pelo corpo?", op:["O coração","O estômago","O cérebro"], r:0, e:"O coração é uma bomba que nunca para."},
            {id:"c01-16", p:"O que é lixo reciclável?", op:["O que pode virar outra coisa","O que está sujo","O que é pesado"], r:0, e:"Papel, plástico, vidro e metal podem ser reaproveitados."},
            {id:"c01-17", p:"Qual bicho faz o mel?", op:["A abelha","A formiga","A borboleta"], r:0, e:"As abelhas fazem mel a partir do néctar das flores."},
            {id:"c01-18", p:"A borboleta, antes de voar, é uma...", op:["Lagarta","Minhoca","Aranha"], r:0, e:"A lagarta vira casulo e depois borboleta."},
            {id:"c01-19", p:"Onde os peixes respiram?", op:["Na água, pelas guelras","No ar, pelo nariz","Não respiram"], r:0, e:"As guelras pegam o oxigênio da água."},
            {id:"c01-20", p:"Por que não devemos desperdiçar água?", op:["Porque água limpa é preciosa","Porque a água acaba no domingo","Porque molha o chão"], r:0, e:"Água doce e limpa é pouca no planeta."}
          ]
        }
      ]
    },
    {
      id: "mundo", nome: "História e Geografia", esporte: "queimada", cor: "#6d28d9", cor2: "#a78bfa",
      campeonatos: [
        {
          id: "h01", nome: "Meu lugar no mundo", sub: "Tempo, espaço e convivência",
          perguntas: [
            {id:"h01-1", p:"Qual é a capital do Ceará?", op:["Fortaleza","Recife","Natal"], r:0, e:"Fortaleza é a capital do estado do Ceará."},
            {id:"h01-2", p:"Em que país fica o Ceará?", op:["Brasil","Portugal","Argentina"], r:0, e:"O Ceará é um dos estados do Brasil."},
            {id:"h01-3", p:"Quais são as cores da bandeira do Brasil?", op:["Verde, amarelo, azul e branco","Vermelho e branco","Azul e laranja"], r:0, e:"Verde, amarelo, azul e branco."},
            {id:"h01-4", p:"Quantos meses tem um ano?", op:["12","10","7"], r:0, e:"De janeiro a dezembro são 12 meses."},
            {id:"h01-5", p:"Qual é o primeiro mês do ano?", op:["Janeiro","Março","Dezembro"], r:0, e:"O ano começa em janeiro."},
            {id:"h01-6", p:"Qual dia vem depois da terça-feira?", op:["Quarta-feira","Segunda-feira","Sábado"], r:0, e:"Segunda, terça, quarta..."},
            {id:"h01-7", p:"Lugar com muitos prédios, ruas e lojas é a zona...", op:["Urbana","Rural","Marítima"], r:0, e:"Zona urbana é a cidade; rural é o campo."},
            {id:"h01-8", p:"Na zona rural, é comum encontrar...", op:["Plantações e animais de criação","Shoppings","Metrô"], r:0, e:"No campo há roças, sítios e criação de animais."},
            {id:"h01-9", p:"Qual destes é um meio de transporte?", op:["O ônibus","A geladeira","O caderno"], r:0, e:"Transporte leva pessoas e cargas de um lugar a outro."},
            {id:"h01-10", p:"Qual destes é um meio de comunicação?", op:["O telefone","A cadeira","O sapato"], r:0, e:"Comunicação serve para enviar e receber mensagens."},
            {id:"h01-11", p:"Uma paisagem NATURAL é aquela...", op:["Feita pela natureza","Construída por pessoas","Pintada num quadro"], r:0, e:"Mata, rio e praia são naturais; prédio e ponte são construídos."},
            {id:"h01-12", p:"O que é uma família?", op:["Pessoas que convivem e cuidam umas das outras","Só pai, mãe e filho","Pessoas que moram na mesma rua"], r:0, e:"Existem muitos tipos de família, e todas valem."},
            {id:"h01-13", p:"Para que serve uma regra na escola?", op:["Para todos conviverem bem","Para atrapalhar","Para ninguém brincar"], r:0, e:"As regras organizam a convivência."},
            {id:"h01-14", p:"O que é um ponto de referência?", op:["Algo que ajuda a encontrar um lugar","Um ponto de caneta","Um lugar secreto"], r:0, e:"A padaria da esquina, a igreja, a praça."},
            {id:"h01-15", p:"Como as pessoas viajavam antes do carro?", op:["A pé, a cavalo ou de carroça","De avião","De metrô"], r:0, e:"Animais e a própria perna eram o transporte."},
            {id:"h01-16", p:"Onde a gente pode descobrir como era a vida antigamente?", op:["Em fotos, museus e histórias dos mais velhos","Só na internet","Em lugar nenhum"], r:0, e:"Fotos, objetos e a memória das pessoas contam o passado."},
            {id:"h01-17", p:"Quem trabalha plantando e colhendo alimentos?", op:["O agricultor","O dentista","O piloto"], r:0, e:"O agricultor cuida da lavoura."},
            {id:"h01-18", p:"O que é um documento de identidade?", op:["Um papel que mostra quem somos","Uma carta","Um bilhete"], r:0, e:"Certidão de nascimento e RG dizem quem a pessoa é."},
            {id:"h01-19", p:"Qual destes é um direito de toda criança?", op:["Estudar","Trabalhar o dia todo","Dirigir carro"], r:0, e:"Criança tem direito à escola, à saúde e a brincar."},
            {id:"h01-20", p:"O sertão do Ceará é uma região de clima...", op:["Quente e seco","Frio e com neve","Gelado o ano todo"], r:0, e:"No sertão faz calor e chove pouco."}
          ]
        }
      ]
    }
  ]
};
