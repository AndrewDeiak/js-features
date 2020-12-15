class Notes {
    #secret = "Something secret";

    leak() {
        console.log(this.#secret)
    }
}

const note = new Notes();
console.log(note.#secret); // Uncaught SyntaxError: Private field '#secret' must be declared in an enclosing class
note.leak();
