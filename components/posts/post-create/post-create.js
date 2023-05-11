import Editor from "@/components/editor/editor";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import classes from "./post-create.module.css";
import axios from "axios";
import { useRouter } from "next/router";

export default function PostCreate() {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    // const res = await axios.post("/api/posts", {
    //   title: data.title,
    //   abstract: data.abstract,
    //   description: data.description,
    // });

    // if (res.data.ok) {
    //   router.push("/posts");
    // }

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
  };

  return (
    <div className={classes.content}>
      <h1 className={classes.title}>Create Post</h1>
      <Box>
        <form onSubmit={handleSubmit(submitForm)}>
          {/* TITLE */}
          <FormControl mt={4}>
            <FormLabel>Title</FormLabel>
            <Controller
              control={control}
              name="title"
              defaultValue=""
              rules={{
                required: "This field is required",
                // minLength: {
                //   value: 12,
                //   message: "This input must exceed 11 characters",
                // },
              }}
              render={({ field }) => (
                <Input
                  isInvalid={errors.title?.type}
                  errorBorderColor={errors.title?.type ? "red.500" : undefined}
                  {...field}
                />
              )}
            />
            {errors.title?.type && (
              <Text fontSize="md" color="red.500">
                {errors.title?.message}
              </Text>
            )}
          </FormControl>
          {/* ABSTRACT */}
          <FormControl mt={4}>
            <FormLabel>Abstract</FormLabel>
            <Controller
              control={control}
              name="abstract"
              defaultValue=""
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <Textarea
                  isInvalid={errors.abstract?.type}
                  errorBorderColor={
                    errors.abstract?.type ? "red.500" : undefined
                  }
                  {...field}
                />
              )}
            />
            {errors.abstract?.type && (
              <Text fontSize="md" color="red.500">
                {errors.abstract?.message}
              </Text>
            )}
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>

            <Controller
              control={control}
              name="description"
              defaultValue=""
              render={({ field }) => (
                <Editor {...field} onChange={field.onChange} />
              )}
            />
          </FormControl>
          <Button mt={4} w="full" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
}
