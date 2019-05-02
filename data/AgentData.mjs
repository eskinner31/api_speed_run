import fs from 'fs';
import _ from 'lodash';
const agentDataSet = _.sortBy(JSON.parse(fs.readFileSync('agents.json')), ['_id']);

export default class AgentData {
    constructor() {}

    getAgents() {
        return agentDataSet;
    }

    getAgentsById(id) {
        return agentDataSet.find(e => e._id === id);
    }

    updateAgentById(id , updateObject) {
        const agentIndex = _.findIndex(agentDataSet, e => e._id === id);
        let currentAgent = agentDataSet[agentIndex];
        _.each(updateObject, (v, k) => currentAgent[k] = v);
        agentDataSet[agentIndex] = currentAgent;
        return "success";
    }

    //of course if this were a DB we would return the writeResult and handle that in the service layer.
    addAgent(agentObject) {
        agentObject["_id"] = Date.now();
        agentDataSet.push(agentObject);
        _.sortBy(agentDataSet, ['_id']); //DB would handle re-indexing of data
        return "success";
    }



}