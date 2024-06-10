document.addEventListener('DOMContentLoaded', () => {
    const teamsContainer = document.getElementById('teams-container');
    const addTeamButton = document.getElementById('add-team-button');

    addTeamButton.addEventListener('click', () => addTeam());

    function addTeam() {
        const teamRow = document.createElement('div');
        teamRow.className = 'team-row';

        const teamNameInput = document.createElement('input');
        teamNameInput.type = 'text';
        teamNameInput.placeholder = 'Team Name';
        teamNameInput.className = 'team-name';

        const pointsDisplay = document.createElement('span');
        pointsDisplay.textContent = '0';
        pointsDisplay.className = 'points-display';

        const pointControls = document.createElement('div');
        pointControls.className = 'point-controls';

        const addPointButton = document.createElement('button');
        addPointButton.textContent = '+';
        addPointButton.addEventListener('click', () => updatePoints(pointsDisplay, 1));

        const removePointButton = document.createElement('button');
        removePointButton.textContent = '-';
        removePointButton.addEventListener('click', () => updatePoints(pointsDisplay, -1));

        const removeTeamButton = document.createElement('button');
        removeTeamButton.textContent = 'Remove Team';
        removeTeamButton.addEventListener('click', () => teamsContainer.removeChild(teamRow));

        pointControls.appendChild(addPointButton);
        pointControls.appendChild(removePointButton);
        teamRow.appendChild(teamNameInput);
        teamRow.appendChild(pointsDisplay);
        teamRow.appendChild(pointControls);
        teamRow.appendChild(removeTeamButton);
        teamsContainer.appendChild(teamRow);
    }

    function updatePoints(pointsDisplay, change) {
        let currentPoints = parseInt(pointsDisplay.textContent);
        currentPoints += change;
        pointsDisplay.textContent = currentPoints;
    }
});
