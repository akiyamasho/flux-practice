# Flux Practice

Just some quick practice for setting up flux on a local k3d cluster

### Arch

- MLE - (python, tensorflow) simple linear classifier that takes titanic dataset for survival predictions, because my heart will go on
- Backend - (go) Simple API `/api/runModel` that simply runs a model predictions from `mle/` folder
- Frontend - (react-redux) Simple frontend that retrieves from backend API, based on this simple [CRA boilerplate](https://github.com/akiyamasho/cra-boilerplate) by yours truly

### Requirements

- Docker
- See corresponding `README.md` for `backend`, `frontend`, and `ml` for details

### Local Deployment

`docker-compose up`
