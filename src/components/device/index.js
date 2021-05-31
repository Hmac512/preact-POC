import { h, Component } from 'preact';
import style from './style.less';

export default class Device extends Component {
	state = {
		count: 0
	};

	// update the current time
	updateTime = () => {
		let time = new Date().toLocaleString();
		this.setState({ time });
	};


	// loadDevice = ({deviceId}) => {
	// 	const deviceQuery = gql`query DeviceQuery($device_id: String!) {
	// 									  device(where: {id: {_eq: $device_id}}) {
	// 									    description
	// 									    custom_graph_url
	// 									    cost
	// 									    assigned_to
	// 									    added_on
	// 									    id
	// 									    graph_starting_url
	// 									    link_score
	// 									    listing_url
	// 									    name
	// 									    notes
	// 									    marketing_description
	// 									  }
	// 									}`

	// 	const dimogqlEndpoint = "https://api.dimo.zone/v1/graphql";
	// 	const dimogqlauthHeaders = {
 //            'x-hasura-admin-secret': 'DG93PEr6e2gq9Ldo7Ru3'
 //        }
 //        this.graphQLClient = new GraphQLClient(dimogqlEndpoint, {headers: dimogqlauthHeaders});
 //        const vars = { "device_id": deviceId }
 //        this.graphQLClient.request(deviceQuery, vars).then(

 //        function(data) {
 //        	console.log(data);
 //        })

	// }



	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
		this.updateTime();
		// this.loadDevice();

		// every time we get remounted, increment a counter:
		this.setState({ count: this.state.count+1 });
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// Note: `id` comes from the URL, courtesy of our router
	render({deviceId}) {
		return (
			<div class={style.device}>
				<p>{deviceId}</p>
			</div>
		);
	}
}
