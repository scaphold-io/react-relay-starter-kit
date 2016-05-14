var babelRelayPlugin   = require('babel-relay-plugin');
// var introspectionQuery = require('graphql/utilities').introspectionQuery;
var introspectionQuery = 'query IntrospectionQuery { __schema { queryType { name } mutationType { name } types { ...FullType } directives { name description args { ...InputValue } onOperation onFragment onField } } } fragment FullType on __Type { kind name description fields(includeDeprecated: true) { name description args { ...InputValue } type { ...TypeRef } isDeprecated deprecationReason } inputFields { ...InputValue } interfaces { ...TypeRef } enumValues(includeDeprecated: true) { name description isDeprecated deprecationReason } possibleTypes { ...TypeRef } } fragment InputValue on __InputValue { name description type { ...TypeRef } defaultValue } fragment TypeRef on __Type { kind name ofType { kind name ofType { kind name ofType { kind name } } } }';
var request            = require('sync-request');
var config = require("../config");

var graphqlHubUrl = 'https://www.graphqlhub.com/graphql';
var response = request('GET', config.scapholdUrl, {
	headers: {
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NjYXBob2xkLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1NzMxMzYwNTgzMTQwM2QyMGRmMjJkZWMiLCJhdWQiOiJKdGdmeVpJUTJwSmo5ckk4RTllNjE3aFFjazBSbnhBbiIsImV4cCI6MTQ2MzMzODgyOSwiaWF0IjoxNDYzMjUyNDI5fQ.Vp-v4B81OHXyS887nwMgXhr8jiHF1bBMm52_DgpPjIg'
	},
  	qs: {
    	query: introspectionQuery
  	}
});

var schema = JSON.parse(response.body.toString('utf-8'));

module.exports = babelRelayPlugin(schema.data, {
  abortOnError: true,
});