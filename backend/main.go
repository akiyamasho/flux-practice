package main

import (
    "encoding/json"
    "log"
    "net/http"
)

func runModel(w http.ResponseWriter, r *http.Request){
    s := `{}`
    js, err := json.Marshal(s)

    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    w.Write(js)
}

func handleRequests() {
    http.HandleFunc("/api/runModel", runModel)
    log.Fatal(http.ListenAndServe(":10000", nil))
}

func main() {
    handleRequests()
}