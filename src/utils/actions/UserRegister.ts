/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const userRegister = async (data: any) => {
  const res = await fetch(
    `${process.env.SERVER_URL}/api/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  const userInfo = await res.json();

  return userInfo;
};
