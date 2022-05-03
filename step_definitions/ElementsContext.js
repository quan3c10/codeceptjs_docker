const {Elements} = inject();

When(/^I fill information form as below:$/, function (table) {
  const tableByHeader = table.parse().hashes();
  for (const row of tableByHeader) {
    Elements.fillFullNameAs(row.fullname)
    Elements.fillEmailAs(row.email)
    Elements.fillCurrentAddressAs(row.current_address)
    Elements.fillPermanentAddressAs(row.permanent_address)
  }
});

When(/^I click Submit button$/, function () {
    Elements.clickSubmit()
});

Then(/^I should see the submitted information as below:$/, function (table) {
  for (const row of table.parse().hashes()) {
    Elements.seeFullNameAs(row.fulname)
    Elements.seeEmailAs(row.email)
    Elements.seeCurrentAddressAs(row.current_address)
    Elements.seePermanentAddressAs(row.permanent_address)
  }
});
Given(/^I am on Text Box page$/, function () {
  Elements.open()
  Elements.selectTab("Text Box")
});
Given(/^I am on Radio Button page$/, function () {
  Elements.open()
  Elements.selectTab("Radio Button")
});
