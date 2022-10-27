Feature: Side Menu Validations

    Validations related to Side Menu in the DH viewer

    /Scenario: Validate the Hamburguer Menu content
    /Given I log in successfully and navigate to DataHub viewer
    /When I open the Hamburguer Menu by clicking on the icon
    /Then The expected content is displayed
    /And Close the Hamb Menu

    /Scenario: Validate the Site section
    /Given I log in successfully and navigate to DataHub viewer
    /When I am located on the Site section
    /Then I can see the Site title, Site icon and Site menu
    /And I can validate the Site menu list contains the Site info, File Manager, User accounts and roles and Integrations options by expanding the list

    /Scenario: Validate Datasets section
    /Given I log in successfully and navigate to DataHub viewer
    /When I am located on the Datasets section
    /Then I can see the Dataset icon, title and menu button
    /And I can expand the existing DS list

    Scenario: Validate Imagery Section
    Given I log in successfully and navigate to DataHub viewer
    When I am located on the Imagery section
    Then I can validate there is an icon and title for Imagery
    And the Imagery options are displayed after expanding the section
    And the options can be checked or unchecked depending on the Dataset type


