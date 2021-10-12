// Copyright 2019 - present Xlab
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Config from './config';

const defaultConfig: Config = {
  // schedule
  schedName: 'Auto translate metrics',
  // sched: '0 30 23 * * *', // update on 11pm UTC+8 by default
  sched: '0,5,10,15,20,25,30,35,40,45,50,55 * * * * *',
  // Metrics
  metricsDir:  'hypertronsTest',
  enMetricsFile: 'hypertronsTest/EnglishMetrics',
  resultMetricsFile: 'hypertronsTest/en2zhMetrics',
  zhMetricsFile: 'hypertronsTest/ChineseMetrics',
  title: 'Translate updated English Metrics',
  head: 'auto',
  base: 'main',
  body: 'Update the translation result status of English Metrics. It is walmly welcomed if you have interest to contribute to Chaoss metrics and help make it even better than it is today!',
  allowModify: true,
  command: '/translate',
  issue_header: `
  > Hi @{{author}}, we detect non-English characters in the issue. This comment is an auto translation to help other users to understand this issue.
  > ***We encourage you to describe your issue in English which is more friendly to other users.***`,
  issue_title: `
### {{title}}`,
  issue_body: `
{{body}}`,
};

export default defaultConfig;
