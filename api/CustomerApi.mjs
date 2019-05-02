import CustomerService from '../service/CustomerService.mjs'

const customerService = new CustomerService();

export default class CustomerApi {
    constructor(){}

    async getCustomers(req, res) {
        try {
            const customers = await customerService.getCustomers();
            res.json({data: customers});
        } catch (err) {
            console.error(err); //Typically for security purposes we would not return the err to the client at least not the whole stack trace
            res.json({error: err});
        }
    }

    async getCustomer(req, res) {
        try {
            const id = parseInt(req.params.id);
            const customer = await customerService.getCustomer(id);
            res.json({data: customer});
        } catch (err) {
            res.json({error: err});
        }
    }

    async updateCustomer(req, res) {
        try {
            const id = parseInt(req.params.id);
            const updatedCustomer = req.body;
            const result = await customerService.updateCustomer(id, updatedCustomer);
            res.json({data: result});
        } catch (err) {
            console.error(err); //Typically for security purposes we would not return the err to the client at least not the whole stack trace
            res.json({error: err});
        }
    }

    async addCustomer(req, res) {
        try {
            const customerObject = req.body;
            const result = await customerService.addCustomer(customerObject);
            res.json({data: result});
        } catch (err) {
            console.error(err); //Typically for security purposes we would not return the err to the client at least not the whole stack trace
            res.json({error: err});
        }
    }

    async deleteCustomer(req, res) {
        try {
            const id = parseInt(req.params.id);
            const result = await customerService.deleteCustomer(id);
            res.json({data: result});
        } catch (err) {
            console.error(err); //Typically for security purposes we would not return the err to the client at least not the whole stack trace
            res.json({error: err});
        }
    }

}