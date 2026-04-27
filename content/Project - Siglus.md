---
title: "US Medical Resource Logistics System (Siglus)"
description: "Project note for Siglus."
aliases:
  - Siglus
tags:
  - project
  - aws
  - terraform
  - observability
---

# US Medical Resource Logistics System (Siglus)

**When / 时间**: 2022.07 - 2022.10  
**Stack / 技术栈**: AWS, EFK, Terraform, Java, Docker, PostgreSQL

这是一个面向医疗物流场景的系统，目标是帮助非洲某国建设医疗物资供应链体系。  
This project supported a healthcare logistics system aimed at helping an African country build a medical supply chain infrastructure.

## My Contributions / 我的工作

- 使用 Terraform 配置 AWS Lambda，自动化 EC2 定时启停，优化云资源使用。  
  Configured AWS Lambda with Terraform to automate scheduled EC2 start/stop and reduce waste.
- 搭建 Prometheus 监控与告警，制作 Grafana 看板，并用 Flask 转发告警到企业微信。  
  Built Prometheus-based monitoring and alerting, created Grafana dashboards, and forwarded alerts to WeCom through Flask.
- 使用 Ansible 管理测试环境虚机，并协助搭建项目部署包。  
  Used Ansible to manage test VMs and helped assemble deployment packages.
- 主动研究 SkyWalking 的集成方向，增强监控与性能分析能力。  
  Independently explored SkyWalking integration to improve monitoring and performance analysis.

## Related Notes / 相关笔记

- [[Projects]]
- [[Resume]]
