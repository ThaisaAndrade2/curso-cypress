/// <reference types = "cypress"/>

describe('Cadastro', () => {
    it('Cadastro de usuário com credenciais válidas', () => {

        cy.intercept({
            method: "POST",
            pathname: "/api/users"
        }, {
            statusCode: 200,
            fixture: "cadastro-sucesso"
        }).as("postUsers")

        cy.visit("https://demo.realworld.io/#/register");

        cy.get("[ng-model$=username").type("Thaisa02");
        cy.get("[ng-model$=email").type("thaisa02.santos@teste.com");
        cy.get("[ng-model$=password]").type("12309802");

        cy.contains("button", "Sign up").click();

    });

    it('Cadastro de usuário com e-mail já cadastrado', () => {

    });

    it('Cadastro de usuário com username já cadastrado', () => {

    });


});