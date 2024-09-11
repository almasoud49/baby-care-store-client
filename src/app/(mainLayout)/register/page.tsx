/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Box, Stack, Typography, Button } from "@mui/material";
import Logo from "../../../assets/baby-logo.png";
import Image from "next/image";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { userRegister } from "@/utils/actions/UserRegister";
import FormProvider from "@/components/form/FormProvider";
import FormInput from "@/components/form/FormInput";

const RegisterPage = () => {
    const router = useRouter();

    const handleRegister = async (values: FieldValues) => {
        try {
          const res = await userRegister(values);
          if (res?.success) {
            toast.success(res?.message);
            router.push("/login");
          } else if (!res?.success) {
            toast.error(res.message);
          }
        } catch (err: any) {
          console.log(err);
        }
      };
    return (
        <div>
           <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
        >
          <Image src={Logo} alt="Logo" width={40} height={40} />
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "600",
              marginLeft: "3px",
              color: "#0C1734",
            }}
          >
            Baby Care
          </Typography>
        </Box>
        <Stack
          sx={{
            border: "1px solid #c1c1c1",
            padding: "20px",
            borderRadius: "5px",
            maxWidth: 450,
            width: "100%",
          }}
        >
          <Box marginBottom="15px">
            <Typography
              color="#0C1734"
              variant="h5"
              fontWeight={600}
              textAlign="center"
            >
              Sign up For Free!
            </Typography>
          </Box>

          <Box>
            <FormProvider onSubmit={handleRegister}>
              <FormInput
                name="name"
                label="Full Name"
                required
                type="text"
                fullWidth
                size="medium"
              />
              <Box margin="10px 0">
                <FormInput
                  name="email"
                  label="Email"
                  required
                  type="email"
                  fullWidth
                  size="medium"
                />
              </Box>
              <FormInput
                name="password"
                label="Password"
                required
                type="password"
                fullWidth
                size="medium"
              />
              <Box>
                <Typography
                  sx={{
                    marginTop: "10px",
                    color: "#0C1734",
                    textAlign: "center",
                    fontSize: "16px",
                  }}
                >
                  I agree to the{" "}
                  <Box component={Link} href="" color="#EF4444">
                    privacy policy
                  </Box>
                  and{" "}
                  <Box component={Link} href="" color="#EF4444">
                    terms of service.
                  </Box>{" "}
                </Typography>
              </Box>
              <Button
                sx={{
                  margin: "10px 0px",
                  padding: "12px 0",
                  backgroundColor: "#EF4444",
                  "&:hover": {
                    backgroundColor: "#EF4444",
                  },
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>

              <Stack display="flex" alignItems="center" justifyItems="center">
                <Box
                  sx={{ color: "#EF4444", fontSize: "18px" }}
                  component={Link}
                  href="/login"
                >
                  Already have an account?
                </Box>
              </Stack>
            </FormProvider>
          </Box>
        </Stack>
      </Stack> 
        </div>
    );
};

export default RegisterPage;