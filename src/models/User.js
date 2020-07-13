import m from "mithril"



var User = {
    list: [{ ToDo: "pushups" }, { ToDo: "shopping" }, { ToDo: "study" }],
    loadList: function () {
        sessionStorage.setItem("list", JSON.stringify(User.list));
    },

    load: function () {

    },
    current: { ToDo: "" },
    save: function () {
        User.list.push(User.current)
        User.current = { ToDo: "" },
            sessionStorage.setItem("list", JSON.stringify(User.list));
    },

    valueToDelete: "",
    delete: function (val) {
        console.log(val)
       let newList = JSON.parse(sessionStorage.getItem("list"))
       
        newList = newList.filter(function (obj) {
            return obj.ToDo !== val;
        })
        sessionStorage.setItem("list", JSON.stringify(newList));
        console.log("newList")
        User.list = newList
    }
}


export default User