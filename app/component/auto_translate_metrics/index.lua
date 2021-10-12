-- Copyright 2019 - present Xlab
--
-- Licensed under the Apache License, Version 2.0 (the "License");
-- you may not use this file except in compliance with the License.
-- You may obtain a copy of the License at
--
--     http://www.apache.org/licenses/LICENSE-2.0
--
-- Unless required by applicable law or agreed to in writing, software
-- distributed under the License is distributed on an "AS IS" BASIS,
-- WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
-- See the License for the specific language governing permissions and
-- limitations under the License.

-- Auto update report scheduler

--[[sched(compConfig.schedName, compConfig.sched, function ()
  wrap(function ()]]

function TableToStr(t)
  if t == nil then return "" end
  local retstr= "{"

  local i = 1
  for key,value in pairs(t) do
    local signal = ","
    if i==1 then
      signal = ""
    end

    if key == i then
      retstr = retstr..signal..ToStringEx(value)
    else
      if type(key)=='number' or type(key) == 'string' then
        retstr = retstr..signal..'['..ToStringEx(key).."]="..ToStringEx(value)
      else
        if type(key)=='userdata' then
          retstr = retstr..signal.."*s"..TableToStr(getmetatable(key)).."*e".."="..ToStringEx(value)
        else
          retstr = retstr..signal..key.."="..ToStringEx(value)
        end
      end
    end

    i = i+1
  end

  retstr = retstr.."}"
  return retstr
end

local issue_Body = '';
local enMetricsToChinese = '';
local enMetricsRaw = '';

on('IssueEvent', function (e)
  if (e.action == 'opened') then
--[[    local commentTitle = rendStr(compConfig.issue_title, {title=translatedTitle});
    issue_Body = rendStr(compConfig.issue_body, {body=translatedBody});]]
    local commentTitle = rendStr(compConfig.issue_title, e.title);
    issue_Body = rendStr(compConfig.issue_body, e.body);
    log('Enter ben_translate_Bot based on Hypertrons-------------');
    log('issue_Body-------------'..issue_Body);

    -- Translate English Metrics into Chinese
    enMetricsToChinese = translateMetrics(issue_Body,'zh')

    end
end)

on('CommandEvent', function (e)
  log('Enter...........................................')
  if (e.command == compConfig.command) then

    -- Save the English Metrics in related Issue to enMetrics file
    log('CommandEvent——————————————issue_Body-------------'..issue_Body);
    createOrUpdateFile(compConfig.enMetricsFile,issue_Body,'add English Metrics data','main');
--[[    if(enMetricsToChinese ~= nil) then
      log('enMetricsToChinese Content-----------------------------------')
      log('enMetricsToChinese Content: '..enMetricsToChinese)
    end]]

    -- 翻译结果完成后，将文件保存在auto分支上的txt文件中, getFileContent+createOrUpdateFile命令的组合使用
    enMetricsRaw = getFileContent(compConfig.resultMetricsFile).content
    getFileContent(compConfig.resultMetricsFile, function ()

    end);

    --[[    enMetricsNew = enMetricsRaw..'希望明天是个晴天～';]]

    log('prepare for combining ---------------------- '..enMetricsRaw);
    enMetricsNew = enMetricsRaw..TableToStr(enMetricsToChinese);
    --[[      enMetricsToChinese = '我是中国人，我喜欢吃苹果。']]
    log('update en2zhMetrics file-----------------------------');
    log('enMetricsNew-----------------------------'..enMetricsNew);
    createOrUpdateFile(compConfig.resultMetricsFile, enMetricsNew, 'save translation data', 'main');

    --翻译结果保存到文件中后，提交PR
--[[    newPullRequest(compConfig.title,compConfig.body,compConfig.head,compConfig.base,compConfig.allowModify);]]

  end
end)
