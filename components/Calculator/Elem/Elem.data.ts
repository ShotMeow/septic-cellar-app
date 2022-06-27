export interface IData {
    id: number;
    title: string;
    isActive: boolean;
    bottom: boolean;
}

export const data: IData[] = [
    {
        id: 1,
        title: "Одно",
        isActive: true,
        bottom: false,
    },
    {
        id: 2,
        title: "Двух",
        isActive: false,
        bottom: false,
    },
];
