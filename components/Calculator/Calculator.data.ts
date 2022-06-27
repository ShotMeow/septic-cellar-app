export interface ICalc {
    id: number;
    title: string;
    isActive: boolean;
}

export const data: ICalc[] = [
    {
        id: 1,
        title: "Тип септика",
        isActive: true,
    },
    {
        id: 2,
        title: "Диаметр и количество колец",
        isActive: false,
    },
    {
        id: 3,
        title: "Наличие днища колодца",
        isActive: false,
    },
    {
        id: 4,
        title: "Расстояние от септика до дома",
        isActive: false,
    },
];
