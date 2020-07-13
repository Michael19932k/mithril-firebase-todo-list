import m from "mithril"

import ToDoList from "./views/ToDoList/ToDoList.js"
import AddToDo from "./views/AddToDo/AddToDo.js"



m.route(document.body, "/list", {
    "/list": {
        render: function() {
            return m(AddToDo)
        }
    },
})

   