
describe('Segundo teste end-to-end', () => {
    it('Cadastra uma pergunta e uma resposta', () => {
      cy.visit('localhost:3000');
  
      // Adiciona a pergunta
      cy.get('#textarea-pergunta').type('3+3 = ?');
      cy.get('#btn-pergunta').click();
      cy.get('#tabela-perguntas').contains('3+3 = ?');
  
      // Visita a página de respostas
      cy.visit('localhost:3000/resposta/1');
  
      // Adiciona a resposta
      cy.get('#textarea-resposta').type('A resposta é 6.');
      cy.get('#btn-resposta').click();
      cy.get('#tabela-respostas').contains('A resposta é 6.');
    });
  });
  
  