import AgentData from "../data/AgentData"
import CustomerService from "./CustomerService";

const agentData = new AgentData();
const customerService = new CustomerService();

export default class AgentService {
    constructor(){}

    async getAgents() {
        return {agents: await agentData.getAgents()};
    }

    async getAgentById(id) {
        return {agent: await agentData.getAgentsById(id)};
    }

    async updateAgentById(id, updateObject) {
        return {result: await agentData.updateAgentById(id, updateObject)};
    }

    /**
     * in particular for this request using the current array data we could create a javascript object
     * and basically create a dictionary of arrays to efficiently grab the customers for a given agent
     * so for example {<Agent_ID>: <Array_Of_Customers_With_Agent_Matching_Agent_ID>}
     */
    async getCustomersByAgentId(id) {
        // In an ideal scenario and http call would be made to the customer api, but for now service to service
        // calls will occur to achieve the expected results. Furthermore to achieve HATEOAS we'd have the appropriate
        // resources returned as links
        return await customerService.getCustomersByAgentId(id);
    }

    async addCustomerForAgent(id, customerObject) {
        customerObject["agent_id"] = id;
        return await customerService.addCustomer(customerObject);
    }

    async addAgent(agentDetail) {
        return {addResult: await agentData.addAgent(agentDetail)};
    }
}