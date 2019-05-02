import CustomerData from "../data/CustomerData";

const customerData = new CustomerData();

export default class CustomerService {
    constructor(){}

    async getCustomers() {
        return {customers: await customerData.getCustomers()};
    }

    async getCustomer(id) {
        return {customer: await customerData.getCustomersById(id)};
    }

    async updateCustomer(id, customerObject) {
        return {result: await customerData.updateCustomer(id, customerObject)};
    }

    async getCustomersByAgentId(id) {
        const customersForAgent = await customerData.getCustomersByAgentId(id);
        return {customers: customersForAgent.map(e => {
            let splitAddress = e.address.split(', '); //would likely adjust data to have city/state/region broken out to individual fields
            return {
                name: `${e.name.last}, ${e.name.first}`,
                city: splitAddress[1],
                state: splitAddress[2]
            }
        })}
    }

    async addCustomer(customerObject) {
        return {result: await customerData.addCustomer(customerObject)}
    }

    async deleteCustomer(id) {
        return {result: await customerData.deleteCustomer(id)}
    }
}