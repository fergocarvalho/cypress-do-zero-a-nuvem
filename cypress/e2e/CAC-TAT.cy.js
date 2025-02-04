// describe('template spec', () => {
//  it('passes', () => {
//    cy.visit('https://example.cypress.io')
//  })
//})


// 'describe' é o nome da suite de testes e 'it' é o nome do teste
describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title()
      .should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('02.md - preenche os campos obrigatórios e envia o formulário', () => {
    //adiciona cada um dos selectores em um alias próprio
    //o alias é chamado novamente na sequência para fazer uma ação
    //e em seguida o alias é chamado novamente para fazer a verificação
    //esse formato é necessário para evitar que ocorram carregamentos inesperados na página e o seletor seja perdido nesse processo
    //a verificação sendo feita separadamente também é uma recomendação. de acordo com a documentação, a verificação nunca deve ocorrer após uma ação
    //também é interessante saber que não é correto utilizar duas ações em sequência
    //é melhorar separar cada ação chamando o alias novamente
    
    cy.get('span[class="success"] strong').as('success')

    cy.get('input[id="firstName"]').type('Nome01')
    cy.get('input[id="lastName"]').type('Nome02')
    cy.get('input[id="email').type('email@email.com')
    //o delay aqui é utilizado para simular a digitação de um texto, cada letra é digitada com um intervalo de 5ms
    cy.get('textarea[id="open-text-area"]').type('testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest', { delay: 5 }) 
    cy.get('button[type="submit"]').click()

    cy.get('@success').should('be.visible')
    cy.get('@success').should('have.text', 'Mensagem enviada com sucesso.')
  })

  it('02.md - exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    //aqui foi criada uma variável com um texto longo para ser inserido no campo de texto
    const longText = Cypress._.repeat('qwertyuiop', 10)

    cy.get('span[class="error"] strong').as('error')

    cy.get('input[id="firstName"]').type('Nome01')
    cy.get('input[id="lastName"]').type('Nome02')
    cy.get('input[id="email').type('email')
    // com o delay sendo 0 a digitação vai parecer instantânea
    cy.get('textarea[id="open-text-area"]').type(longText, { delay: 0 }) 
    cy.get('button[type="submit"]').click()

    cy.get('@error').should('be.visible')
    cy.get('@error').should('have.text', 'Valide os campos obrigatórios!')
  })

  it('02.md - Exercício extra 3', () => {
    cy.get('input[id="phone"]').type('test')
    cy.get('input[id="phone"]').should('have.value', '')
  })

  it('02.md - exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    const longText = Cypress._.repeat('qwertyuiop', 10)

    cy.get('span[class="error"] strong').as('error')

    cy.get('input[id="firstName"]').type('Nome01')
    cy.get('input[id="lastName"]').type('Nome02')
    cy.get('input[id="email').type('email@gmail.com')
    cy.get('input[id="phone-checkbox"]').check()
    cy.get('textarea[id="open-text-area"]').type(longText, { delay: 0 }) 
    cy.get('button[type="submit"]').click()

    cy.get('input[id="phone-checkbox"]').should('be.checked')
    cy.get('@error').should('be.visible')
    cy.get('@error').should('have.text', 'Valide os campos obrigatórios!')
  })

  it('02.md - preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('input[id="firstName"]').type('Nome01')
    cy.get('input[id="lastName"]').type('Nome02')
    cy.get('input[id="email').type('email@gmail.com')
    cy.get('input[id="phone"]').type('11921548789')

    cy.get('input[id="firstName"]').clear()
    cy.get('input[id="lastName"]').clear()
    cy.get('input[id="email').clear()
    cy.get('input[id="phone"]').clear()

    cy.get('input[id="firstName"]').should('have.text', '')
    cy.get('input[id="lastName"]').should('have.text', '')
    cy.get('input[id="email').should('have.text', '')
    cy.get('input[id="phone"]').should('have.text', '')
  })

  it('02.md - exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.get('span[class="error"] strong').as('error')

    cy.get('button[type="submit"]').click()

    cy.get('@error').should('be.visible')
    cy.get('@error').should('have.text', 'Valide os campos obrigatórios!')
  })

  it('02.md - envia o formuário com sucesso usando um comando customizado', () => {
    cy.get('span[class="success"] strong').as('success')
    // o comando customizado fillMandatoryFieldsAndSubmit foi adicionado arquivo cypress/support/commands.js
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('@success').should('be.visible')
    cy.get('@success').should('have.text', 'Mensagem enviada com sucesso.')
  })

  it('02.md - Exercício extra 8', () => {
    cy.get('span[class="success"] strong').as('success')
    
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('@success').should('be.visible')
    cy.get('@success').should('have.text', 'Mensagem enviada com sucesso.')
  })

  it('03.md - seleciona um produto (YouTube) por seu texto', () => {
    cy.get('select[id="product"]').select('YouTube')

    cy.get('select[id="product"]').should('have.value', 'youtube')
  })

  it('03.md - seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('select[id="product"]').select('mentoria')

    cy.get('select[id="product"]').should('have.value', 'mentoria')
  })

  it('03.md - seleciona um produto (Blog) por seu índice', () => {
    cy.get('select[id="product"]').select(1)

    cy.get('select[id="product"]').should('have.value', 'blog')
  })

  it('04.md - marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[value="feedback"]').check()

    cy.get('input[value="feedback"]').should('be.checked')
  })

  it('04.md - marca cada tipo de atendimento', () => {
    cy.get('div[id="support-type"] input[type="radio"]').each((radio) => {
      // 'radio' é o elemento atual dentro do ciclo .each()
      cy.wrap(radio).check(); // Seleciona o radio atual
      
      // Verificação para garantir que o radio button está marcado
      cy.wrap(radio).should('be.checked')
    })
  })

  it('05.md - marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('div[id="check"] input[type="checkbox"]').each((checkbox) => {
      // 'checkbox' é o elemento atual dentro do ciclo .each()
      cy.wrap(checkbox).check(); // Seleciona o checkbox atual
      
      // Verificação para garantir que o radio button está marcado
      cy.wrap(checkbox).should('be.checked');
    })

    cy.get('div[id="check"] input[type="checkbox"]').last().uncheck()
  })

  it('05.md - marca ambos checkboxes, depois desmarca o último - Forma mais fácil', () => {
    cy.get('div[id="check"] input[type="checkbox"]').check().last().uncheck().should('not.be.checked')
    //basicamente o mesmo teste
    //o 'get' encontra todos os elementos com checkbox
    //o 'check' marca todos os elementos
    //o 'last' pega o último elemento
    //o 'uncheck' desmarca o último elemento
  })

  it('06.md - seleciona um arquivo da pasta fixtures e por fim verifica qual o nome do arquivo selecionado utilizando outra função dentro do should', () => {
    cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json')

    cy.get('input[type="file"]').should(input => {
      expect(input[0].files[0].name).to.eq('example.json')
    })
  })

  it('06.md - seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })

    cy.get('input[type="file"]').should(input => {
      expect(input[0].files[0].name).to.eq('example.json')
    })
  })

  it('06.md - seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('example.json').as('file')
    cy.get('input[type="file"]').as('input')

    cy.get('@input').selectFile('@file')

    cy.get('@input').should(input => {
      expect(input[0].files[0].name).to.eq('example.json')
    })
  })

  it('07.md - verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.contains('a', 'Política de Privacidade').should('have.attr', 'target', '_blank')
  })

  it('07.md - acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.contains('a', 'Política de Privacidade').invoke('removeAttr', 'target').click()

    cy.url().should('include', 'privacy.html')
  })
  
})

