let questionBackUp = [
    {
        "questionType": 1,
        "id": 1,
        "content": "Nội dung câu hỏi số 1, đáp án nào là đáp án đúng",
        "answers": [
            {
                "id": "2",
                "exact": true,
                "content": "Đáp án A cho câu 1",
                "STT": null
            },
            {
                "id": "3",
                "exact": false,
                "content": "Đáp án B cho câu 1",
                "STT": null
            },
            {
                "id": "4",
                "exact": false,
                "content": "Đáp án C cho câu 1",
                "STT": null
            },
            {
                "id": "5",
                "exact": false,
                "content": "Đáp án D cho câu 1",
                "STT": null
            }
        ]
    },
    {
        "questionType": 1,
        "id": 2,
        "content": "Nội dung câu hỏi số 2, đáp án nào là đáp án đúng",
        "answers": [
            {
                "id": "2",
                "exact": true,
                "content": "Đáp án A cho câu 2",
                "STT": null
            },
            {
                "id": "3",
                "exact": false,
                "content": "Đáp án B cho câu 2",
                "STT": null
            },
            {
                "id": "4",
                "exact": false,
                "content": "Đáp án C cho câu 2",
                "STT": null
            },
            {
                "id": "5",
                "exact": false,
                "content": "Đáp án D cho câu 2",
                "STT": null
            }
        ]
    },
    {
        "questionType": 1,
        "id": 3,
        "content": "Nội dung câu hỏi số 3, đáp án nào là đáp án đúng",
        "answers": [
            {
                "id": "2",
                "exact": true,
                "content": "Đáp án A cho câu 3",
                "STT": null
            },
            {
                "id": "3",
                "exact": false,
                "content": "Đáp án B cho câu 3",
                "STT": null
            },
            {
                "id": "4",
                "exact": false,
                "content": "Đáp án C cho câu 3",
                "STT": null
            },
            {
                "id": "5",
                "exact": false,
                "content": "Đáp án D cho câu 3",
                "STT": null
            }
        ]
    },
    {
        "questionType": 1,
        "id": 4,
        "content": "Nội dung câu hỏi số 4, đáp án nào là đáp án đúng",
        "answers": [
            {
                "id": "2",
                "exact": true,
                "content": "Đáp án A cho câu 4",
                "STT": null
            },
            {
                "id": "3",
                "exact": false,
                "content": "Đáp án B cho câu 4",
                "STT": null
            },
            {
                "id": "4",
                "exact": false,
                "content": "Đáp án C cho câu 4",
                "STT": null
            },
            {
                "id": "5",
                "exact": false,
                "content": "Đáp án D cho câu 4",
                "STT": null
            }
        ]
    },
    {
        "questionType": 2,
        "id": 5,
        "content": "Nội dung câu hỏi số 5, điền vào đáp án đúng",
        "answers": []
    }
]
let questionList = [];
const fetchQuestion = async () => {
    try {
        const res = await axios({
            url: "https://61af724d3e2aba0017c4935f.mockapi.io/api/questions",
            method: "GET",
        });
        console.log(typeof res.data)
        return res.data
    } catch (error) {
        console.log(err)
    }

}

const renderQuestion = () => {
    let htmlContent = "";
    for (let i in questionList) {
        htmlContent += questionList[i].render(+i + 1);
    }
    document.getElementById("questionContainer").innerHTML = htmlContent;
}


const mapData = (data = []) => {
    questionList = data.map((item, index) => {
        const { questionType, id, content, answers } = item;
        if (questionType === 1) {
            return new MultipleChoice(questionType, id, content, answers);
        } else {
            return new FillIngBlank(questionType, id, content, answers);
        }
    })

}

fetchQuestion().then((data) => {

    mapData(data);
    renderQuestion()


})


const submit = () => {
    let court = 0;
    for (let result of questionList) {
        if (result.checkExact()) {
            court++
        }
    }

    alert("Bạn đúng " + `${court}` + "/" + `${questionList.length} câu`)
}
