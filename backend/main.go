package main

import (
    "encoding/json"
    "log"
    "net/http"
)

func getModelPredictions(w http.ResponseWriter, r *http.Request){
    s := `{ modelPredictions: {} }`
    js, err := json.Marshal(s)

    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

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