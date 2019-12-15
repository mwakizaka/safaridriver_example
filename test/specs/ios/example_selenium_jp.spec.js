import assert from "assert"
import helper from "../..//lib/helper"


describe("example.selenium.jp/reserveApp", function () {
  before(function() {
    browser.addCommand("setNativeValue", helper.customCommand, true);
  });

  it("Make a reservation at example.selenium.jp", function () {
    browser.url("http://example.selenium.jp/reserveApp/")
    
    $("#reserve_year").setNativeValue("2020");
    $("#reserve_month").setNativeValue("01");
    $("#reserve_day").setNativeValue("08");
    $("#guestname").setNativeValue("mwakizaka");
    $("#goto_next").click();

    assert($("#price").getText() == 8000);
    $("#commit").click();

    assert($("body.final_form > div.container > h1").getText() == "予約を完了しました。");
  })
})
