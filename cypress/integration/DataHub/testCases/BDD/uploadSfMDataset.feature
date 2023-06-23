Feature: This are validations related to the SfM processing jobs

    Scenario: Open ingestor
    Given I am in the Login page
    When I enter some valid credentials
    Then I can navigate to the DataHub viewer successfully by submitting
    And I open ingestor