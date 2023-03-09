describe("Productoverzicht test", () => {
  it("Navigeer naar productoverzicht en controleer alle producten", () => {
    cy.visit("https://techgrounds-at2.myshopify.com/collections/all");

    // Wacht tot de pagina is geladen
    cy.wait(2000);
    const categoryArray = ["Bags", "Shoes", "Products"]

    cy.get('.list-menu').contains("Producten").click({force: true});

    // categoryArray.forEach((item)=>{
    //   cy.find(item).contains()

    //   cy.get('.nav').contains('About') 
    // }
    // )
    // Controleer of het element .product-grid bestaat op de pagina
  //   if (cy.get(".list-menu__item").should("exist")) {
  //     cy.get(".list-menu__item").each(($item) => {
  //       console.log($item) // .nav(footer)
  //     });  
  // }
}) // ctrl + /
});


/*
 
*/