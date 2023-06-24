function linearSearch(list: number[], target: number): number | null {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === target) {
            return i
        }
    }
    return null
}