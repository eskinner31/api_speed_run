import Express  from 'express';
import bodyParser from 'body-parser';
import CustomerApi from './api/CustomerApi';
import AgentApi from './api/AgentApi';

const customerApi = new CustomerApi();
const agentApi = new AgentApi();

const app = Express();
const port = 3000;

app.use(bodyParser.json());

//Agents
app.get('/agents', agentApi.getAgents);
app.post('/agents', agentApi.addAgent);
app.get('/agents/:id', agentApi.getAgentById);
app.put('/agents/:id', agentApi.updateAgentById);
app.get('/agents/:id/customers', agentApi.getCustomersByAgentId);
app.post('/agents/:id/customers', agentApi.addCustomerForAgent);

//Customers
app.get('/customers', customerApi.getCustomers);
app.post('/customers', customerApi.addCustomer);
app.get('/customers/:id', customerApi.getCustomer);
app.put('/customers/:id', customerApi.updateCustomer);
app.delete('/customers/:id', customerApi.deleteCustomer);

app.listen(port, () => console.log(`Example app listening on port ${port}`));


