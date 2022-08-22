function minNumberOfHours (initialEnergy: number, initialExperience: number, energy: number[], experience: number[]): number {
    let addedEnergy = 0;
    let addedExp = 0;
    for (let i = 0; i < energy.length; i++) {
        if (initialEnergy <= energy[i]) {
            addedEnergy = Math.max(addedEnergy, energy[i] - initialEnergy + 1);
        }
        if (initialExperience <= experience[i]) {
            addedExp = Math.max(addedExp, experience[i] - initialExperience + 1);
        }
        initialExperience += experience[i];
        initialEnergy -= energy[i];
    }
    return addedExp + addedEnergy;
}
