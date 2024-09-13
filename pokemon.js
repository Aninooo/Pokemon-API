async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Pokémon not found. Please check the name and try again.");
        }

        const data = await response.json();

        const pokemonSprite = data.sprites.front_default;
        const pokemonNameDisplay = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        const pokemonTypes = data.types.map(typeInfo => typeInfo.type.name).join(', ');
        const pokemonAbilities = data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
        const pokemonStats = data.stats.map(statInfo => `${statInfo.stat.name}: ${statInfo.base_stat}`).join(', ');

        const imgElement = document.getElementById("pokemonSprite");
        const nameElement = document.getElementById("pokemonNameDisplay");
        const typesElement = document.getElementById("pokemonTypes");
        const abilitiesElement = document.getElementById("pokemonAbilities");
        const statsElement = document.getElementById("pokemonStats");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        
        if(nameElement) nameElement.textContent = `Name: ${pokemonNameDisplay}`;
        if(typesElement) typesElement.textContent = `Types: ${pokemonTypes}`;
        if(abilitiesElement) abilitiesElement.textContent = `Abilities: ${pokemonAbilities}`;
        if(statsElement) statsElement.textContent = `Stats: ${pokemonStats}`;

        document.getElementById("pokemonNameDisplay").innerHTML = `<b>Name:</b>  ${pokemonNameDisplay}`;
        document.getElementById("pokemonTypes").innerHTML = `<b>Type:</b> ${pokemonTypes}`;
        document.getElementById("pokemonAbilities").innerHTML = `<b>Abilities: </b> ${pokemonAbilities}`;
        document.getElementById("pokemonStats").innerHTML = `<b>Stats: </b> ${pokemonStats}`;

    } catch (error) {
        alert(error.message);
        console.log(error);
    }
}

