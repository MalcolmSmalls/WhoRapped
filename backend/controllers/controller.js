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

// insert all questions

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

// delete all questions

export async function deleteQuestions(req, res) {
  try {
    await Questions.deleteMany()
    res.json({ msg: 'Questions deleted successfully' })
  } catch (error) {
    res.json({ error })
  }
}

// get results

export async function getResult(req, res) {
  try {
    const r = await Results.find()
    res.json(r)
  } catch (error) {
    res.json({ error })
  }
}

// post results

export async function storeResult(req, res) {
  try {
    const { username, result, points } = req.body
    if (!username && !result) throw new Error('Data not provided')

    Results.create({ username, result, points }).then(function (error, data) {
      res.json({ msg: 'Result Saved Successfully' })
    })
  } catch (error) {
    res.json({ error })
  }
}

export async function deleteResult(req, res) {
  try {
    await Results.deleteMany()
    res.json({ msg: 'Results successfully deleted' })
  } catch (error) {
    res.json({ error })
  }
}
