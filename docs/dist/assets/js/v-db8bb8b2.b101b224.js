"use strict";(self.webpackChunkvuepress_docs=self.webpackChunkvuepress_docs||[]).push([[429],{1673:(e,i,o)=>{o.r(i),o.d(i,{data:()=>t});const t={key:"v-db8bb8b2",path:"/deploy/overview/",title:"Overview of options for deploying μblog",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"CI/CD Tools",slug:"ci-cd-tools",children:[{level:3,title:"django-cdk",slug:"django-cdk",children:[]}]},{level:2,title:"Containers and container orchestration",slug:"containers-and-container-orchestration",children:[]},{level:2,title:"Differences",slug:"differences",children:[]}],filePathRelative:"deploy/overview/README.md",git:{updatedTime:1630382759e3,contributors:[{name:"Brian Caffey",email:"briancaffey2010@gmail.com",commits:1}]}}},3708:(e,i,o)=>{o.r(i),o.d(i,{default:()=>n});const t=(0,o(6252).uE)('<h1 id="overview-of-options-for-deploying-μblog" tabindex="-1"><a class="header-anchor" href="#overview-of-options-for-deploying-μblog" aria-hidden="true">#</a> Overview of options for deploying μblog</h1><p>This article will give an overview of the different ways that μblog can be deployed using different tools.</p><p>This project demonstrates how to deploy the μblog application to several different deployment targets:</p><ul><li>docker swarm running on a Raspberry Pi on your local network</li><li>Kubernetes cluster running locally on minikube</li><li>Heroku (for Django app) &amp; Netlify (for Vue/Quasar app)</li><li>DigitalOcean using docker swarm pre-installed on a droplet from the DigitalOcean marketplace</li><li>AWS ECS cluster running on Fargate compute instances</li><li>AWS EKS cluster running on EC2 instances</li></ul><h2 id="ci-cd-tools" tabindex="-1"><a class="header-anchor" href="#ci-cd-tools" aria-hidden="true">#</a> CI/CD Tools</h2><p>For docker swarm and local kubernetes deployments, a shell script is used to initiate the deployment process which involves building containers and and CLI tools for deployment:</p><ul><li><code>docker stack deploy</code> for docker swarm</li><li><code>kubctl apply</code> for minikube</li></ul><p>Heroku uses the <code>git push</code> git command to deploy changes when new commits are pushed to the Heroku repository.</p><p>When the application runs on docker swarm on DigitalOcean, it is updated using <code>docker stack deploy</code> from a GitLab CI/CD pipeline that remotely connects to the docker daemon runnong on the DigitalOcean droplet using SSH.</p><h3 id="django-cdk" tabindex="-1"><a class="header-anchor" href="#django-cdk" aria-hidden="true">#</a> <code>django-cdk</code></h3><p>The ECS and EKS deployments use the Cloud Development Kit (CDK) to both create AWS infrastructure and deploy μblog. The CDK code (Infrastructure as Code) is written in TypeScript and it references a npm package called <code>django-cdk</code> which was developed together with μblog. <code>django-cdk</code> is a library containing high-level CDK constructs for deploying secure and scalable Django applications on AWS.</p><h2 id="containers-and-container-orchestration" tabindex="-1"><a class="header-anchor" href="#containers-and-container-orchestration" aria-hidden="true">#</a> Containers and container orchestration</h2><p>To clarify terminology, all of the deployment targets (except for Heroku) use containers to run the applicaiton. The main difference in these deployments is the container orchestration tool used. The container orchestration tool refers to the tools that keeps track of the containers and their lifecycle and scaling. There are four main conatiner orchestration tools:</p><ul><li>docker-compose (used mostly for local development)</li><li>docker swarm</li><li>ECS (proprietary container orchestration tool from AWS, good AWS integration)</li><li>Kubernetes (Elastic Kubernetes Service) (an open-source version of Kubernetes that allows for running Kubernetes workloads on AWS)</li></ul><h2 id="differences" tabindex="-1"><a class="header-anchor" href="#differences" aria-hidden="true">#</a> Differences</h2><p>There are some variations in how the application is deployed across the different deployment targets.</p><ul><li>How and where to run Django management commands (migrations)</li><li>Frontend applicaiton hosting (nginx, S3, CDN)</li><li>Static files (collectstatic, nginx, S3, CDN)</li><li>Media files (images, videos, etc)</li><li>Domain and subdomains for the application (this is very important)</li><li>SSL certificates (this is also very important)</li><li>CI/CD (Updating the application)</li><li>Platform (amd64, arm64, M1 and Raspberry Pi 4)</li><li>Costs (free, low, medium, high)</li><li>Security (NAT, VPN, Firewall, etc)</li><li>Performance</li><li>Scalability</li><li>Reliability</li><li>Availability</li></ul>',17),n={render:function(e,i){return t}}}}]);