import { query } from "../db";

interface Gamedashboard {
  title_1: string;
  title_2: string;
  para_1: string;
  para_2: string;
  banner_image_1: string;
  banner_image_2: string;
  banner_image_3: string;
  team_images: string[];
}

export const createGamedashboard = async (game_dashoboard: Gamedashboard) => {
  try {
    const {
      title_1,
      title_2,
      para_1,
      para_2,
      banner_image_1,
      banner_image_2,
      banner_image_3,
      team_images,
    } = game_dashoboard;
    const result = await query(
      "INSERT INTO game_dashboard (title_1, title_2, para_1, para_2, banner_image_1, banner_image_2, banner_image_3, team_images) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        title_1,
        title_2,
        para_1,
        para_2,
        banner_image_1,
        banner_image_2,
        banner_image_3,
        team_images,
      ]
    );
    return result.rows[0];
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};
