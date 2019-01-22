export const getIntakePercentage = (curr, max) => (curr === 0 ? 0 : curr / max);

export const getPercentage = (curr, max) => (getIntakePercentage(curr, max) * 100);
