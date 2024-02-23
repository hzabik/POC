Feature: Simple Search

  Scenario: Search by license
    Given I am on CURRENT tab with interceptor enabled for "ongoingTrucks"
    When I type intercepted truck "license" into simple search input
    Then I see list of results for intercepted truck "license"

  Scenario: Search by provider
    Given I am on TODAY | TOMORROW tab with interceptor enabled for "scheduledTrucks"
    And I have intercepted truck with single provider
    When I type intercepted truck "provider" into simple search input
    Then I see list of results for intercepted truck "provider"

  Scenario: Search by order
    Given I am on TODAY | TOMORROW tab with interceptor enabled for "scheduledTrucks"
    And I have intercepted truck with single order
    When I type intercepted truck "order" into simple search input
    Then I see list of results for intercepted truck "order"
