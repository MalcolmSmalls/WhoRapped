// get questions
export async function getQuestions(req, res) {
  res.json('questions api get request')
}

// insert questions

export async function insertQuestions(req, res) {
  res.json('question api post request')
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
