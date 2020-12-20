import compareVersions from 'compare-versions';


function setNativeValueJs(element, value) {
  const { set: valueSetter } = Object.getOwnPropertyDescriptor(element, "value") || {};
  const prototype = Object.getPrototypeOf(element);
  const { set: prototypeValueSetter } = Object.getOwnPropertyDescriptor(prototype, "value") || {};

  if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value);
  } else if (valueSetter) {
    valueSetter.call(element, value);
  } else {
    throw new Error("The given element does not have a value setter");
  }
  element.dispatchEvent(new Event("input", { bubbles: true }));
}

function setNativeValueCommand(value) {
  if (driver.isIOS) {
    browser.execute(setNativeValueJs, this, value);
  } else {
    this.setValue(value);
  }
}

function clickForIOS14SafariCommand(value) {
  if (driver.isIOS && compareVersions(driver.capabilities['safari:platformVersion'], '13.*') > 0) {
    browser.execute("arguments[0].click(); arguments[0].dispatchEvent(new Event('click', { bubbles: true }));", this);
  } else {
    this.click();
  }
}



module.exports = {
  setNativeValueCommand: setNativeValueCommand,
  clickForIOS14SafariCommand: clickForIOS14SafariCommand
}
