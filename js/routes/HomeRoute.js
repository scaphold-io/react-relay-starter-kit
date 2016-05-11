import Relay from 'react-relay';
import config from './../../config';
// export default class extends Relay.Route {
// 	static paramDefinitions = {
// 		input: { required: true }
// 	};
//   	static queries = {
//     	user: (Component, variables) => {
//     		return Relay.QL`
// 	      		query {
// 	      			user {
// 	      				${Component.getFragment('user', {input: variables.input})}
// 	      			}
// 				}
//     		`
// 		}
// 	};
//   	static routeName = 'HomeRoute';
// }

export const HomeQueries = {
	// user: (Component, variables) => {
	// 	return Relay.QL`
 //      		query {
 //      			user {
 //      				${Component.getFragment('user', {input: variables.input})}
 //      			}
	// 		}
	// 	`
	// },
	allHackerNewsItems: (Component, variables) => {
		return Relay.QL `
			query {
				viewer {
					${Component.getFragment('allHackerNewsItems', {orderBy: variables.orderBy})}
				}
			}
		`
	}
}

export function prepareHomeParams(params, {}) {
	console.log("HomeRoute.prepareHomeParams");
	console.log(params);
	return {
	    ...params,
		input: "NDFmOGZkOWMtNjkzMi00ZjkyLTkyNDItMDA4NmFjNDcwNjg5OmQxMmUxNTE4LWJlYjgtNDExYi1iNzRkLTM0YWE5NTg3OTEzNg==",
		orderBy: "-createdAt"
	};
}


// input: this.props.userId,
// hnInput: "MDEzNmJlMjYtZDc3OS00MTRlLTg1NDAtZDcyNTJiYWViNWIyOmZmZDMzZGI0LWMzN2ItNGJmZC04YzE0LTYwZWM5YzZmNWQ0Nw=="

// return Relay.QL `
// 			query {
// 				hackerNewsItem {
// 					${Component.getFragment('hnItems', {hnInput: variables.hnInput})}
// 				}
// 			}
// 		`
