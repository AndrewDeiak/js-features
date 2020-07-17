/**
 *  throw error from one to another catch()
 * the execution: catch -> catch -> then
 */

new Promise((resolve, reject) => {
    throw new Error("SomeError")
})
    .catch(function (error) {
        if (error instanceof URIError) {
            /** process the error */
        } else {
            console.log("cannot process the error");
            throw error; /** throw this to the next catch */
        }
    })
    .then(() => console.log("not executed"))
    .catch(error => console.log(`Unknown error: ${error}`))
    .then(() => {
        console.log("Next then")
    })