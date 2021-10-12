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

import { configClass, configProp } from '../../config-generator/decorators';
import defaultConfig from './defaultConfig';

@configClass({
  description: 'Auto transalte english metrics config',
})
export default class Config {

  @configProp({
    description: 'Schedule Name',
    defaultValue: defaultConfig.schedName,
  })
  schedName: string;

  @configProp({
    description: 'Schedule expression',
    defaultValue: defaultConfig.sched,
  })
  sched: string;

  // Metrics
  @configProp({
    description: 'Metrics directory',
    defaultValue: defaultConfig.metricsDir,
  })
  metricsDir: string;

  @configProp({
    description: 'enMetricsFile file',
    defaultValue: defaultConfig.enMetricsFile,
  })
  enMetricsFile: string;

  @configProp({
    description: 'en2zhMetrics file',
    defaultValue: defaultConfig.resultMetricsFile,
  })
  resultMetricsFile: string;

  @configProp({
    description: 'EnglishMetrics file',
    defaultValue: defaultConfig.zhMetricsFile,
  })
  zhMetricsFile: string;

  @configProp({
    description: 'the title of a new pull request',
    defaultValue: defaultConfig.title,
  })
  title: string;

  @configProp({
    description: 'contributing guide header.',
    defaultValue: defaultConfig.head,
  })
  head: string;

  @configProp({
    description: 'default branch to check out from',
    defaultValue: defaultConfig.base,
  })
  base: string;

  @configProp({
    description: 'body in isuue for thanking for contributors.',
    defaultValue: defaultConfig.body,
  })
  body: string;

  @configProp({
    description: 'contributing guide body to welcome new contributors.',
    defaultValue: defaultConfig.allowModify,
  })
  allowModify: boolean;

  @configProp({
    description: 'command in issue comment',
    defaultValue: defaultConfig.command,
  })
  command: string;

  @configProp({
    description: 'Header template',
    defaultValue: defaultConfig.issue_header,
    renderParams: [ 'author' ],
  })
  issue_header: string;

  @configProp({
    description: 'Title template',
    defaultValue: defaultConfig.issue_title,
    renderParams: [ 'title' ],
  })
  issue_title: string;

  @configProp({
    description: 'Body template',
    defaultValue: defaultConfig.issue_body,
    renderParams: [ 'body' ],
  })
  issue_body: string;
}
