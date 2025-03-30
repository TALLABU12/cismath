import "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "@jest/globals";
import Page from "@/app/(pages)/(website)/(home)/page";
import * as React from "react";
describe("tester l'interface utilisateur de la page d'accueil : tests unitaires", () => {
  test("Tester l'affichage de la page d'accueil", () => {
    //Arrange
    render(<Page />);

    //Act
    const heading = screen.getByRole("heading", {
      name: "home",
    });

    //Assert
    expect(heading).toBeDefined();
  });
});
