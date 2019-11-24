class CustomError extends Error
{
    constructor(details)
    {
        super()
        this.message = String(details)
        this.details = details
    }
}

module.exports = CustomError