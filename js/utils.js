"use strict";

class Utility {
    /**
     * Function loadJson
     * This function enables you to load a locally stored JSON file
     * @param pathToLocalJson the path to the locally stored JSON file
     */
    static loadJson(pathToLocalJson) {
        return fetch(pathToLocalJson)
            .then(response => {
                return response.json();
            })
            .catch(e => console.error(e));
    }
}