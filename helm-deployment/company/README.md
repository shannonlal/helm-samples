## Install Company Repo

```
helm install company/
```

## Upgrade a helm chart

```
helm upgrade ${helm deployment name} company/
```

## Delete a Helm Chart Deployment
```
helm delete "helm name"
```

## Connect to DB
```
kubectl port-forward -n default company-db-599bc859b6-v5qk9 5433:5432
```