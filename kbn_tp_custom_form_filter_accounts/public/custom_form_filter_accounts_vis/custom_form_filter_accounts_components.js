/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { useState } from 'react';

import {
  EuiButton,
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiSpacer,
} from '@elastic/eui';

export class CustomFormFilterAccountsComponent extends React.Component {

  constructor(props) {
    super(props);
    props.vis.params.filterCounter = 0;
    this.state = {
      age: "",
      minimumBalance: ""
    };
    if(props.vis.params.age != null && !isNaN(props.vis.params.age))
      this.state.age = String(props.vis.params.age);
    if(props.vis.params.minimumBalance != null && !isNaN(props.vis.params.minimumBalance))
      this.state.minimumBalance = String(props.vis.params.minimumBalance);
  }

  /* return null if it is not a number */
  filterOutNonNumber = (s) => {
    if(s == null)
      return null;
    if(!isFinite(s))
      return null;
    return s;
  }

  onClickButtonApplyFilter = () => {
    this.props.vis.params.filterCounter++;
    this.props.vis.params.age = parseInt(this.filterOutNonNumber(this.state.age));
    this.props.vis.params.minimumBalance = parseFloat(this.filterOutNonNumber(this.state.minimumBalance));
    this.props.vis.updateState();
  };

  onClickButtonDeleteFilter = () => {
    this.props.vis.params.filterCounter = -1;
    this.props.vis.updateState();
  };

  onClickButtonClearForm = () => {
    this.props.vis.params.filterCounter = -1;
    this.state.age = "";
    this.state.minimumBalance = "";
    this.props.vis.updateState();
  };

  onFormChange = (event) => {
    const target = event.target;
    const valueStr = target.value;
    const name = target.name;
    //there is no typing validation in this sample code
    this.setState({
      [name]: valueStr
    });
  };

  render() {
    const minimumBalanceHelpText = `Input accounts minimum balance (Maximum is ${this.props.vis.params.maximumBalance})`;
    return (
      <div>
        <EuiForm>
          <EuiFormRow label="Age" helpText="Input customer age">
            <EuiFieldText name="age" onChange={e => this.onFormChange(e)} value={this.state.age} />
          </EuiFormRow>
          <EuiFormRow label="Minimum balance" helpText={minimumBalanceHelpText} >
            <EuiFieldText name="minimumBalance" onChange={e => this.onFormChange(e)} value={this.state.minimumBalance} />
          </EuiFormRow>
          <EuiSpacer />
          <EuiButton onClick={this.onClickButtonApplyFilter} fill>Apply filter</EuiButton>&nbsp;
          <EuiButton onClick={this.onClickButtonDeleteFilter} >Delete filter</EuiButton>&nbsp;
          <EuiButton onClick={this.onClickButtonClearForm} >Clear form</EuiButton>
        </EuiForm>
      </div>
    );
  }

  componentDidMount() {
    this.props.renderComplete();
  }

  componentDidUpdate() {
    this.props.renderComplete();
  }
}
