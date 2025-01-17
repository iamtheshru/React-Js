const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new": true,
                "completed": false,
                "failed": false,
                "title": "Task 1 Title",
                "description": "Description for Task 1",
                "date": "2025-01-17",
                "category": "Category A"
            },
            {
                "active": false,
                "new": false,
                "completed": true,
                "failed": false,
                "title": "Task 2 Title",
                "description": "Description for Task 2",
                "date": "2025-01-16",
                "category": "Category B"
            },
            {
                "active": true,
                "new": false,
                "completed": false,
                "failed": true,
                "title": "Task 3 Title",
                "description": "Description for Task 3",
                "date": "2025-01-15",
                "category": "Category C"
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new": true,
                "completed": false,
                "failed": false,
                "title": "Task 1 Title",
                "description": "Description for Task 1",
                "date": "2025-01-17",
                "category": "Category A"
            },
            {
                "active": false,
                "new": false,
                "completed": true,
                "failed": false,
                "title": "Task 2 Title",
                "description": "Description for Task 2",
                "date": "2025-01-16",
                "category": "Category B"
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new": false,
                "completed": true,
                "failed": false,
                "title": "Task 1 Title",
                "description": "Description for Task 1",
                "date": "2025-01-17",
                "category": "Category A"
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": false,
                "new": true,
                "completed": false,
                "failed": true,
                "title": "Task 1 Title",
                "description": "Description for Task 1",
                "date": "2025-01-17",
                "category": "Category D"
            },
            {
                "active": true,
                "new": false,
                "completed": false,
                "failed": false,
                "title": "Task 2 Title",
                "description": "Description for Task 2",
                "date": "2025-01-16",
                "category": "Category E"
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": false,
                "new": false,
                "completed": true,
                "failed": false,
                "title": "Task 1 Title",
                "description": "Description for Task 1",
                "date": "2025-01-17",
                "category": "Category F"
            },
            {
                "active": true,
                "new": true,
                "completed": false,
                "failed": false,
                "title": "Task 2 Title",
                "description": "Description for Task 2",
                "date": "2025-01-16",
                "category": "Category G"
            },
            {
                "active": false,
                "new": false,
                "completed": false,
                "failed": true,
                "title": "Task 3 Title",
                "description": "Description for Task 3",
                "date": "2025-01-15",
                "category": "Category H"
            }
        ]
    }
];

const admin = [{
    "id": 1,
    "email": "admin@me.com",
    "password": "123"
}];

export const SetLocalStorege = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorege = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    // console.log(employees, admin);

    return { employees, admin }
}