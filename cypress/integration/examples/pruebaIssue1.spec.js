it('Navegación por directorio', function() {
    cy.visit('https://practica2-v.herokuapp.com/')
    }) 
//issue #1
it('Búsqueda de campo Dirección', function(){
    cy.wait(1000)
    cy.get('thead > tr >  :nth-child(3)').contains('Dirección')
    
})

//issue #2
it('Búsqueda de campo Teléfono y funcionamiento con el boton Nuevo', function(){
    cy.wait(1000)
    cy.get('thead > tr >  :nth-child(4)').contains('Teléfono')

    
    cy.get('thead > tr >  :nth-child(5) > .btn-success').click()
    cy.get('div > div > div > form > div > :nth-child(3) > div > label').contains('Teléfono')
    cy.get('tbody > tr > :nth-child(5) > .btn-primary').first().click()
   
})


//issue #3

it('issue #3',function(){
    cy.wait(1000)
    cy.get('tbody > tr > :nth-child(5) > .btn-danger').last().click()
})