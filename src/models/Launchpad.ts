import { query } from "../db";

interface Data {
  cancel: boolean;
  cis2_amount: number;
  cis2_price: number;
  cliff_duration: number;
  cliff_period: string;
  description: string;
  dev_paid: number;
  discord_url: string;
  end_time: string;
  fb_url: string;
  github_url: string;
  hard_cap: number;
  holders: number;
  address: string;
  amount: number;
  instagram_url: string;
  invest_amount: number;
  live: boolean;
  live_pause_count: number;
  logo_url: string;
  maximum_invest: number;
  minimum_invest: number;
  owner: string;
  pause_start: string;
  pause_until: string;
  reddit_url: string;
  soft_cap: number;
  start_time: string;
  telegram_url: string;
  title: string;
  token_release_data: number[];
  total_tx: number;
  twitter_url: string;
  website_url: string;
}

export const createData = async (data: Data) => {
  const {
    cancel,
    cis2_amount,
    cis2_price,
    cliff_duration,
    cliff_period,
    description,
    dev_paid,
    discord_url,
    end_time,
    fb_url,
    github_url,
    hard_cap,
    holders,
    address,
    amount,
    instagram_url,
    invest_amount,
    live,
    live_pause_count,
    logo_url,
    maximum_invest,
    minimum_invest,
    owner,
    pause_start,
    pause_until,
    reddit_url,
    soft_cap,
    start_time,
    telegram_url,
    title,
    token_release_data,
    total_tx,
    twitter_url,
    website_url,
  } = data;

  const result = await query(
    "INSERT INTO launchpad_data(cancel, cis2_amount, cis2_price, cliff_duration, cliff_period, description, dev_paid, discord_url, end_time, fb_url, github_url, hard_cap, holders, address, amount, instagram_url, invest_amount, live, live_pause_count, logo_url, maximum_invest, minimum_invest, owner, pause_start, pause_until, reddit_url, soft_cap, start_time, telegram_url, title, token_release_data, total_tx, twitter_url, website_url) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34) RETURNING *",
    [
      cancel,
      cis2_amount,
      cis2_price,
      cliff_duration,
      cliff_period,
      description,
      dev_paid,
      discord_url,
      end_time,
      fb_url,
      github_url,
      hard_cap,
      holders,
      address,
      amount,
      instagram_url,
      invest_amount,
      live,
      live_pause_count,
      logo_url,
      maximum_invest,
      minimum_invest,
      owner,
      pause_start,
      pause_until,
      reddit_url,
      soft_cap,
      start_time,
      telegram_url,
      title,
      token_release_data,
      total_tx,
      twitter_url,
      website_url,
    ]
  );

  return result.rows[0];
};

export const readData = async (id: number) => {
  const result = await query("SELECT * FROM launchpad_data WHERE id = $1", [id]);
  return result.rows[0];
};

export const updateData = async (id: number, updates: Partial<Data>) => {
  const {
    cancel,
    cis2_amount,
    cis2_price,
    cliff_duration,
    cliff_period,
    description,
    dev_paid,
    discord_url,
    end_time,
    fb_url,
    github_url,
    hard_cap,
    holders,
    address,
    amount,
    instagram_url,
    invest_amount,
    live,
    live_pause_count,
    logo_url,
    maximum_invest,
    minimum_invest,
    owner,
    pause_start,
    pause_until,
    reddit_url,
    soft_cap,
    start_time,
    telegram_url,
    title,
    token_release_data,
    total_tx,
    twitter_url,
    website_url,
  } = updates;
  const result = await query(
    "UPDATE launchpad_data SET cancel=$1 , cis2_amount=$2 , cis2_price=$3 , cliff_duration=$4 , cliff_period=$5 , description=$6 , dev_paid=$7 , discord_url=$8 , end_time=$9 , fb_url=$10 , github_url=$11 , hard_cap=$12 , holders=$13 , address=$14 , amount=$15 , instagram_url=$16 , invest_amount=$17 , live=$18 , live_pause_count=$19 , logo_url=$20 , maximum_invest=$21 , minimum_invest=$22 , owner=$23 , pause_start=$24 , pause_until=$25 , reddit_url=$26 , soft_cap=$27 , start_time=$28 , telegram_url=$29 , title=$30 , token_release_data=ARRAY[$31]::integer[], total_tx=$32 , twitter_url=$33 , website_url=$34 WHERE id=$35 RETURNING *",
    [
      cancel,
      cis2_amount,
      cis2_price,
      cliff_duration,
      cliff_period,
      description,
      dev_paid,
      discord_url,
      end_time,
      fb_url,
      github_url,
      hard_cap,
      holders,
      address,
      amount,
      instagram_url,
      invest_amount,
      live,
      live_pause_count,
      logo_url,
      maximum_invest,
      minimum_invest,
      owner,
      pause_start,
      pause_until,
      reddit_url,
      soft_cap,
      start_time,
      telegram_url,
      title,
      token_release_data,
      total_tx,
      twitter_url,
      website_url,
    ]
  );
  return result.rows[0];
};
export const deleteData = async (id: number) => {
  const result = await query("DELETE FROM launchpad_data WHERE id=$1", [id]);
  return result.rowCount;
};

export const getAllLaunchpadData = async () => {
  const result = await query("SELECT * FROM launchpad_data",[]);
  return result.rows;
};

