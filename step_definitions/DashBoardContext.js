const {DashBoard} = inject();

Given(/^I am on DashBoard page$/, function () {
    DashBoard.open();
});


Given(/^I select "([^"]*)" button$/, function (name) {
    DashBoard.clickButton(name)
});
