import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state/index";
import { Box, Typography, useTheme, useMediaQuery, Button, TextField } from "@mui/material";
import Dropzone from "react-dropzone";
import * as yup from "yup";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  otherNames: yup.string(),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  phone: yup.string().required("Phone number is required"),
  picture: yup.mixed(),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  otherNames: "",
  email: "",
  password: "",
  phone: "",
  picture: null,
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const AuthForm = () => {
  const [pageType, setPageType] = useState("login");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const isNonMobileScreen = useMediaQuery("(min-width: 600px)");

  const isRegister = pageType === "register";
  const isLogin = pageType === "login";

  const handleRegister = async (values) => {
    try {
      const formData = new FormData();
      for (let value in values) {
        formData.append(value, values[value]);
      }
      formData.append("picturePath", values.picture.name);

      const response = await fetch("/api/v1/auth/register", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data) {
        setPageType("login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = async (values) => {
    try {
      const response = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (data) {
        dispatch(
          setLogin({
            user: data.user,
            token: data.token,
          })
        );
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setIsSubmitting(true);

    try {
      if (isRegister) {
        await registerSchema.validate(values, { abortEarly: false });
        await handleRegister(values);
      } else {
        await loginSchema.validate(values, { abortEarly: false });
        await handleLogin(values);
      }

      resetForm();
    } catch (err) {
      console.log(err);
    }

    setIsSubmitting(false);
    setSubmitting(false);
  };

  const handleImageDrop = (acceptedFiles, setFieldValue) => {
    setFieldValue("picture", acceptedFiles[0]);
  };

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={isRegister ? initialValuesRegister : initialValuesLogin}
        validationSchema={isRegister ? registerSchema : loginSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          resetForm,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              gap="15px"
              sx={{
                "& > div": {
                  gridColumn: isNonMobileScreen ? undefined : "span 4",
                },
              }}
            >
              {isRegister && (
                <>
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                    sx={{ gridColumn: "span 2" }}
                  />
  
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                    sx={{ gridColumn: "span 2" }}
                  />
  
  <TextField
                    label="Other Names"
                    name="otherNames"
                    value={values.otherNames}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.otherNames && Boolean(errors.otherNames)}
                    helperText={touched.otherNames && errors.otherNames}
                    sx={{ gridColumn: "span 2" }}
                  />

                  <TextField
                    label="Phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                    sx={{ gridColumn: "span 4" }}
                  />

                  <Box
                    gridColumn="span 4"
                    border="1px solid black"
                    borderRadius="5px"
                    padding="20px"
                  >
                    <Dropzone
                      acceptedFiles=".jpg, .png, .jpeg"
                      multiple={false}
                      onDrop={(acceptedFiles) =>
                        handleImageDrop(acceptedFiles, setFieldValue)
                      }
                    >
                      {({ getRootProps, getInputProps }) => (
                        <Box
                          {...getRootProps()}
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="center"
                          border="1px dashed black"
                          borderRadius="5px"
                          padding="20px"
                          sx={{ "&:hover": { cursor: "pointer" } }}
                        >
                          <input {...getInputProps()} />
                          <Typography>
                            Drag and drop an image here
                          </Typography>
                          <Typography>or</Typography>
                          <Button variant="contained">Browse</Button>

                          {values.picture && (
                            <Box>
                              <Typography>{values.picture.name}</Typography>
                              <Typography>
                                {values.picture.size} bytes
                              </Typography>
                            </Box>
                          )}
                        </Box>
                      )}
                    </Dropzone>
                  </Box>
                </>
              )}
              {/* Common fields for registration and login */}
              <TextField
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
  
              <TextField
                label="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
              />
  
              {/* Rest of the fields for login */}
            </Box>
  
            {/* BUTTONS */}
            <Box>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  m: "10px 0",
                  p: "1rem",
                  borderRadius: "5px",
                  backgroundColor: theme.palette.primary.main,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                    color: theme.palette.primary.contrastText,
                  },
                }}
                disabled={isSubmitting}
              >
                {isRegister ? "Register" : "Login"}
              </Button>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  cursor: "pointer",
                  color: theme.palette.primary.main,
                  "&:hover": {
                    color: theme.palette.primary.dark,
                    textDecoration: "underline",
                  },
                }}
                onClick={() => {
                  setPageType(isRegister ? "login" : "register");
                  resetForm();
                }}
              >
              {isRegister 
              ? "Already have an account? Login" 
              : "Don't have an account? Register"}
            </Typography>
          </Box>
        </Form>
      )}
      </Formik>          
    </div>
  );
};

export default AuthForm;