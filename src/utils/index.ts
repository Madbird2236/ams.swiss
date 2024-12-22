export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US');
};

export const handleApiRequest = async (url: string, options: RequestInit): Promise<any> => {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const calculateTotalHours = (hours: number[]): number => {
    return hours.reduce((total, hour) => total + hour, 0);
};