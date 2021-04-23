import {NextApiRequest, NextApiResponse} from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Luiz'},
        {id: 2, name: 'Paul'},
        {id: 3, name: 'Joseph'},
    ]

    return response.json(users)
}