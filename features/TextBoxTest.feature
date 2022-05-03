Feature: Play with Text Box
  In order to practice with Text Box element
  As a user
  I want to be able to fill information and see the information appears correctly

  Background: Open Text Box page
    Given I am on Text Box page

  Scenario Outline: Verify input information after click submit button
    When I fill information form as below:
      |fullname|email|current_address|permanent_address|
      |<fullname>|<email>|<current_address>|<permanent_address>|
    And I click Submit button
    Then I should see the submitted information as below:
      |fullname|email|current_address|permanent_address|
      |<fullname>|<email>|<current_address>|<permanent_address>|
    Examples:
      |fullname|email|current_address|permanent_address|
      |Quan Hong|quanuh@gmail.com|Kim Giang - Thanh Xuân - Ha Noi|Yen Bac - Duy Tien - Ha Nam|
