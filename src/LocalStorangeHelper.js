const taskId = "tasks";

//Xây dựng đối tượng dùng để tương tác với LocalStorage
var localAdapter = {

    saveTask: function (object) {

        var stringified = JSON.stringify(object);
        localStorage.setItem(taskId, stringified);
        return true;

    },
    getTask: function () {

        return JSON.parse(localStorage.getItem(taskId));

    },
    clearTask: function () {

        localStorage.removeItem(taskId);

    }

};

export default localAdapter;