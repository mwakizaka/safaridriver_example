import compareVersions from 'compare-versions';


function setNativeValue(element, value) {
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

function addSetNativeValueCommand(value) {
  if (driver.isIOS) {
    browser.execute(setNativeValue, this, value);
  } else {
    this.setValue(value);
  }
}

function addClickForIOSSafari14Command(value) {
  if (driver.isIOS && compareVersions(driver.capabilities['safari:platformVersion'], '13.*') > 0) {
    browser.execute("arguments[0].click(); arguments[0].dispatchEvent(new Event('click', { bubbles: true }));", this);
  } else {
    this.click();
  }
}



module.exports = {
  addSetNativeValueCommand: addSetNativeValueCommand,
  addClickForIOSSafari14Command: addClickForIOSSafari14Command
}
