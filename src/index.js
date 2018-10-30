import React from 'react';
import Switch from 'react-switch';
import AppComponent from 'flow-app-component';

import './css/theme/default.css';

class ToggleComponent extends AppComponent {
  static properties = {
    iconUrl: '/assets/images/toggle-component.png',
    name: 'Toggle',
    type: 'ui-component',
    componentType: 'toggle',
    category: 'Inputs',
    parent: null,
    showOnComponentsPanel: true,
    isValuable: true,
    allowsChildren: false
  };

  constructor() {
    super();
    const newState = {
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
              id: 'event',
              name: 'Events',
              type: 'graph',
              options: {},
              data: null,
            },
          ],
        },
      ],

      ...ToggleComponent.properties
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

  renderContent() {
    return (
      <div className="toggle-container">
        <label htmlFor="toggle">
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
          <span>Toggle</span>
        </label>
      </div>
    );
  }
}

export default ToggleComponent;
