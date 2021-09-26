import JWT from 'jsonwebtoken';
import config from '../config/secret';

export default function AccessToken(role) {
    return function(req, res, next) {
        const token = req.headers['x-access-token'];
        console.log(token)
        if (!token) {
            return res.status(403).send({ Auth: false });
        } else {
            JWT.verify(token, config.secret, function (err, decoded) {
                if (err) {
                    return res.status(500).send({ auth: false });
                } else {
                    req.user = decoded.id;
                    
                    if (decoded.access >= role) {
                        next();
                    } else {
                        return res.status(401).send({ message: 'Não autorizado' });
                    }
                
                }
            });
        }
    }
}
