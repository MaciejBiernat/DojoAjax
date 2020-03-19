from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)



@app.route('/')
def button_main():
    question = request.args.get('question')
    answer = request.args.get('answer')
    if question != None:

        return redirect(url_for("display_question", question=question, answer=answer))
    return render_template("index.html")


@app.route('/the-question')
def display_question():
    question = request.args.get('question')
    answer = request.args.get('answer')
    print(question)
    print(answer)
    return render_template("index.html", question=question, answer=answer)


# question-with-one-answer








if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8000,
        debug=True,
    )