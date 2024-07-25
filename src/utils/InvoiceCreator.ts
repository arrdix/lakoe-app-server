function invoiceCreator() {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month =
        currentDate.getMonth() < 10 ? `0${currentDate.getMonth() + 1}` : currentDate.getMonth() + 1
    const day = currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : currentDate.getDate()
    const randomNumber = Date.now()

    return `INV/${year}${month}${day}/LKE/${randomNumber}`
}

export default invoiceCreator
