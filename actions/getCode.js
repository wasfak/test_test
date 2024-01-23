"use server";

import db from "@/db";
import CodeModel from "@/models/codeModel";

export const getCode = async (code) => {
  const search = Number(code);
  await db.connectDb();
  const searchedCode = await CodeModel.find({ Code: search });

  return searchedCode;
};
