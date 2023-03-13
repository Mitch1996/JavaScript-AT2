describe("Test Case: Verify Sort and Filter options on Product page", () => {
  it("Navigeer naar https://techgrounds-at2.myshopify.com/", () => {
    cy.visit("https://techgrounds-at2.myshopify.com/");
  });

  it("Navigeer naar een productoverzicht pagina", () => {
    cy.visit("https://techgrounds-at2.myshopify.com/");
    cy.wait(1000);
    cy.contains("All Products").click({ force: true });
    cy.url().should("include", "/collections");
  });

  it("Vergelijk sorteer opties met testdata", () => {
    cy.visit("https://techgrounds-at2.myshopify.com/collections/all");
    const sortOptions = [
      "Featured",
      "Best selling",
      "Alphabetically, A-Z",
      "Alphabetically, Z-A",
      "Price, low to high",
      "Price, high to low",
      "Date, old to new",
      "Date, new to old",
    ];
    console.log(sortOptions);
    if (sortOptions) {
      cy.get('select[name="sort_by"]').eq(0).select("best-selling");
      cy.reload();
      cy.wait(2000);
      cy.get('select[name="sort_by"] > option').each(($option, index) => {
        if (index < sortOptions.length) {
          expect($option.text().trim()).to.equal(sortOptions[index]);
        }
      });
    } else {
      cy.log("sortOptions is undefined or not initialized correctly.");
    }
  });
  it("Vergelijk filteropties met testdata.",()=>{
    cy.visit("https://techgrounds-at2.myshopify.com/collections/all");
    cy.get("span").contains("Availability").click()
    const element = cy.get("li[class*='facets__item']")
    console.log("Gevonden elementen zijn: " + element)

  }
  );
});

//test comment