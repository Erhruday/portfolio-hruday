import db from '../../config/db';

module.exports = async (req, res) => {
    db.query(
        `SELECT *
    FROM blogs
    WHERE post_id = ?`[`${req.query.id}`]
    );
    res.status(200).json({ profile });
};
