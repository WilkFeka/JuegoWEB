document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("subscription-form");
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");
    const closeButton = document.querySelector(".close-button");

    const fields = {
        name: document.getElementById("name"),
        email: document.getElementById("email"),
        password: document.getElementById("password"),
        confirmPassword: document.getElementById("confirm-password"),
        age: document.getElementById("age"),
        phone: document.getElementById("phone"),
        address: document.getElementById("address"),
        city: document.getElementById("city"),
        postalCode: document.getElementById("postal-code"),
        dni: document.getElementById("dni")
    };

    const errors = {
        name: document.getElementById("name-error"),
        email: document.getElementById("email-error"),
        password: document.getElementById("password-error"),
        confirmPassword: document.getElementById("confirm-password-error"),
        age: document.getElementById("age-error"),
        phone: document.getElementById("phone-error"),
        address: document.getElementById("address-error"),
        city: document.getElementById("city-error"),
        postalCode: document.getElementById("postal-code-error"),
        dni: document.getElementById("dni-error")
    };

    const validations = {
        name: (value) => {
            if (value.length > 6 && /\s/.test(value)) return "";
            return "Nombre completo debe tener más de 6 letras y al menos un espacio.";
        },
        email: (value) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(value)) return "";
            return "Email debe tener un formato válido.";
        },
        password: (value) => {
            if (value.length >= 8 && /\d/.test(value) && /[a-zA-Z]/.test(value)) return "";
            return "Contraseña debe tener al menos 8 caracteres, formados por letras y números.";
        },
        confirmPassword: (value) => {
            if (value === fields.password.value) return "";
            return "Las contraseñas no coinciden.";
        },
        age: (value) => {
            if (parseInt(value) >= 18) return "";
            return "Edad debe ser un número entero mayor o igual a 18.";
        },
        phone: (value) => {
            const phoneRegex = /^\d{7,}$/;
            if (phoneRegex.test(value)) return "";
            return "Teléfono debe ser un número de al menos 7 dígitos sin espacios, guiones ni paréntesis.";
        },
        address: (value) => {
            if (value.length >= 5 && /\s/.test(value)) return "";
            return "Dirección debe tener al menos 5 caracteres, con letras, números y un espacio.";
        },
        city: (value) => {
            if (value.length >= 3) return "";
            return "Ciudad debe tener al menos 3 caracteres.";
        },
        postalCode: (value) => {
            if (value.length >= 3) return "";
            return "Código Postal debe tener al menos 3 caracteres.";
        },
        dni: (value) => {
            const dniRegex = /^\d{7,8}$/;
            if (dniRegex.test(value)) return "";
            return "DNI debe ser un número de 7 u 8 dígitos.";
        }
    };

    Object.keys(fields).forEach(key => {
        fields[key].addEventListener("blur", () => {
            const error = validations[key](fields[key].value);
            if (error) {
                errors[key].textContent = error;
                fields[key].classList.add("has-error");
            } else {
                fields[key].classList.remove("has-error");
            }
        });

        fields[key].addEventListener("focus", () => {
            errors[key].textContent = "";
        });
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let hasError = false;
        const formData = {};

        Object.keys(fields).forEach(key => {
            const error = validations[key](fields[key].value);
            errors[key].textContent = error;
            if (error) hasError = true;
            formData[key] = fields[key].value;
        });

        if (hasError) {
            showModal("Hay errores en el formulario. Por favor, corríjalos y vuelva a intentarlo.");
        } else {
            sendData(formData);
        }
    });

    function showModal(message) {
        modalMessage.textContent = message;
        modal.style.display = "block";
    }

    function handleSuccess(response, formData) {
        localStorage.setItem("formData", JSON.stringify(response));
        showModal(`Suscripción exitosa: ${JSON.stringify(formData, null, 2)}`);
    }

    function handleError(error) {
        showModal(`Error: ${error.message}`);
    }

    function sendData(data) {
        const queryParams = new URLSearchParams(data).toString();
        const url = `https://jsonplaceholder.typicode.com/users?${queryParams}`;

        fetch(url, {
            method: "POST"
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    handleSuccess(result, data);
                } else {
                    handleError(new Error("La suscripción falló. Por favor, intente nuevamente."));
                }
            })
            .catch(handleError);
    }

    const savedData = localStorage.getItem("formData");
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        Object.keys(fields).forEach(key => {
            fields[key].value = parsedData[key] || "";
        });
    }
});
