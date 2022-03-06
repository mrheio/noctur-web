import { Err } from '../../common/utils';
import teamRepo from '../../team/data/teamRepo';
import gameRepo from './gameRepo';
import { createGame } from './gameUtils';

const createGameService = () => {
    const add = async (game) => {
        try {
            await gameRepo.add(createGame(game));
        } catch (error) {
            if (error.code === 'already-exists') {
                throw Err.alreadyExists(`Jocul ${game.name} exista deja`);
            }
            throw error;
        }
    };

    const deleteById = async (id) => {
        await teamRepo.deleteByGameId(id);
        await gameRepo.deleteById(id);
    };

    return {
        ...gameRepo,
        add,
        deleteById,
    };
};

export default createGameService();
