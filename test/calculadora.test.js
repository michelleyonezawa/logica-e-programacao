const { somarDoisNumeros } = require('../src/calculadora')
const {expect} = require('chai');

describe('Testes de soma de dois números', function() {
    it('Função capaz de somar dois números positivos', function() {
        // Coletar resultado da soma
        const resultadoDaSoma = somarDoisNumeros(5, 3);
        // Comparar com o resultado que você espera
        expect(resultadoDaSoma).to.equal(8);
    });
    it('Função capaz de somar um número positivo e um negativo', function() {
        // Coletar resultado da soma
        const resultadoDaSoma = somarDoisNumeros(50, -15);
        // Comparar com o resultado que você espera
        expect(resultadoDaSoma).to.equal(35);
    });
    it('Função capaz de somar dois números que sejam equivalentes a 0', function() {
        // Coletar resultado da soma
        const resultadoDaSoma = somarDoisNumeros(0, 0)
        // Comparar com o resultado que você espera
        expect(resultadoDaSoma).to.equal(0)
    });
    it('Função capaz de somar dois números negativos', function() {
        // Coletar resultado da soma
        const resultadoDaSoma = somarDoisNumeros(-15, -20)
        // Comparar com o resultado que você espera
        expect(resultadoDaSoma).to.equal(-35)
    });
});

