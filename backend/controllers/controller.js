import Questions from '../models/questionSchema.js'
import Results from '../models/resultSchema.js'
import questions from '../database/data.js'

// get questions
export async function getQuestions(req, res) {
  try {
    const q = await Questions.find()
    res.json(q)
  } catch (error) {
    res.json({ error })
  }
}

// insert questions

export async function insertQuestions(req, res) {
  try {
    Questions.insertMany({
      questions: questions,
    }).then(function (err, data) {
      res.json({ msg: 'Data Saved Successfully' })
    })
  } catch (error) {
    res.json({ error })
  }
}

// update questions
export async function updateQuestions(req, res) {
  res.json('question api update request')
}

// delete questions

export async function deleteQuestions(req, res) {
  res.json('question api delete request')
}

// get results

export async function getResult(req, res) {
  res.json('result api get request')
}

// post results

export async function storeResult(req, res) {
  res.json('result api post request')
}

export async function deleteResult(req, res) {
  res.json('result api delete request')
}
