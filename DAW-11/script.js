document.addEventListener('DOMContentLoaded', () => {
    const fetchAllBtn = document.getElementById('traerTodos');
    const filterForm = document.getElementById('filterForm');
    const characterContainer = document.getElementById('characterContainer');

    fetchAllBtn.addEventListener('click', fetchAllCharacters);
    filterForm.addEventListener('submit', fetchFilteredCharacters);

    function fetchAllCharacters() {
        characterContainer.innerHTML = '';
        for (let i=1; i<=42; i++){
            fetch(`https://rickandmortyapi.com/api/character?page=${i}`)
                .then(response => response.json())
                .then(data => displayAllCharacters(data.results))
                .catch(error => showError(error));
        }
    }

    function fetchFilteredCharacters(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const status = document.getElementById('status').value;
        const species = document.getElementById('species').value;
        const type = document.getElementById('type').value;
        const gender = document.getElementById('gender').value;

        let url = 'https://rickandmortyapi.com/api/character/?';
        if (name) url += `name=${name}&`;
        if (status) url += `status=${status}&`;
        if (species) url += `species=${species}&`;
        if (type) url += `type=${type}&`;
        if (gender) url += `gender=${gender}&`;

        fetch(url)
            .then(response => response.json())
            .then(data => displayCharacters(data.results))
            .catch(error => showError(error));
    }

    function displayCharacters(characters) {
        characterContainer.innerHTML = '';
        characters.forEach(character => {
            const characterDiv = document.createElement('div');
            characterDiv.classList.add('character');
            characterDiv.innerHTML = `
                <h3>${character.name}</h3>
                <p>Status: ${character.status}</p>
                <p>Species: ${character.species}</p>
                <p>Type: ${character.type}</p>
                <p>Gender: ${character.gender}</p>
            `;
            characterContainer.appendChild(characterDiv);
        });
    }
    function displayAllCharacters(characters) {
        characters.forEach(character => {
            const characterDiv = document.createElement('div');
            characterDiv.classList.add('character');
            characterDiv.innerHTML = `
                <h3>${character.name}</h3>
                <p>Status: ${character.status}</p>
                <p>Species: ${character.species}</p>
                <p>Type: ${character.type}</p>
                <p>Gender: ${character.gender}</p>
            `;
            characterContainer.appendChild(characterDiv);
        });
    }

    function showError(error) {
        characterContainer.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
});