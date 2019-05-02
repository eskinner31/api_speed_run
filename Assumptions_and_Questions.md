# Assumptions
- Assuming `INT ID` is `_id` on the json data since there is no explicit field matching that;
- There are several ways to sort and index customers, my guess is that recent customers are typically
going to be the most worked with and therefore the most relevant to prioritize in a large list.




# Questions
- When adding a new customer on the agent customer list view page,
should details about that agent be added to customer creation?
- Is customer creation only available as an agent.


# Notes on own work,
- Would choose Jasmine - Testing Suite, with Sinon for Mocking and 
assertions
- many of the classes seen in this project should technically inherit and extend a 
base parent class. Did not do that here as I was rapidly prototyping this code exercise
- Related to project structure and selection of architecture
- Thought about running an in memory db for the data set to discuss configuration
especially for making calls and what optimization I wanted to use. A little beyond the
scope of this project.

```
 A couple of notes. I have, in the past, separated the layers of node projects by API layer, Service Layer, Data Layer

 API -> Typically is simply to receive and respond to calls, and to do initial validation of inputs, due to constraints that is not seen here
 
 Service -> Handles business logic and any other transformation of data, also handles calls between other APIs, in an ideal
 world this would simple be another HTTP call to another service, however in this case service methods can be called directly by another service
 
 Data -> Handles exchanges with the data layer, and is meant to be flexible enough to handle calls to different DB's that is to say
 a `List` api call would function the same on mongo as it would on postgres. Ideally it would be shaped after the repository pattern
 found in the spring framework, that is not seen here.
```