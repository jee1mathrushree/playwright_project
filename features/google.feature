Feature: Playwright docs

  @api
  Scenario: Get user id
    When user fetch userid of "1"
    Then user should see id as "1"

  @ui
  Scenario: Google Search
    Given Go to the google search website "https://www.google.com"
    When I type "playwright documentation" in "searchbox"
    Then I should see "searchlink" for "Playwright: Fast and reliable end-to-end testing for modern ..."
