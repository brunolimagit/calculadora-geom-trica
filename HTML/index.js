function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
  }
  
  function calcularAreaRetangulo(base, altura) {
    return base * altura;
  }
  
  function calcularAreaQuadrado(lado) {
    return lado * lado;
  }
  
  function calcularAreaTrapezio(baseMaior, baseMenor, altura) {
    return ((baseMaior + baseMenor) * altura) / 2;
  }
  
  function calcularAreaCirculo(raio) {
    const pi = 3.14;
    return pi * raio * raio;
  }
  
  function mostrarMenu() {
    return parseInt(prompt(
      "Escolha uma opção:\n" +
      "1. Área do Triângulo\n" +
      "2. Área do Retângulo\n" +
      "3. Área do Quadrado\n" +
      "4. Área do Trapézio\n" +
      "5. Área do Círculo\n" +
      "6. Sair"
    ));
  }
  
  function calcularAreas() {
    let opcao;
  
    do {
      opcao = mostrarMenu();
  
      switch (opcao) {
        case 1:
          const baseTriangulo = parseFloat(prompt("Informe a base do triângulo:"));
          const alturaTriangulo = parseFloat(prompt("Informe a altura do triângulo:"));
          alert("A área do triângulo é: " + calcularAreaTriangulo(baseTriangulo, alturaTriangulo));
          break;
        case 2:
          const baseRetangulo = parseFloat(prompt("Informe a base do retângulo:"));
          const alturaRetangulo = parseFloat(prompt("Informe a altura do retângulo:"));
          alert("A área do retângulo é: " + calcularAreaRetangulo(baseRetangulo, alturaRetangulo));
          break;
        case 3:
          const ladoQuadrado = parseFloat(prompt("Informe o lado do quadrado:"));
          alert("A área do quadrado é: " + calcularAreaQuadrado(ladoQuadrado));
          break;
        case 4:
          const baseMaiorTrapezio = parseFloat(prompt("Informe a base maior do trapézio:"));
          const baseMenorTrapezio = parseFloat(prompt("Informe a base menor do trapézio:"));
          const alturaTrapezio = parseFloat(prompt("Informe a altura do trapézio:"));
          alert("A área do trapézio é: " + calcularAreaTrapezio(baseMaiorTrapezio, baseMenorTrapezio, alturaTrapezio));
          break;
        case 5:
          const raioCirculo = parseFloat(prompt("Informe o raio do círculo:"));
          alert("A área do círculo é: " + calcularAreaCirculo(raioCirculo));
          break;
        case 6:
          alert("Saindo...");
          break;
        default:
          alert("Opção inválida! Tente novamente.");
      }
    } while (opcao !== 6);
  }
  
  calcularAreas();
  