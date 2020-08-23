package main

import (
    "encoding/json"
    "log"
    "net/http"
    tf "github.com/tensorflow/tensorflow/tensorflow/go"
)

func getModelPredictions(w http.ResponseWriter, r *http.Request){
    // Simply load the dummy model

    model, err := tf.LoadSavedModel("titanic",
             []string{"atag"}, nil)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    _ = model

    // Return dummy data

    s := `{ titanic_survival: { rose: 1.0, jack : 0.0 } }`
    js, err := json.Marshal(s)

    w.Header().Set("Content-Type", "application/json")
    w.Write(js)
}

func handleRequests() {
    http.HandleFunc("/api/getModelPredictions", getModelPredictions)
    log.Fatal(http.ListenAndServe(":10000", nil))
}

func main() {
    handleRequests()
}