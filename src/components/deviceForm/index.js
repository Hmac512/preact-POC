import { h, Component } from 'preact';
import style from './style.less';

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
				<form id="rendered-form">
				    <div class="rendered-form">
				        <div class="">
				            <h1 access="false" id="control-3745092">Add Device Form</h1>
				        </div>
				        <div class="formbuilder-text form-group field-text-1622495685145"><label for="text-1622495685145" class="formbuilder-text-label">Device Name<span class="formbuilder-required">*</span></label><input type="text" class="form-control" name="text-1622495685145" access="false" id="text-1622495685145" required="required" aria-required="true"></input></div>
				        <div class="formbuilder-textarea form-group field-textarea-1622495939462"><label for="textarea-1622495939462" class="formbuilder-textarea-label">Description</label><textarea type="textarea" class="form-control" name="textarea-1622495939462" access="false" id="textarea-1622495939462"></textarea></div>
				        <div class="formbuilder-textarea form-group field-textarea-1622495994429"><label for="textarea-1622495994429" class="formbuilder-textarea-label">Notes</label><textarea type="textarea" class="form-control" name="textarea-1622495994429" access="false" id="textarea-1622495994429"></textarea></div>
				    </div>
				</form>
			</div>
		);
	}
}
