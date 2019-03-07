import React from 'react';
import Switch from 'react-switch';
import AppComponent from 'flow-app-component';

import './css/theme/default.css';

class ToggleComponent extends AppComponent {
  constructor() {
    super();
    const newState = {
      toggleState: false,
      interactiveMode: false,
      readOnly: false,
      properties: [
        {
          categoryName: 'General',
          categoryDescription: 'Basic settings for the toggle',
          properties: [],
        },
        {
          categoryName: 'Events',
          categoryDescription: 'Events for the toggle button',
          properties: [
            {
              id: 'load',
              name: 'Load Event',
              type: 'graph',
              options: {},
              data: null,
            },
            {
              id: 'hover',
              name: 'Hover Event',
              type: 'graph',
              options: {},
              data: null,
            },
            {
              id: 'change',
              name: 'Change Event',
              type: 'graph',
              options: {},
              data: null,
            },
          ],
        },
      ],
      iconUrl: '/assets/images/toggle-component.png',
      name: 'Toggle',
      type: 'ui-component',
      componentType: 'toggle',
      category: 'Inputs',
      parent: null,
      showOnComponentsPanel: true,
      isValuable: true,
      allowsChildren: false,
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

  componentDidMount(){
      const interactiveMode = !(this.props.propertyData.interactiveMode === undefined);
      this.setState({interactiveMode, readOnly: interactiveMode});
      this.triggerGraphEvent('load');
  }

  triggerGraphEvent(eventId) {
    const graphId = this.getPropertyData(eventId);
    if (typeof this.getElementProps().onEvent === 'function') {
      this.getElementProps().onEvent(graphId);
    }
  }

  toggleSwitch = (toggleState) => {
    if(!this.state.readOnly){
       this.setState({toggleState});
    }else{
        this.setState({toggleState: !toggleState});
    }
    this.triggerGraphEvent('change')
  }
  
  handleDbClick = () => {
      if(this.state.interactiveMode){
          this.setState(prevState => ({readOnly: !prevState.readOnly}))
      }
  }
 
  renderContent() {
    return (
      <div 
        className="toggle-container"
        onMouseOver={() => this.triggerGraphEvent('hover')}
      >
        <label htmlFor="toggle">
          <span
              onDoubleClick={this.handleDbClick}
          >
            <Switch
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={19}
                height={15}
                width={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                id="toggle"
                onChange={this.toggleSwitch}
                checked={this.state.toggleState}
                className="toggle-input"
            />
          </span>
          <span>Toggle</span>
        </label>
      </div>
    );
  }
}

export default ToggleComponent;
