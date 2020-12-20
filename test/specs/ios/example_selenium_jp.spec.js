import assert from "assert"
import helper from "../..//lib/helper"


describe("example.selenium.jp/reserveApp", function () {
  before(function() {
    browser.addCommand("setNativeValue", helper.setNativeValueCommand, true);
    browser.addCommand("nativeClick", helper.clickForIOS14SafariCommand, true);
  });

  it("Fail to make a reservation", function () {
    browser.url("http://example.selenium.jp/reserveApp/")
    
    $("#reserve_year").setNativeValue("1987");
    $("#reserve_month").setNativeValue("01");
    $("#reserve_day").setNativeValue("08");
    $("#guestname").setNativeValue("mwakizaka");
    const gotoNext = $("#goto_next");
    gotoNext.nativeClick();

    assert($("body.confirm_form > div.container > h1").getText() === "予約エラー");
  });
})
