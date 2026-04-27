---
title: "Projects"
description: "Selected project work by Dingyi Tian."
aliases:
  - 项目
tags:
  - en
  - projects
---

[中文](../zh/Projects) | [[About Me|About Me]] | [[Resume|Resume]] | [[Blog|Blog]]

# Projects

## US Medical Resource Logistics System (Siglus)

**When**: 2022.07 - 2022.10  
**Stack**: AWS, EFK, Terraform, Java, Docker, PostgreSQL

This project supported a healthcare logistics system aimed at helping an African country build a medical supply chain infrastructure.

### My Contributions

- Configured AWS Lambda with Terraform to automate scheduled EC2 start/stop and reduce waste
- Built Prometheus-based monitoring and alerting, created Grafana dashboards, and forwarded alerts to WeCom through Flask
- Used Ansible to manage test VMs and helped assemble deployment packages
- Independently explored SkyWalking integration to improve monitoring and performance analysis

## Singapore Swab Registration System (SRS)

**When**: 2022.10 - 2024.12  
**Stack**: Azure, NestJS, Next.js, Docker, Kubernetes, Ansible, Istio, Vault, Terraform

This Singapore public-health system supported COVID-19 ART/PCR appointment booking and result submission.

### My Contributions

- Migrated CI/CD from Bamboo to GitLab CI and optimized parent-child pipelines for a monorepo
- Maintained and upgraded deployment tooling with Ansible
- Resolved a long-standing Terraform state synchronization issue shortly after joining
- Managed migration from Azure Single Server to Azure Flexible Server, including schema and networking challenges
- Operated services with Istio to strengthen service reliability and security
- Mentored junior teammates on Terraform, Kubernetes, and CI/CD practices during project iterations

## Singapore Children's Health E-Services

**When**: 2024.08 - Present  
**Stack**: Azure, Node.js, Docker, Kubernetes, Ansible, Helm

This project focuses on digital health services for children, serving both parents and public health organizations.

### My Contributions

- Served as the sole DevOps engineer, independently managing cloud ops, tool upgrades, monitoring, and CI/CD
- Participated in infrastructure rebuild and cloud migration, taking on stronger coordination responsibility during team lead absence
- Handled production dependency issues, made fast recovery decisions, and strengthened monitoring and fault tolerance
- Improved deployment workflows with Helm and refined project monitoring metrics
