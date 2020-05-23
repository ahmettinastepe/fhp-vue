export default class {
    constructor(
        title,
        isActive = false,
        isSelected = false,
        indexNumber = 0,
        isTitleShow = false
    ) {
        this.title = title,
            this.isActive = isActive,
            this.isSelected = isSelected,
            this.indexNumber = indexNumber,
            this.isTitleShow = isTitleShow
    }
}