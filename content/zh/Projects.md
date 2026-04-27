---
title: "项目"
description: "田丁毅的中文项目索引。"
aliases:
  - Projects
tags:
  - zh
  - projects
---

[English](../en/Projects) | [[About Me|关于我]] | [[Resume|简历]] | [[Blog|博客]]

# 项目

## US Medical Resource Logistics System (Siglus)

**时间**: 2022.07 - 2022.10  
**技术栈**: AWS, EFK, Terraform, Java, Docker, PostgreSQL

这是一个面向医疗物流场景的系统，目标是帮助非洲某国建设医疗物资供应链体系。

### 我的工作

- 使用 Terraform 配置 AWS Lambda，自动化 EC2 定时启停，优化云资源使用
- 搭建 Prometheus 监控与告警，制作 Grafana 看板，并用 Flask 转发告警到企业微信
- 使用 Ansible 管理测试环境虚机，并协助搭建项目部署包
- 主动研究 SkyWalking 的集成方向，增强监控与性能分析能力

## Singapore Swab Registration System (SRS)

**时间**: 2022.10 - 2024.12  
**技术栈**: Azure, NestJS, Next.js, Docker, Kubernetes, Ansible, Istio, Vault, Terraform

这是一个新加坡政府公共卫生相关系统，用于支持 COVID-19 ART/PCR 检测预约与结果上传。

### 我的工作

- 作为核心成员，将 CI/CD 从 Bamboo 迁移到 GitLab CI，并优化 monorepo 的父子流水线
- 使用 Ansible 维护和升级部署工具链
- 进入项目后较快解决长期存在的 Terraform state 同步问题
- 推动数据库从 Azure Single Server 迁移到 Azure Flexible Server，处理结构与网络差异
- 使用 Istio 参与微服务运行治理，保障系统可靠性与安全性
- 在迭代期间主动带教初级同事，帮助他们提升 Terraform、Kubernetes、CI/CD 实践能力

## Singapore Children's Health E-Services

**时间**: 2024.08 - Present  
**技术栈**: Azure, Node.js, Docker, Kubernetes, Ansible, Helm

这个项目聚焦儿童健康数字化服务，服务对象包括家长与公共卫生机构。

### 我的工作

- 作为唯一 DevOps 工程师，独立负责云运维、工具升级、监控与 CI/CD 维护
- 参与基础设施重建与云迁移，在团队负责人休假期间临时承担更强的协调责任
- 处理生产环境依赖问题，快速做出恢复判断，并补强监控与容错机制
- 使用 Helm 优化部署流程并重新定义监控指标
