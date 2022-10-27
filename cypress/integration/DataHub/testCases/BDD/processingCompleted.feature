Feature: This are validations related to the processing jobs

    Scenario: Geotags existance
    Given I have uploaded a photo dataset
    And this job has being processed successfully
    When I go to the processing jobs folder in AWS
    Then I can validate the Geotags are there
    And the Geotags file is not empty