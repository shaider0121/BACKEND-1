import pool from '../comfig/db.js';

export const fetchAllBooks = async () => {
    const [rows] = await pool.query("SELECT * FROM tblbook");
    return rows;
}