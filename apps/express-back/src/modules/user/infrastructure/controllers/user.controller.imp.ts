import {
  UserRepository,
  CreateUserDTO,
  CustomError,
  ForUserApiControllerRepo,
} from '@c18-04-m-node-react/api-modules';
import { Response, Request } from 'express';

export class UserApiControllerRepoImpl implements ForUserApiControllerRepo {
  constructor(private readonly userRepository: UserRepository) {}
  handleError(error: unknown, res: Response) {
    if (error instanceof CustomError) {
      return res
        .status(error.statusCode)
        .json({ error: 'Internal server error' });
    }

    return res.status(500).json({ error: 'Internal server error' });
  }

  //Crear usuario
  create = (req: Request, res: Response) => {
    const [error, createUser] = CreateUserDTO.create(req.body);
    if (error) {
      return res.status(400).json(error);
    }

    this.userRepository
      .create(createUser)
      .then((user) => {
        return res.status(201).json({ user });
      })
      .catch((error) => {
        this.handleError(error, res);
      });
  };

  // Obtener todos los usuarios
  getAll = (req: Request, res: Response) => {
    this.userRepository
      .getAll()
      .then((users) => {
        return res.status(200).json(users);
      })
      .catch((error) => {
        this.handleError(error, res);
      });
  };

  // Obtener un usuario por ID
  getById = (req: Request, res: Response) => {
    const userId = req.params.id;
    this.userRepository
      .getById(userId)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json(user);
      })
      .catch((error) => {
        this.handleError(error, res);
      });
  };

  // Actualizar un usuario
  update = (req: Request, res: Response) => {
    const userId = req.params.id;
    const updatedUserData = req.body;
    this.userRepository
      .update(userId, updatedUserData)
      .then((updatedUser) => {
        return res.status(200).json(updatedUser);
      })
      .catch((error) => {
        this.handleError(error, res);
      });
  };

  // Eliminar un usuario
  delete = (req: Request, res: Response) => {
    const userId = req.params.id;
    this.userRepository
      .delete(userId)
      .then(() => {
        return res.status(204).send();
      })
      .catch((error) => {
        this.handleError(error, res);
      });
  };
}
