
async function login(email, password, apiUrl) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
        });

        // if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
}

async function getTodos(apiUrl) {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
}

async function f() {
    try {
        let e = document.getElementById("email").value
        let p = document.getElementById("password").value

        let data = await login(e, p, "http://127.0.0.1:3000/api/v1/users/login")
        console.log(data);
        if (data.login) {
            document.getElementById("result").innerText = data.message
            document.getElementById("result").style.color = "green"
        }
        else {
            document.getElementById("result").innerText = data.message
            document.getElementById("result").style.color = "red"
        }
    }
    catch (err) {
        console.log(err)
        document.getElementById("result").innerText = data.message
        document.getElementById("result").style.color = "red"

    }
}

async function getAllTodos() {
    try {
        let data = await getTodos("http://127.0.0.1:3000/api/v1/todos")
        console.log("try to fetch")
        console.log(data);
    }
    catch (err) {
        console.log(err)

    }

}
