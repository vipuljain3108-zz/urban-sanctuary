import React, { Children } from "react";
import ReactDOM from "react-dom";
import './index.scss';

class Panel extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			height: 0
		};
	}

	componentDidUpdate() {
		window.setTimeout(() => {
			const el = ReactDOM.findDOMNode(this);
			const height = el.querySelector('.panel__inner').scrollHeight;
			this.setState({
				height
			});
		}, 333);
	}

	render () {
		const { activeTab, index, activateTab } = this.props;
		const { label, content, image = null, component = null} = this.props.panel;
		const { height } = this.state;
		const isActive = activeTab === index;
		const innerStyle = {
			height:  `${isActive ? height : 0}px`
		}

		return (
			<div className='panel'
				role='tabpanel'
				aria-expanded={ isActive }>
				<button className='panel__label'
					role='tab'
					onClick={ activateTab }>
					{ label }
				</button>
				<div className='panel__inner'
					style={ innerStyle }
					aria-hidden={ !isActive }>
					<p className='panel__content'>
						{ content }
						<br />
						<br />
						{!image && component && component()}
					</p>
					{image && <img src={image} alt={image} />}
				</div>
			</div>
		);
	}
}

class Accordion extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			activeTab: null
		};
		
		this.activateTab = this.activateTab.bind(this);
	}
	
	activateTab(index) {
		this.setState(prev => ({
			activeTab: prev.activeTab === index ? -1 : index
		}));
	}
	
	render() {
		const { panels } = this.props;
		const { activeTab } = this.state;
		return (
			<div className='accordion' role='tablist'>
				{panels?.map((panel, index) =>
					<Panel
						key={ index }
						activeTab={ activeTab }
						index={ index }
						panel = {panel}
						activateTab={ this.activateTab.bind(null, index) }
					/>
				)}
			</div>
		);
	}
}

export default Accordion;