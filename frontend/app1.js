document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const taskName = document.getElementById('taskName').value;
        const taskDetails = document.getElementById('taskDetails').value;
        const taskPriority = document.getElementById('taskPriority').value;
        const taskDueDate = document.getElementById('taskDueDate').value;

        const task = {
            name: taskName,
            details: taskDetails,
            priority: taskPriority,
            dueDate: taskDueDate
        };
        //method: 'POST'
        fetch('http://127.0.0.1:8080/api/tasks', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
                /*
                return response.json().then(errors => {
                    throw new Error(errors.map(e => e.defaultMessage).join(", "));
                });
                */
            }
            return response.json();
        })
        .then(data => console.log("タスクが追加されました", data))
        .catch(error => console.error("エラー:", error.message));
        /*
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // 新しいタスクをUIに追加
            const li = document.createElement('li');
            li.textContent = `${data.name} - ${data.details} - ${data.priority} - ${data.dueDate}`;
            taskList.appendChild(li);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        */
    });
});
