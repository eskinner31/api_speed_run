# Assumptions
- Assuming `INT ID` is `_id` on the json data since there is no explicit field matching that;
- There are several ways to sort and index customers, my guess is that recent customers are typically
going to be the most worked with and therefore the most relevant to prioritize in a large list.
- Assuming that when creating a customer from the Agent Customer List View Page, the current `agent_id` should be 
passed along and appended to the created customer. I would likely refactor the current implementation and have the 
`post /customer` route to be able to accept a second argument with the `agent_id`


# Notes on own work,
- This is my first attempt utilizing Class Syntax with Async/Await for Express. It is definitely syntactic sugar but 
the experience is very different than Java/Kotlin.
- Would choose Jasmine - Testing Suite, with Sinon for Mocking
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

- In a later iteration of this project I would have worked to implement both modules that leveraged dependency injection, and would have
tried to implement a repository pattern to help decouple the application.

- Clearly Input Validation on the API layer needs to be added
- Better Error Handling needs to be implemented, and more safety checks, as JS is messy.

- I would have preferred to return specific links in a later iteration to handle necessary operations from specific views (HATEOAS)
- Apply a binary search against the data set after the data has been sorted. 