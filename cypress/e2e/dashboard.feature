Feature: Simple Search

  Scenario: Search by license
    Given I am on CURRENT tab
    When I type "SK-" into simple search input
    Then I see list of results for license plates "SK-"

  Scenario: Search by provider
    Given I am on TODAY | TOMORROW tab
    When I type "preman" into simple search input
    Then I see list of results for provider "PREMAN"

  Scenario: Search by order
    Given I am on TODAY | TOMORROW tab
    When I type "94445" into simple search input
    Then I see list of results for order "94445"

  Scenario: Clear search results
    Given I am on TODAY | TOMORROW tab
    And trucks are filtered by "SK-"
    When I click clear search button
    Then I see search results are cleared on TODAY | TOMORROW truck tab