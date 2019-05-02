import AgentService from '../service/AgentService.mjs';

const agentService = new AgentService();

export default class AgentApi {
    constructor(){}

    async getAgents(req, res) {
        try {
            const agents = await agentService.getAgents();
            res.json({data: agents})
        } catch (err) {
            console.error(err); //Typically for security purposes we would not return the err to the client at least not the whole stack trace
            res.json({error: err});
        }
    }

    async getAgentById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const agent = await agentService.getAgentById(id);
            res.json({data: agent})
        } catch (err) {
            console.error(err); //Typically for security purposes we would not return the err to the client at least not the whole stack trace
            res.json({error: err});
        }
    }

    async updateAgentById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const updateObject = req.body;
            const result = await agentService.updateAgentById(id, updateObject);
            res.json({data: result})
        } catch (err) {
            console.error(err); //Typically for security purposes we would not return the err to the client at least not the whole stack trace
            res.json({error: err});
        }
    }

    async getCustomersByAgentId(req, res) {
        try {
            const id = parseInt(req.params.id);
            const customersByAgent = await agentService.getCustomersByAgentId(id);
            res.json({data: customersByAgent});
        } catch (err) {
            console.error(err); //Typically for security purposes we would not return the err to the client at least not the whole stack trace
            res.json({error: err});
        }
    }

    async addCustomerForAgent(req, res) {
        try {
            const id = parseInt(req.params.id);
            const customerToAdd = req.body;
            const result = await agentService.addCustomerForAgent(id, customerToAdd);
            res.json({data: result});
        } catch (err) {
            console.error(err); //Typically for security purposes we would not return the err to the client at least not the whole stack trace
            res.json({error: err});
        }
    }

    //Input Validation needed here
    async addAgent(req, res) {
        try {
            const agentDetail = req.body;
            const result = await agentService.addAgent(agentDetail);
            res.json({data: result});
        } catch (err) {
            console.error(err); //Typically for security purposes we would not return the err to the client at least not the whole stack trace
            res.json({error: err});
        }
    }


}