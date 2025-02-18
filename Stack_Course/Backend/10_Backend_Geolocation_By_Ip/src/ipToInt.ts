export const ipToInt = (ipv4: string): number => {
    const int = ipv4.split('.').reduce((int: number, value: string) => {
        return int * 256 + parseInt(value, 10);
    }, 0);
    return int;
};
