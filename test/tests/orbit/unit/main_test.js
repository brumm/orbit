import Orbit from 'orbit/main';

module("Orbit - Core", {
  setup: function() {
  }
});

test("it exists", function() {
  ok(Orbit);
});

test("#generateId generates unique ids", function() {
  notEqual(Orbit.generateId(), Orbit.generateId(), 'a weak test to ensure uniqueness');
});

test("#capitalize capitalizes the first letter of a word", function() {
  equal(Orbit.capitalize('cauliflower'), 'Cauliflower', 'capitalize capitalizes the first letter of a word');
  equal(Orbit.capitalize('aSAP'), 'ASAP', 'capitalize doesn\'t touch the rest of the word');
});