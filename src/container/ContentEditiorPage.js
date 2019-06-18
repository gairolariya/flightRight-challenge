import React, { Component } from 'react';
import Components from '../components/components';

class ContentEditiorPage extends Component {

	constructor(){
		super();

		this.state = {
			displayData: '',
			showdata : this.displayData,
			dropdownHeaderTitle: 'Please Click this to select a template',
			list: [
				{
					id: 1,
					title: 'Section Tag',
					type: 'Section',
					value: 'Section'
				},
				{
					id: 2,
					title: 'Image Tag',
					type: 'Image',
					value: 'Image'
				},
				{
					id: 3,
					title: 'Paragraph',
					type: 'Para',
					value: 'Para'
				},
				{
					id: 4,
					title: 'Table',
					type: 'Table',
					value: 'Table'
				}
			]
		};
	}

	// according to the selected markup getting the template and updating the displayData
	addSelectedMarkup = (event) => {
		const value = event.target.value;
		if(value.trim() !== '') {
			let newdisplayData = this.state.displayData;
			newdisplayData += Components[value];
			this.setState({
				displayData: newdisplayData
			});
		}
	};

	onTextAreaChange = (event) => {
		const value = event.target.value;
		this.setState({
			displayData: value
		});
	};

	render() {
		return (<div>
			<div>
				<select className="dd-list" onChange={this.addSelectedMarkup.bind(this)}>
					<option value=''>Please Choose...</option>
					{this.state.list.map((item) => (
							<option className="dropdownList" key={item.id} value={item.type}>{item.title}</option>
					))}
				</select>
			</div>
			<div className='container'>
				<div className='left-container'>
					<textarea name="scenario" className="textArea-Editor" value={this.state.displayData} onChange={this.onTextAreaChange.bind(this)}/>
				</div>
				<div className='right-container' dangerouslySetInnerHTML={{ __html: this.state.displayData }} />
			</div>
		</div>
		)
	}
}


export default ContentEditiorPage;
