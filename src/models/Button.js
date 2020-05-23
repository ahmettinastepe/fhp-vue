export default class {
    constructor(
        title,
        isRemoved = false,
        isSelected = false,
        indexNumber = 0
    ) {
        this.title = title,
            this.isRemoved = isRemoved,
            this.isSelected = isSelected,
            this.indexNumber = indexNumber
    }
}