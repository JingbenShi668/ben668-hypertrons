# 角色

定义仓库中成员的角色类型。不同的角色有不同的命令使用权限

## 配置参数

- name 名称

字符串类型。角色的名称。

- description 描述

字符串类型。角色的描述。

- users 用户

字符串数组类型。拥有该角色权限的用户。

- commands 命令

字符串数组类型。该角色的权限可以使用的命令。参见 `command` 组件。

## 关联组件

- command