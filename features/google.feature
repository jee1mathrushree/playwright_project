Feature: Playwright docs
  @ui
  Scenario: Google Search
    Given Go to the google search website "https://www.google.com"
    When I seach "playwright documentation"
    Then I should see link for "Playwright: Fast and reliable end-to-end testing for modern ..."
