const role = `SELECT R.name FROM roles AS R LEFT
                JOIN agents as A ON A.role_id=R.id where A.id = $1`
export{
  role
}