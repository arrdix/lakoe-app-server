export class CreateProductDto {
    name: string
    description: string
    attachments: string
    isActive: boolean
    size: string
    minimumOrder: number

    constructor(
        name: string,
        description: string,
        attachments: string,
        isActive: boolean,
        size: string,
        minimumOrder: number
    ) {
        this.name = name
        this.description = description
        this.attachments = attachments
        this.isActive = isActive
        this.size = size
        this.minimumOrder = minimumOrder
    }
}
