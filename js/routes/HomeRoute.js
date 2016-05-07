import Relay from 'react-relay';
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
	user: (Component, variables) => {
		return Relay.QL`
      		query {
      			user {
      				${Component.getFragment('user', {input: variables.input})}
      			}
			}
		`
	},
	hnItems: (Component, variables) => {
		return Relay.QL `
			query {
				hackerNewsItem {
					${Component.getFragment('hnItems', {hnInput: variables.hnInput})}
				}
			}
		`
	}
}

export function prepareHomeParams(params, {}) {
	return {
	    ...params,
		input: "c582004b-c39f-4a28-bb2c-f6ce2df0f30d",
		hnInput: "8b9cd408-a1a7-4bd0-9640-27493abd94cf"
	};
}