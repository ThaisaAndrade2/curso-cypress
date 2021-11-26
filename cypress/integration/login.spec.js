/// <reference types = "cypress"/>

describe('Login', () => {
    it('Autenticar com credenciais validas', () => {
        cy.visit("https://demo.realworld.io/#/login");

        //interação com os elementos da tela
        cy.get("input[type=email]").type("thaisa.santos@teste.com");
        cy.get("input[type=password]").type("123098");
        cy.contains("button", "Sign in").click();

        cy.get("[href*=editor]").should("be.visible");
    });


    it('Autenticar com senha incorreta', () => {
        cy.visit("https://demo.realworld.io/#/login");

        //interação com os elementos da tela
        cy.get("input[type=email]").type("thaisa.santos@teste.com");
        cy.get("input[type=password]").type("12309822");
        cy.contains("button", "Sign in").click();

        cy.contains("email or password is invalid").should("be.visible");

    });


    it.skip('Autenticar com formato de email incorreto', () => {
        cy.visit("https://demo.realworld.io/#/login");

        cy.get("input[type=email]").type("thaisa.santos.com");
        cy.contains("button", "Sign in").click();

        // cy.contains("Please include an").should("be.visible");
        cy.contains("span", "Please include an").should("be.visible");
    });

});