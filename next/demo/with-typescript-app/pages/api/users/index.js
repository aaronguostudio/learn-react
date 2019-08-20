import { users } from '../../../mock/user'

export default (req, res) => {
  res.status(200).json(users)
}
