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

import { CustomFormFilterAccountsEditor } from './custom_form_filter_accounts_editor';
import { CustomFormFilterAccountsComponent } from './custom_form_filter_accounts_components';

import { setup as visualizations } from '../../../../src/legacy/core_plugins/visualizations/public/np_ready/public/legacy';

import { customFormFilterAccountsRequestHandler } from './custom_form_filter_accounts_request_handler.js';

const reactVisType = visualizations.types.createReactVisualization({
  name: 'custom_form_filter_accounts_vis',
  title: 'Form - Accounts',
  icon: 'visControls',
  description:
    'This sample custom visualization plugin contains a simple UI to adjust filter for accounts test data',
  visConfig: {
    component: CustomFormFilterAccountsComponent,
    defaults: {
      maximumBalance: 100000,
      filterCounter: 0, //0=no action -1=delete all filters,1=first time with filters, then 2 onward
      age: 20,
      minimumBalance: null
    },
  },
  editorConfig: {
    optionTabs: [
      {
        name: 'options',
        title: 'Options',
        editor: CustomFormFilterAccountsEditor,
      },
      //more tabs are possible
    ],
  },
  requestHandler: customFormFilterAccountsRequestHandler,
  responseHandler: 'none',
});

