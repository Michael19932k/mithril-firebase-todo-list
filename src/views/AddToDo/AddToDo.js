import m from "mithril"
import User from "../../models/User"
import "./AddToDo.css"
import ToDoList from "../ToDoList/ToDoList"





function AddToDo() {
    return {
        view: function () {
            return m("form", {
                onsubmit: function (e) {
                    e.preventDefault()
                    User.save()
                }
            }, [
                m("label.label", "Add ToDo"),
                m("input.input[type=text]", {
                    required: true,
                    oninput: function (e) { User.current.toDo = e.target.value },
                    value: User.current.toDo
                }),
                m("button.button[type=submit]", "Add"),

            ], m(ToDoList)
            )
        }
    }
}
export default AddToDo