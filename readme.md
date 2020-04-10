# Teoria Curso JS

### Comentários JavaScript e CSS
```  
  // - Essas duas barras server pra comentários numa única linha;
  /* */ - Selecione algumas linhas para comentar;
```

### Comentários HTML
 
``` !-- Comentário HTML--> ```


### Criando Variáveis 
  - var nome = 'nome';
  - variáveis primitivas: number, string, boolean;
  - typeof identifica o tipo de varável;

### Convertendo Variáveis 

  - Number.parseInt(n);
  - Number.parseFloat(n);
  - Number(n);
  - String(n);
  - n.toString()

### Manipulando Strings e numbers

  - var s = 'JavaScript'
  - 'Eu estou aprendendo s' // não faz interpolação;
  - 'Eu estou aprendendo' + s // usa concatenação;
  - `Eu estou aprendendo ${s}` // usa template string;
  -  s.length // quantos caracteres a string tem;
  - s.toUpperCase() // tudo para 'MAIÚSCULAS';
  - s.toLowerCase() // tudo para 'minúsculas';
  - n1.toFixed(2) // fixando duas casas decimais;
  - n1.toFixed().replace('.',',') // troca o ponto pela vírgula;
  - n1.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'}) // converte em Real;

###  Operadores Artméticos, Ternários
  #### Precedência: 
    1° - (); 
    2° - **; 
    3° - *, /, %;
    4° - + , - ;

  ####  Auto-atribuições:
    
  ```  
    var n = 3
    n = n + 4 // usando uma expressão mais simples;
    <n += 4> <n *= 4> <n **= 4>
    <n -= 4> <n /= 4> <n %= 4>
    
  ```
  ####  Incrementando variáveis em 1 unidade:
   
  ```` 
    <x++> => equivale x = x + 1 ou x += 1;
    <x--> => equivale x = x - 1 ou x -= 1;
    OBS: Operadores Ternários:
    TESTE ? TRUE : FALSE
````
### DOM - Document Object Model

  - Instala a extensão Watch Chrome no VsCode e Google  Chrome e Node Exec no VsCode;
 
  #### Árvore DOM => Todo site tem sua árvore  
  - Raiz DOM => window => objeto => janela do site 
  - Windows => objetos (location,document,historyobjetos)
  - document => Html, Head, Body

  #### Como selelecionar elementos no HTML

    1º por Marca == getElementsByTagName()[] plural Elements
    2º por ID == getElementById()
    3º por Nome == getElementsByName()
    4º por Classe == getElementsByClassName()
    5º por Seletor == querySelector('div#id ou div.class') ou querySelectorALl() plural

  #### Eventos DOM
    mouseenter, mousemove, mousedown, mouseup, click