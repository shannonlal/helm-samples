# System Deployment information

## Traefik Ingress

### Values

To deploy traefik on AWS, we need to assign a static IP Address.  You then need to setup either NGINX or Traefik on the master to route the traffic to


If you enable the dashboard, also point the dashboard domain/subdomain to this IP address. Wait until the DNS record for that domain works, or Traefik won't be able to obtain a SSL certificate from Let's Encrypt.

### Install

```bash
helm install --version 1.56.1 --namespace kube-system --name traefik-ingress stable/traefik -f system/traefik-ingress/values.yaml
```

### Upgrade

```bash
helm upgrade --version 1.56.1 --namespace kube-system traefik-ingress stable/traefik -f system/traefik-ingress/values.yaml
```