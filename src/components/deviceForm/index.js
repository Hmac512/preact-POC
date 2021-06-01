import { h, Component } from 'preact';
import style from './style.less';
// import {Notify} from 'preact-fluid';
import Button from 'preact-material-components/Button';
import FormField from 'preact-material-components/FormField';
import TextField from 'preact-material-components/TextField';
import Snackbar from 'preact-material-components/Snackbar';

import 'preact-material-components/FormField/style.css';
import 'preact-material-components/TextField/style.css';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Theme/style.css';
import 'preact-material-components/Snackbar/style.css';



export default class DeviceForm extends Component {
	state = {
		count: 0
	};

	// update the current time
	updateTime = () => {
		let time = new Date().toLocaleString();
		this.setState({ time });
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
		this.updateTime();

		// every time we get remounted, increment a counter:
		this.setState({ count: this.state.count+1 });
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// Note: `id` comes from the URL, courtesy of our router
	render() {
		return (
			<div class={style.device}>
				    <div class="rendered-form">
				        <div class="">
				            <h1 access="false" id="control-3745092">Add Device Form</h1>
				        </div>
				        <div>
				        	<FormField>
				        	    <TextField 
        							label="Device Name"
    							/>
    						</FormField>

				        </div>
				        <div>
				        	<FormField>
				        		<TextField
				        			textarea={true}
				        			label="Description"
				        		/>
				        	</FormField>

				        </div>

				        <Button raised ripple onClick={()=>{
          									this.bar.MDComponent.show({
            								message: "Form Submitted!"
          									});
        									}}>
				        	Submit
				        </Button>
				        <Snackbar ref={bar=>{this.bar=bar;}}/>
				    </div>
			</div>
		);
	}
}
