import * as jwt from 'jsonwebtoken'
import { Injectable } from '@nestjs/common'
import CONFIG from '../configs/config'

@Injectable()
export class AuthenticationMiddleware {
    use(req, res, next) {
        const headers = req.headers.authorization

        if (!headers || !headers.startsWith('Bearer')) {
            return res.sendStatus(401)
        }

        const token = headers && headers.split(' ')[1]

        jwt.verify(
            token,
            CONFIG.SECRET_SAUCE,
            (error: jwt.VerifyErrors, user: string | jwt.JwtPayload) => {
                if (error) {
                    return res.sendStatus(401)
                }

                res.locals.user = user
                next()
            }
        )
    }
}
