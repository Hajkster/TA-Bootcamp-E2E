Feature: Bootcamp E2E

Background:
  Given I'm on the newEgg home page
  # When Close the promo banner if it appears  // Well didn't see any promo banner so I don't even know how it look like?

Scenario: Search bar

When Entry the word "Windows" in the search bar
* Click the search
Then Check that at least one item appears

Scenario: Internet shop logo button

When Open "Today's Best Deals" tab
* Click on the Internet shop logo
Then Check that the main page opened




    
