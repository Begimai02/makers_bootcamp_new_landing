$('#myBtnSecond').on('click', function () {
    let date = new Date();
    let today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    let data = {
        "records": [
            {
                "fields": {
                    "Имя": $('.inp-name').val(),
                    "Телефон": +$('.inp-phone').val(),
                    "Канал": "Website",
                    "Пингануть": today
                }
            }
        ]
    }
    fetch("https://api.airtable.com/v0/apprC89beaaHNKo1S/People", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer keyQJkrmWCeuqkabu",
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            $('.inp-name').val('')
            $('.inp-phone').val('')
        })
});