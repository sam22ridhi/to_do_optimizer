document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.getElementById("input-box");
    const priorityInput = document.getElementById("priority");
    const completionTimeInput = document.getElementById("completion-time");
    const listContainer = document.getElementById("list-container");
    const addButton = document.getElementById("add-button");

    addButton.addEventListener("click", addTask);

    function addTask() {
        if (inputBox.value === "") {
            alert("You must write something");
        } else {
            let li = document.createElement("li");
            let taskDescription = `${inputBox.value}`;

            if (priorityInput.value !== "") {
                taskDescription += ` (Priority: ${priorityInput.value})`;
            }

            if (completionTimeInput.value !== "") {
                taskDescription += ` (Completion Time: ${completionTimeInput.value})`;
            }

            li.innerHTML = taskDescription;
            listContainer.appendChild(li);

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }

        inputBox.value = "";
        priorityInput.value = "";
        completionTimeInput.value = "";
        saveData();
    }

    listContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
        }
        saveData();
    }, false);

    function saveData() {
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask() {
        const storedData = localStorage.getItem("data");
        if (storedData) {
            listContainer.innerHTML = storedData;
        }
    }
});
