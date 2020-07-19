import m from "mithril"
import {db} from "../../FireBase"



var User = {
    list: [],
    loadList: function () {
        db.collection("listOfToDo").onSnapshot(function(querySnapshot) {
            User.list = []
        querySnapshot.forEach(function(doc) {
            User.list.push({...doc.data(),id:doc.id})
            m.redraw()
        });
    });
        console.log(User.list)
    },

    current: { toDo: "" },
    save: function () {
            db.collection('listOfToDo').add({
                toDo: User.current.toDo
              });
              User.current = { toDo: "" }
    },

    valueToDelete: "",
    delete: function (id) {
        db.collection("listOfToDo").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
            m.redraw()
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
}

export default User