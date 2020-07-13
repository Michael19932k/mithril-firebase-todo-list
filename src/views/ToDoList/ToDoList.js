import m from "mithril"
import User from "../../models/User"
import "./ToDoList.css"




function ToDoList() {
    return {
        oninit: function () {
            User.loadList()
            // console.log(User.list)
        },
        view: function () {
            return m(".user-list", User.list.map(function (user) {
                return m(".user-list-item", user.ToDo,
                    m("button", {
                        onclick: function (e) {
                            e.preventDefault()
                            User.delete(user.ToDo)
                        },
                    }, "Delete"))
            }))
        }
    }
}
export default ToDoList