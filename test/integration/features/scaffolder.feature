Feature: Scaffolder

  Scenario: Scaffold
    Given the repository is hosted on GitHub
    When the project is scaffolded
    Then the workflows directory will be created
