import fs from 'fs';
import _ from 'lodash';
let customerDataSet = _.sortBy(JSON.parse(fs.readFileSync('customers.json')), ['agent_id','_id']);

export default class CustomerData {
    constructor(){}

    getCustomers() {
        return customerDataSet;
    }

    getCustomersById(id) {
        return customerDataSet.find(e => e._id === id);
    }

    getCustomersByAgentId(agentId) {
        return customerDataSet.filter(e => e.agent_id === agentId);
    }

    updateCustomer(id, updateObject) {
        const customerIndex = _.findIndex(customerDataSet, e => e._id === id);
        let currentCustomer = customerDataSet[customerIndex];
        _.each(updateObject, (v, k) => currentCustomer[k] = v);
        customerDataSet[customerIndex] = currentCustomer;
        return "success";
    }

    addCustomer(customerObject) {
        customerObject["_id"] = Date.now();
        customerDataSet.push(customerObject);
        customerDataSet = _.sortBy(customerDataSet, ["agent_id", "id"]);
        return "success"
    }

    deleteCustomer(id) {
        _.remove(customerDataSet, e => e._id === id);
        return "success"
    }
}