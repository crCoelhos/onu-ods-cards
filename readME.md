# Biblioteca de Ícones ODS

Esta é uma biblioteca de ícones para os Objetivos de Desenvolvimento Sustentável (ODS) que pode ser facilmente utilizada em projetos React. Os cards estão disponíveis como componentes SVG, permitindo fácil personalização e escalabilidade.

## Instalação

Para instalar a biblioteca, use um package manager como npm ou yarn:

```bash
npm install un-ods-cards
```

e

```bash
yarn install un-ods-cards
```

## Uso

Para usar o ícone em seu componente, você pode fazer a declaração no modelo convencional:

```tsx
import { OdsCard1 } from "un-ods-cards";

const MeuComponenteExemplo = () => (
  <div>
    <OdsCard1 />
  </div>
);

export default MeuComponenteExemplo;
```

## Propriedades adicionais

| Propriedade | Tipo    | Padrão | Descrição                                              | Exemplo                              |
| ----------- | ------- | ------ | ------------------------------------------------------ | ------------------------------------ |
| size        | number  | 512    | Define o tamanho do ícone em pixels.                   | `tsx <OdsCard1 size={128} /> `       |
| showTitle   | boolean | false  | Se true, exibe o título do ícone como uma tag <title>. | `tsx <OdsCard1 showTitle={true} /> ` |

### componentes

| #   | ODS                                      | Default Title                                | Code            |
| --- | ---------------------------------------- | -------------------------------------------- | --------------- |
| 1   | Erradicação da Pobreza                   | 1 - ERRADICAÇÃO DA POBREZA                   | `<OdsCard1 />`  |
| 2   | Fome Zero e Agricultura Sustentável      | 2 - FOME ZERO E AGRICULTURA SUSTENTÁVEL      | `<OdsCard2 />`  |
| 3   | Saúde e Bem-Estar                        | 3 - SAÚDE E BEM-ESTAR                        | `<OdsCard3 />`  |
| 4   | Educação de Qualidade                    | 4 - EDUCAÇÃO DE QUALIDADE                    | `<OdsCard4 />`  |
| 5   | Igualdade de Gênero                      | 5 - IGUALDADE DE GÊNERO                      | `<OdsCard5 />`  |
| 6   | Água Limpa e Saneamento                  | 6 - ÁGUA LIMPA E SANEAMENTO                  | `<OdsCard6 />`  |
| 7   | Energia Limpa e Acessível                | 7 - ENERGIA LIMPA E ACESSÍVEL                | `<OdsCard7 />`  |
| 8   | Trabalho Decente e Crescimento Econômico | 8 - TRABALHO DECENTE E CRESCIMENTO ECONÔMICO | `<OdsCard8 />`  |
| 9   | Indústria, Inovação e Infraestrutura     | 9 - INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA     | `<OdsCard9 />`  |
| 10  | Redução das Desigualdades                | 10 - REDUÇÃO DAS DESIGUALDADES               | `<OdsCard10 />` |
| 11  | Cidades e Comunidades Sustentáveis       | 11 - CIDADES E COMUNIDADES SUSTENTÁVEIS      | `<OdsCard11 />` |
| 12  | Consumo e Produção Responsáveis          | 12 - CONSUMO E PRODUÇÃO RESPONSÁVEIS         | `<OdsCard12 />` |
| 13  | Ação Contra a Mudança Global do Clima    | 13 - AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA   | `<OdsCard13 />` |
| 14  | Vida na Água                             | 14 - VIDA NA ÁGUA                            | `<OdsCard14 />` |
| 15  | Vida Terrestre                           | 15 - VIDA TERRESTRE                          | `<OdsCard15 />` |
| 16  | Paz, Justiça e Instituições Eficazes     | 16 - PAZ, JUSTIÇA E INSTITUIÇÕES EFICAZES    | `<OdsCard16 />` |
| 17  | Parcerias e Meios de Implementação       | 17 - PARCERIAS E MEIOS DE IMPLEMENTAÇÃO      | `<OdsCard17 />` |
