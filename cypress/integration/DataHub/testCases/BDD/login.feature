Feature: Login Validations

    Validations related to the login

    Scenario: Successful Login
    Given I am in the Login page
    When I enter some valid credentials
    Then I can navigate to the DataHub viewer successfully by submitting

    Scenario: Failed Login
    Given I am in the Login page
    When I enter non-valid credentials
    Then I cannot access to DataHub when submitting