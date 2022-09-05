# Notion social media content calendar

Este projeto existe porque existe a necessidade de gerar de forma automatizada um calendário de conteúdos para a publicação em redes sociais. 

Pensando em resolver este problema, o projeto nasceu com o objetivo de criar um aplicativo que consuma a API do Notion para gerar um calendário, atualizado com o ano corrente, considerando uma lista de tipos de conteúdos. Este projeto foi desenvolvido fazendo uso de NodeJs.

## Objetivos

Gerar um calendário que defina os conteúdos a serem publicados em cada dia da semana surgiu como uma necessidade quando o usuário foi utilizar uma planilha que comprou no passado, contendo o planejamento de conteúdos a serem publicados nas redes sociais. 

Contudo, para atualizar esta planilha para o ano corrente, demandaria esforço manual do usuário, então foi considerada a criação de um gerador de calendário atualizado, contendo um planejamento de conteúdos para redes sociais. 

## Requisitos de projeto

- [ ] Gerar um calendário atualizado no Notion, caso ainda não exista um. O calendário deverá possuir tags para filtro da rede social;
- [ ] Criar lista de tipos de conteúdos, contendo planejamentos diferentes para datas específicas e feriados;
- [ ] Desenvolver templates para roteiro de conteúdos considerando redes sociais e armazenar sob sessão do calendário, contendo planejamento.
- [ ] Publicar tipos de conteúdos no calendário, considerando horário de publicação e cores diferentes de acordo com o tipo de conteúdo. Também deverá ser criado um roteiro do conteúdo sob a sessão do calendário;

## Por onde começar

Para que você obtenha uma cópia do projeto em sua máquina local, você poderá fazer uma cópia através de um [clone](https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository).

Certifique-se de configurar o seu ambiente com as ferramentas, linguagens e frameworks utilizados. **Recomenda-se** o uso das versões utilizadas na matriz de compatibilidade. 

## Matriz de compatibilidade

| Ferramenta     | Versão suportada |
|----------------|:----------------:|
| Docker         |     X.X          |
| Docker-compose |     X.X          |
| NodeJs         |     X.X.X        |

## Configuração

### Obtendo configurações do Notion

#### Etapa 1: Criar uma integração.

1. Acesse https://www.notion.com/my-integrations.
2. Clique no botão "+ New integration".
3. Dê um nome à sua integração. 
4. Selecione a área de trabalho na qual deseja instalar essa integração.
5. Selecione os recursos que sua integração terá.
6. Clique em "Send" para criar a integração.
7. Copie o "Internal Integration Token" na próxima página e salve-o em algum lugar seguro, por exemplo um gerenciador de senhas.

#### Etapa 2 - Configurando o banco de dados

Inicialmente, as integrações não têm acesso a nenhuma página (ou banco de dados) no espaço de trabalho. Um usuário deve compartilhar páginas específicas com uma integração para que essas páginas sejam acessadas usando a API. Isso ajuda a manter você e as informações de sua equipe no Notion seguras.

Comece a partir de uma página nova ou existente em seu espaço de trabalho. Insira um novo banco de dados digitando */database* e selecionando uma tabela *full page*. Dê um título à tabela. Clique no botão *Share* e use o seletor para encontrar sua integração pelo nome e clique em *Invite*.

Sua integração agora tem as permissões solicitadas no novo banco de dados. Depois que uma integração é adicionada a um espaço de trabalho, qualquer membro pode compartilhar páginas e bancos de dados com essa integração - não há necessidade de ser um admin para esta etapa.

Antes de prosseguir, você precisa do ID do banco de dados que acabou de criar. Copie o URL do seu banco de dados Notion. Verifique se você está visualizando o banco de dados como uma página inteira se estiver usando um inline database.

Se você estiver usando o aplicativo de desktop Notion, clique no botão *Share* e selecione *Copy Link*.

O ID do banco de dados é a parte da URL após o nome do seu *workspace* (se você tiver um) e antes do ponto de interrogação (?). O ID tem 32 caracteres, contendo números e letras. Copie o ID e cole-o em algum lugar que você possa encontrar facilmente mais tarde.

Exemplo: 
>https://www.notion.so/myworkspace/a8aec43384f447ed84390e8e42c2e089?v=...
>                                 |--------- Database ID ----------|

### Configurando ambiente

Configure o arquivo .env conforme abaixo. Para mais detalhes, verifique a pasta do projeto.

```javascript
TO-DO
```

## Uso da aplicação

Para rodar a aplicação, execute o comando abaixo em um terminal:

```powershell
TO-DO
```

## Testes automatizados

Execute o comando abaixo em um terminal:

```powershell
TO-DO
```

## To-do

As seguintes funcionalidades ainda poderão ser implementadas:

- [ ] Gerar um calendário atualizado no Notion, caso ainda não exista um. O calendário deverá possuir tags para filtro da rede social;
- [ ] Criar lista de tipos de conteúdos;
- [ ] Publicar tipos de conteúdos no calendário, considerando horário de publicação e cores diferentes de acordo com o tipo de conteúdo.

## Como colaborar

Por favor, [colabore](https://gist.github.com/atalhox/adb28140d9c08ce4d2b3ea6ddbe21c63) para obter detalhes sobre o meu processo para nos enviar pedidos de solicitação.

## Versionamento

Faço uso do [SemVer](http://semver.org/) para controle de versão.

## Autor

Eu sou o Luis Felipe Brum, desenvolvedor Backend, com experiência em segurança da informação e arquitetura de integração.

<a href="https://www.felipebrum.com"><img src="https://avatars.githubusercontent.com/u/53919226"  width="40"> <a href="https://br.linkedin.com/in/luisfelipebrum"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"  width="40"> <a href="https://www.instagram.com/eunaoeradev"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"  width="40"> <a href="https://www.tiktok.com/@eunaoeradev"><img src="https://i.pinimg.com/originals/22/0a/62/220a624ba2fa59ddda4db763f474f50f.jpg"  width="40">
<a href="https://twitter.com/eunaoeradev"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" width="40">
  
## Colaboradores

| Colaborador   | Github |
|--------------|:----------------:|
| Luis Felipe Brum | [atalhox](https://github.com/atalhox) |

## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢
* Convide alguém da equipe para uma cerveja 🍺
* Agradecer publicamente 🤓.
