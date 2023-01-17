export type Task = {
    id: number;
    name: string;
    checked: boolean;
    search: boolean;
    like: boolean;
    description?: string;
}

export type TaskArray = Task[];
