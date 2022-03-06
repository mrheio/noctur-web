const createBaseRepo = (db) => {
    const getAll$ = () => {
        return db.getAll$();
    };

    const getById = (id) => {
        return db.getById(id);
    };

    const getById$ = (id) => {
        return db.getById$(id);
    };

    const getWhere = (...where) => {
        return db.getWhere(where);
    };

    const getWhere$ = (...where) => {
        return db.getWhere$(where);
    };

    const add = async (data) => {
        await db.add(data);
    };

    const deleteById = async (id) => {
        await db.deleteById(id);
    };

    const deleteWhere = async (...where) => {
        await db.deleteWhere(where);
    };

    const update = async (id, newData) => {
        await db.update(id, newData);
    };

    return {
        getAll$,
        getById,
        getById$,
        getWhere,
        getWhere$,
        add,
        deleteById,
        deleteWhere,
        update,
    };
};

export default createBaseRepo;
