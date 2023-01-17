function objectToList<T extends Object>(objArray : T[], key : keyof T) : string {
    let list : string[] = [];
    objArray.forEach((obj : T) => {
        if (obj.hasOwnProperty(key)) {
            list.push(obj[key] as string);
        }
    });
    return list.join(', ');
}

export {
    objectToList
}