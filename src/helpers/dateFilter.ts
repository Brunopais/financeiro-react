import { Item } from '../types/Items';

/* data , ano mes atual */
export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;

}

/* filtrar lista pelo mes */
export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newlist: Item[] = [];
    let [year, month] = date.split('-');

    for (let i in list) {
        if (
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newlist.push(list[i]);
        }
    }


    return newlist;

}