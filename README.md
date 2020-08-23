# Flux Practice

Just some quick practice for setting up flux on a local k3d cluster

### Arch

- MLE - (python, tensorflow) simple linear classifier that takes titanic dataset for survival predictions, because my heart will go on
- Backend - (go) Simple API `/api/runModel` that simply loads the built titanic model and returns Rose and Jack's survival
- Frontend - (react-redux) Simple frontend that retrieves from backend API, based on this simple [CRA boilerplate](https://github.com/akiyamasho/cra-boilerplate) by yours truly

### Requirements

- [Docker](https://docs.docker.com/get-docker/)
- [`k3d` v3.0.1](https://github.com/rancher/k3d/releases/tag/v3.0.1)
- [`fluxctl`](https://docs.fluxcd.io/en/1.18.0/references/fluxctl.html)
- [`helm` v3.3](https://github.com/helm/helm/releases/tag/v3.3.0)
- [Optional] [`k9s` for visualisation](https://github.com/derailed/k9s)

See corresponding `README.md` for `backend`, `frontend`, and `ml` for details

### Quick Testing

If you just want to check how the end-to-end works, simply use Docker compose:

1. `docker-compose up`
2. Access the frontend at http://localhost:5000
3. Access the backend at http://localhost:10000/api/getModelPredictions

### Flux Setup

For the scope of this test, simply use `test` as the cluster name

1. Fork the repo

2. Create a local cluster

```bash
k3d cluster create test
```

3. Setup `flux` in the cluster

a. Create the `flux` namespace

```bash
kubectl create ns flux
```

b. Install Flux

```bash
export GHUSER="YOURUSER"
fluxctl install \
--git-user=${GHUSER} \
--git-email=${GHUSER}@users.noreply.github.com \
--git-url=git@github.com:${GHUSER}/flux-practice \
--git-path=namespaces,workloads \
--namespace=flux | kubectl apply -f -
```

c. Wait for Flux to start

```bash
kubectl -n flux rollout status deployment/flux
``` 

d. Get the key with the command below and provide write access to your forked GitHub repo in `Setting -> Deploy Keys`:

```bash
fluxctl identity --k8s-fwd-ns flux
```

e. Install the frontend and backend charts with `helm`

```bash
helm install backend charts/backend
helm install frontend charts/frontend

```