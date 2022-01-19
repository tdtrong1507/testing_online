class FillIngBlank extends Question {
    constructor(type, id, content, answers) {
        super(type, id, content, answers)
    }


    render(index) {

        return `
            <div>
                <p class="lead font-italic" style="font-size: 30px;">Câu ${index} : ${this.content}</p>
                <input id="answer-${this.id}" type="text" class="form-control w-50">
            </div>
        `
    }

    checkExact() {
        let inputValue = document.getElementById(`answer-${this.id}`).value;
        inputValue = inputValue.toLowerCase();

        if (inputValue === this.answers[0].content.toLowerCase()) {
            return true
        }
        return false
    }
}