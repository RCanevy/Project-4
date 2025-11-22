📦 Info Service — Dockerised Microservice Deployed to Kubernetes

This project is a small cloud-native microservice built with Node.js, containerised using Docker, and deployed to a local Kubernetes cluster using Minikube.
It demonstrates modern DevOps practices including containerisation, Kubernetes manifests, liveness/readiness probes, scaling, service exposure, and rollout management.

📝 What This Project Explores ... 


Build and containerise microservices using Docker

Write Kubernetes manifests (Deployment, Service, Probes)

Work with Minikube for local cloud-native development

Diagnose and manage pod lifecycle, rollouts, and scaling

Use kubectl to interact with a Kubernetes cluster

Understand container networking and service exposure

It serves as a solid example of practical DevOps and cloud-native engineering fundamentals.


🚀 Features

Lightweight Node.js/Express microservice

Docker image built using a custom Dockerfile

Kubernetes Deployment with:

3 replicas

Liveness & readiness probes

ImagePullPolicy for local development

Kubernetes Service (NodePort) to expose API

Deployed and tested locally using Minikube

Supports scaling, rollout restarts, and health checks

🏗️ Tech Stack

Node.js (Express)

Docker (Image build + container runtime)

Kubernetes (Deployment, Service, probes)

Minikube (Local Kubernetes cluster)

kubectl (Kubernetes CLI)

📁 Project Structure
project-4-info-service/
│
├── server.js          # Microservice code
├── package.json
├── Dockerfile         # Container build file
│
├── deployment.yaml    # Kubernetes Deployment (3 replicas + probes)
└── service.yaml       # Kubernetes Service (NodePort 30080)

🔧 How to Run Locally (Without Kubernetes)
npm install
node server.js


Visit:

http://localhost:8080/info

🐳 Build & Run with Docker
docker build -t info-service:1.0 .
docker run -p 8080:8080 info-service:1.0

☸️ Deploying to Kubernetes (Minikube)

Start Minikube:

minikube start --driver=docker


Load the local Docker image:

minikube image load info-service:1.0


Apply manifests:

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml


Check resources:

kubectl get pods
kubectl get svc

🌐 Access the Service

Get Minikube IP:

minikube ip


Access the API:

http://<MINIKUBE-IP>:30080/info


Example response:

{
  "service": "info-service",
  "status": "running",
  "timestamp": "2025-11-21T22:21:00.321Z"
}

📈 Scaling the Service

Scale to 5 replicas:

kubectl scale deployment info-service --replicas=5


Restart rollout:

kubectl rollout restart deployment/info-service

🧹 Cleanup
kubectl delete -f deployment.yaml
kubectl delete -f service.yaml
minikube stop

