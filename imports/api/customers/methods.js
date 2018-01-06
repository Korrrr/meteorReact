import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Customers } from './customers';


Meteor.methods({
  'customer.insert'(customer) {
    Customers.insert(customer);
  },
  'customers.update'(customerId, name) {
    check(customerId, String);
    check(name, String);

    Customers.update(customerId, { $set: { name } });
  },
  'customers.remove'(customerId) {
    check(customerId, String);

    Customers.remove(customerId);
  },
});
