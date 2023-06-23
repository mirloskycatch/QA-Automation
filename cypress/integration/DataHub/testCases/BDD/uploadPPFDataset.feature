Feature: This are validations related to the PPF processing jobs

    Scenario: Upload PC PPF
    Given I am in the Login page
    When I enter some valid credentials
    Then I can navigate to the DataHub viewer successfully by submitting
    And I can upload a PC PPF

    Scenario: Upload Ortho PPF
    Given I am in the Login page
    When I enter some valid credentials
    Then I can navigate to the DataHub viewer successfully by submitting
    And I can upload a Ortho PPF