class greeting {
    constructor() {
        this.greeting = createElement("h2")
        this.greeting.position(900, 200)
        this.greeting.id("greeting")

        this.DogName = createInput("").attribute("placeholder", "Name Of the Dog")
        this.DogName.position(720, 135)
        this.DogName.id("DogName")

        function handleMousePressed() {
            addName.mousePressed(() => {

                var message = `
      Let's feed our Pet ${this.DogName.value()}
     `
                this.greeting.html(message)
            })
        }
    }
    display() {
        this.greeting.display()
        this.handleMousePressed()
    }
}