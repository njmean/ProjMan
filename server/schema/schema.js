//const { projects, clients } = require('../sampleData.js');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');

// Mongoose Models
const Project = require('../models/Project');
const Client = require('../models/Client');

// Client Type

const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
});

// Project Type

const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID },
        client: {
            type: ClientType,
            resolve(parent, args) {
            //return clients.find(client => client.id === parent.clientId);
            return Client.findById(parent.clientId); 
            }
        },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
                //return clients;
                return Client.find();
            }
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                //return clients.find(client => client.id === args.id);
                return Client.findById(args.id);
            },
            
        },
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                //return projects;
                return Project.find();
            }
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                //return projects.find(project => project.id === args.id);
                return Project.findById(args.id);
            },
            
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})