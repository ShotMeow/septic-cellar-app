export interface IData {
    id: number;
    title: string;
    isActive: boolean;
}

export const data: IData[] = [
    {
        id: 1,
        title: "Одно",
        isActive: true,
    },
    {
        id: 2,
        title: "Двух",
        isActive: false,
    },
];
